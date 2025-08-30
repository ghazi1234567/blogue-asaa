import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  Check, 
  X, 
  Trash2, 
  MessageSquare,
  User,
  Calendar,
  ExternalLink
} from 'lucide-react'

const mockComments = [
  {
    id: '1',
    author: 'Hassan Alami',
    email: 'hassan@example.com',
    content: 'What a match! I was there and the atmosphere was incredible. ASA deserved this victory!',
    postTitle: 'ASA Wins Championship Final',
    postSlug: 'asa-wins-championship-final',
    status: 'pending',
    createdAt: '2025-01-15 14:30',
    ip: '192.168.1.1'
  },
  {
    id: '2',
    author: 'Aicha Idrissi',
    email: 'aicha@example.com',
    content: 'Congratulations to the entire team! This is just the beginning of a new era for ASA.',
    postTitle: 'ASA Wins Championship Final',
    postSlug: 'asa-wins-championship-final',
    status: 'approved',
    createdAt: '2025-01-15 16:45',
    ip: '192.168.1.2'
  },
  {
    id: '3',
    author: 'Spam User',
    email: 'spam@spam.com',
    content: 'Check out this amazing deal! Click here for free money!!!',
    postTitle: 'New Stadium Construction Updates',
    postSlug: 'new-stadium-construction',
    status: 'spam',
    createdAt: '2025-01-14 09:15',
    ip: '192.168.1.3'
  }
]

export function AdminComments() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredComments = mockComments.filter(comment => {
    const matchesSearch = 
      comment.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.postTitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || comment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case 'spam':
        return <Badge className="bg-red-100 text-red-800">Spam</Badge>
      case 'trash':
        return <Badge variant="secondary">Trash</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const handleApprove = (commentId: string) => {
    console.log('Approving comment:', commentId)
  }

  const handleReject = (commentId: string) => {
    console.log('Rejecting comment:', commentId)
  }

  const handleMarkSpam = (commentId: string) => {
    console.log('Marking as spam:', commentId)
  }

  const handleDelete = (commentId: string) => {
    console.log('Deleting comment:', commentId)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Comments</h1>
          <p className="text-gray-600">
            Moderate and manage user comments
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-yellow-100 text-yellow-800">
            {filteredComments.filter(c => c.status === 'pending').length} Pending
          </Badge>
          <Badge className="bg-red-100 text-red-800">
            {filteredComments.filter(c => c.status === 'spam').length} Spam
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search comments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="spam">Spam</option>
              <option value="trash">Trash</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredComments.map((comment) => (
              <div key={comment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{comment.author}</span>
                        {getStatusBadge(comment.status)}
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{comment.email}</span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {comment.createdAt}
                        </span>
                        <span>IP: {comment.ip}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-gray-700 mb-2">{comment.content}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MessageSquare className="h-3 w-3" />
                    <span>On post:</span>
                    <a 
                      href={`/post/${comment.postSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline flex items-center"
                    >
                      {comment.postTitle}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {comment.status === 'pending' && (
                    <>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleApprove(comment.id)}
                      >
                        <Check className="mr-1 h-3 w-3" />
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleReject(comment.id)}
                      >
                        <X className="mr-1 h-3 w-3" />
                        Reject
                      </Button>
                    </>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-orange-600 hover:text-orange-700"
                    onClick={() => handleMarkSpam(comment.id)}
                  >
                    Mark as Spam
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDelete(comment.id)}
                  >
                    <Trash2 className="h-3 w-3" />
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