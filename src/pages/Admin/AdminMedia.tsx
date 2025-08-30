import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Upload, 
  Search, 
  Filter, 
  Image, 
  Video, 
  File,
  Trash2,
  Download,
  Eye,
  Grid,
  List
} from 'lucide-react'

const mockMedia = [
  {
    id: '1',
    filename: 'championship-celebration.jpg',
    originalName: 'ASA Championship Celebration.jpg',
    type: 'image',
    size: '2.4 MB',
    uploadedBy: 'Ahmed Benali',
    uploadedAt: '2025-01-15',
    url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    filename: 'stadium-construction.jpg',
    originalName: 'New Stadium Construction.jpg',
    type: 'image',
    size: '1.8 MB',
    uploadedBy: 'Fatima Zahra',
    uploadedAt: '2025-01-12',
    url: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    filename: 'training-session.mp4',
    originalName: 'Training Session Highlights.mp4',
    type: 'video',
    size: '15.2 MB',
    uploadedBy: 'Omar Idrissi',
    uploadedAt: '2025-01-10',
    url: null
  }
]

export function AdminMedia() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [typeFilter, setTypeFilter] = useState('all')

  const filteredMedia = mockMedia.filter(item => {
    const matchesSearch = item.filename.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === 'all' || item.type === typeFilter
    return matchesSearch && matchesType
  })

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="h-5 w-5 text-blue-600" />
      case 'video':
        return <Video className="h-5 w-5 text-purple-600" />
      default:
        return <File className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-600">
            Upload and manage your media files
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </Button>
      </div>

      {/* Upload Area */}
      <Card>
        <CardContent className="p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Media Files</h3>
            <p className="text-gray-600 mb-4">
              Drag and drop files here, or click to browse
            </p>
            <Button variant="outline">
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filters and View Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
              >
                <option value="all">All Types</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
                <option value="document">Documents</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'grid' ? (
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {filteredMedia.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    {item.type === 'image' && item.url ? (
                      <img src={item.url} alt={item.filename} className="w-full h-full object-cover" />
                    ) : (
                      getFileIcon(item.type)
                    )}
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">{item.filename}</h4>
                  <p className="text-xs text-gray-600 mb-2">{item.size}</p>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredMedia.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {item.type === 'image' && item.url ? (
                      <img src={item.url} alt={item.filename} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      getFileIcon(item.type)
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.filename}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{item.size}</span>
                      <span>Uploaded by {item.uploadedBy}</span>
                      <span>{item.uploadedAt}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}