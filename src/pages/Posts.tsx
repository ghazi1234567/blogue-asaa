import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  User
} from 'lucide-react'

const mockPosts = [
  {
    id: '1',
    title: 'ASA Wins Championship Final',
    excerpt: 'Historic victory against Raja Casablanca in a thrilling match...',
    status: 'published',
    author: 'Ahmed Benali',
    category: 'Match Reports',
    publishedAt: '2025-01-15',
    views: 1234
  },
  {
    id: '2',
    title: 'New Stadium Construction Updates',
    excerpt: 'Latest progress on the new ASA stadium facility...',
    status: 'draft',
    author: 'Fatima Zahra',
    category: 'News',
    publishedAt: null,
    views: 0
  },
  {
    id: '3',
    title: 'Player Transfer Window Analysis',
    excerpt: 'Comprehensive analysis of the winter transfer window...',
    status: 'published',
    author: 'Omar Idrissi',
    category: 'Analysis',
    publishedAt: '2025-01-12',
    views: 856
  }
]

export function Posts() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Posts</h1>
          <p className="text-muted-foreground">
            Manage your blog posts and content
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-foreground">{post.title}</h3>
                    <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                      {post.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.publishedAt || 'Not published'}
                    </span>
                    <span className="flex items-center">
                      <Eye className="mr-1 h-3 w-3" />
                      {post.views} views
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}