import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Users, 
  MessageSquare, 
  Eye, 
  TrendingUp,
  Plus,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react'

const stats = [
  {
    title: 'Total Posts',
    value: '247',
    change: '+12%',
    changeType: 'positive',
    icon: FileText,
    color: 'text-red-600'
  },
  {
    title: 'Total Users',
    value: '1,429',
    change: '+5%',
    changeType: 'positive',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Comments',
    value: '2,847',
    change: '-2%',
    changeType: 'negative',
    icon: MessageSquare,
    color: 'text-green-600'
  },
  {
    title: 'Total Views',
    value: '89,429',
    change: '+18%',
    changeType: 'positive',
    icon: Eye,
    color: 'text-purple-600'
  }
]

const recentPosts = [
  { title: 'ASA Victory Against Raja Casablanca', status: 'Published', date: '2 hours ago' },
  { title: 'New Player Transfers for 2025 Season', status: 'Draft', date: '1 day ago' },
  { title: 'Training Camp Updates', status: 'Published', date: '3 days ago' },
]

const pendingTasks = [
  { task: 'Review 5 pending comments', priority: 'high', count: 5 },
  { task: 'Approve 3 scheduled posts', priority: 'medium', count: 3 },
  { task: 'Update site settings', priority: 'low', count: 1 },
]

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your blog.
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center space-x-1">
                <ArrowUpRight className={`h-3 w-3 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`} />
                <p className={`text-xs font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Analytics Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Analytics Overview</CardTitle>
              <Button variant="outline" size="sm">
                View Details
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Analytics chart would go here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className={`h-4 w-4 ${
                      task.priority === 'high' ? 'text-red-600' : 
                      task.priority === 'medium' ? 'text-yellow-600' : 'text-gray-600'
                    }`} />
                    <span className="text-sm font-medium text-gray-900">{task.task}</span>
                  </div>
                  <Badge variant={
                    task.priority === 'high' ? 'destructive' : 
                    task.priority === 'medium' ? 'default' : 'secondary'
                  } className="text-xs">
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <p className="font-medium text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
                <Badge variant={post.status === 'Published' ? 'default' : 'secondary'}>
                  {post.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}