import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Calendar, Heart, Reply } from 'lucide-react'

interface Comment {
  id: string
  author: string
  content: string
  createdAt: string
  likes: number
  replies?: Comment[]
}

const mockComments: Comment[] = [
  {
    id: '1',
    author: 'Hassan Alami',
    content: 'What a match! I was there and the atmosphere was incredible. ASA deserved this victory!',
    createdAt: '2025-01-15',
    likes: 12,
    replies: [
      {
        id: '2',
        author: 'Youssef Benali',
        content: 'Absolutely! The team played with such heart and determination.',
        createdAt: '2025-01-15',
        likes: 5
      }
    ]
  },
  {
    id: '3',
    author: 'Aicha Idrissi',
    content: 'Congratulations to the entire team! This is just the beginning of a new era for ASA.',
    createdAt: '2025-01-15',
    likes: 8
  }
]

interface CommentsSectionProps {
  postId: string
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  const [comments, setComments] = useState(mockComments)
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [authorEmail, setAuthorEmail] = useState('')

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !authorName.trim() || !authorEmail.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: newComment,
      createdAt: new Date().toISOString().split('T')[0],
      likes: 0
    }

    setComments([comment, ...comments])
    setNewComment('')
    setAuthorName('')
    setAuthorEmail('')
  }

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''}`}>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-gray-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-gray-900">{comment.author}</span>
            <span className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {comment.createdAt}
            </span>
          </div>
          <p className="text-gray-700 mb-2">{comment.content}</p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
              <Heart className="h-3 w-3" />
              <span>{comment.likes}</span>
            </button>
            {!isReply && (
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
                <Reply className="h-3 w-3" />
                <span>Reply</span>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {comment.replies && (
        <div className="mt-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <section className="bg-gray-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-4">Leave a Comment</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Your name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your email"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          rows={4}
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <Button type="submit" className="mt-4">
          Post Comment
        </Button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  )
}