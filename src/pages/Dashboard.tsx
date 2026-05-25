import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import { TrendingUp } from 'lucide-react'

const Dashboard = () => {
  const chartData = [
    { name: 'Jan', value: 400, users: 240 },
    { name: 'Feb', value: 300, users: 221 },
    { name: 'Mar', value: 200, users: 229 },
    { name: 'Apr', value: 278, users: 200 },
    { name: 'May', value: 190, users: 220 },
    { name: 'Jun', value: 239, users: 250 },
  ]

  const stats = [
    { label: 'Total Users', value: '24,567', change: '+12.5%' },
    { label: 'Revenue', value: '$98,234', change: '+8.2%' },
    { label: 'Engagement', value: '68.2%', change: '+3.1%' },
    { label: 'Conversion', value: '12.4%', change: '-2.3%' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
        <Button variant="primary">Export Data</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</p>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp size={20} />
              </div>
            </div>
            <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} vs last month
            </p>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue Trend">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="User Growth">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#a855f7" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
