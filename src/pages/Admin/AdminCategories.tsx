import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Edit, Trash2, FolderOpen, FileText } from 'lucide-react'

const mockCategories = [
  {
    id: '1',
    name: 'Match Reports',
    slug: 'match-reports',
    description: 'Detailed reports from ASA matches',
    postCount: 23,
    color: '#EF4444'
  },
  {
    id: '2',
    name: 'News',
    slug: 'news',
    description: 'Latest news and updates from ASA',
    postCount: 18,
    color: '#3B82F6'
  },
  {
    id: '3',
    name: 'Player Profiles',
    slug: 'players',
    description: 'In-depth player profiles and interviews',
    postCount: 15,
    color: '#10B981'
  },
  {
    id: '4',
    name: 'Analysis',
    slug: 'analysis',
    description: 'Tactical analysis and match breakdowns',
    postCount: 12,
    color: '#8B5CF6'
  }
]

export function AdminCategories() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [newCategory, setNewCategory] = useState({
    name: '',
    slug: '',
    description: '',
    color: '#3B82F6'
  })

  const filteredCategories = mockCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, save to database
    console.log('Creating category:', newCategory)
    setShowForm(false)
    setNewCategory({ name: '', slug: '', description: '', color: '#3B82F6' })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600">
            Organize your content with categories
          </p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" />
          New Category
        </Button>
      </div>

      {/* Create Category Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Category</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Name</label>
                  <Input
                    placeholder="Category name"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Slug</label>
                  <Input
                    placeholder="category-slug"
                    value={newCategory.slug}
                    onChange={(e) => setNewCategory({...newCategory, slug: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Description</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={3}
                  placeholder="Category description..."
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Color</label>
                <input
                  type="color"
                  value={newCategory.color}
                  onChange={(e) => setNewCategory({...newCategory, color: e.target.value})}
                  className="w-16 h-10 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex items-center space-x-3">
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  Create Category
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Categories List */}
      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <FolderOpen className="h-5 w-5 text-gray-600" />
                  </div>
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" />
                    <span>{category.postCount}</span>
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
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