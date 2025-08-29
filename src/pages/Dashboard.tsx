import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Users, Eye, TrendingUp } from 'lucide-react'

const stats = [
  {
    title: 'Total Posts',
    value: '124',
    change: '+12%',
    icon: FileText,
    color: 'text-blue-600'
  },
  {
    title: 'Active Users',
    value: '1,234',
    change: '+5%',
    icon: Users,
    color: 'text-green-600'
  },
  {
    title: 'Page Views',
    value: '45,678',
    change: '+23%',
    icon: Eye,
    color: 'text-purple-600'
  },
  {
    title: 'Growth Rate',
    value: '18.2%',
    change: '+2.1%',
    icon: TrendingUp,
    color: 'text-orange-600'
  }
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to ASA Blog Admin Dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-green-600 font-medium">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'ASA Victory Against Raja Casablanca', status: 'Published', date: '2 hours ago' },
                { title: 'New Player Transfers for 2025 Season', status: 'Draft', date: '1 day ago' },
                { title: 'Training Camp Updates', status: 'Published', date: '3 days ago' },
              ].map((post, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{post.title}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Create New Post
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}