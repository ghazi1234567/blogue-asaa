import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Save, 
  Eye, 
  Calendar, 
  Tag,
  Image,
  ArrowLeft
} from 'lucide-react'

export function AdminPostEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const [post, setPost] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    status: 'draft',
    categoryId: '',
    tags: [],
    metaTitle: '',
    metaDescription: '',
    scheduledFor: ''
  })

  const handleSave = () => {
    // In real app, save to database
    console.log('Saving post:', post)
    navigate('/admin/posts')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/admin/posts')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditing ? 'Edit Post' : 'Create New Post'}
            </h1>
            <p className="text-gray-600">
              {isEditing ? 'Update your blog post' : 'Write and publish a new blog post'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700">
            <Save className="mr-2 h-4 w-4" />
            Save Post
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Title</label>
                <Input
                  placeholder="Enter post title..."
                  value={post.title}
                  onChange={(e) => setPost({...post, title: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Slug</label>
                <Input
                  placeholder="post-url-slug"
                  value={post.slug}
                  onChange={(e) => setPost({...post, slug: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Excerpt</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={3}
                  placeholder="Brief description of the post..."
                  value={post.excerpt}
                  onChange={(e) => setPost({...post, excerpt: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-gray-300 rounded-md">
                <div className="border-b border-gray-300 p-3 bg-gray-50">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">Bold</Button>
                    <Button variant="ghost" size="sm">Italic</Button>
                    <Button variant="ghost" size="sm">Link</Button>
                    <Button variant="ghost" size="sm">
                      <Image className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <textarea
                  className="w-full p-4 border-0 resize-none focus:ring-0 focus:outline-none"
                  rows={20}
                  placeholder="Write your post content here..."
                  value={post.content}
                  onChange={(e) => setPost({...post, content: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Publish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
                <select 
                  value={post.status}
                  onChange={(e) => setPost({...post, status: e.target.value})}
                  className="w-full h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
              
              {post.status === 'scheduled' && (
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Schedule For</label>
                  <Input
                    type="datetime-local"
                    value={post.scheduledFor}
                    onChange={(e) => setPost({...post, scheduledFor: e.target.value})}
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                <select 
                  value={post.categoryId}
                  onChange={(e) => setPost({...post, categoryId: e.target.value})}
                  className="w-full h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
                >
                  <option value="">Select Category</option>
                  <option value="1">Match Reports</option>
                  <option value="2">News</option>
                  <option value="3">Analysis</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload featured image</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
                <Input
                  placeholder="Or enter image URL..."
                  value={post.featuredImage}
                  onChange={(e) => setPost({...post, featuredImage: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Add tags separated by commas..." />
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline">Championship</Badge>
                <Badge variant="outline">Victory</Badge>
                <Badge variant="outline">
                  <Tag className="h-3 w-3 mr-1" />
                  Add Tag
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Meta Title</label>
                <Input
                  placeholder="SEO title..."
                  value={post.metaTitle}
                  onChange={(e) => setPost({...post, metaTitle: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Meta Description</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={3}
                  placeholder="SEO description..."
                  value={post.metaDescription}
                  onChange={(e) => setPost({...post, metaDescription: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}