import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Edit, Trash2, FolderOpen } from 'lucide-react'

const mockCategories = [
  {
    id: '1',
    name: 'Match Reports',
    slug: 'match-reports',
    description: 'Detailed reports from ASA matches',
    postCount: 45
  },
  {
    id: '2',
    name: 'News',
    slug: 'news',
    description: 'Latest news and updates from ASA',
    postCount: 32
  },
  {
    id: '3',
    name: 'Player Profiles',
    slug: 'player-profiles',
    description: 'In-depth player profiles and interviews',
    postCount: 28
  },
  {
    id: '4',
    name: 'Analysis',
    slug: 'analysis',
    description: 'Tactical analysis and match breakdowns',
    postCount: 19
  }
]

export function Categories() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = mockCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Categories</h1>
          <p className="text-muted-foreground">
            Organize your content with categories
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Category
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
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
              <Card key={category.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FolderOpen className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{category.postCount} posts</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}