import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, Eye, Tag, Heart, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CommentsSection } from '@/components/Public/CommentsSection'

// Mock post data - in real app, this would come from API
const mockPost = {
  id: '1',
  title: 'ASA Wins Historic Championship Final Against Raja Casablanca',
  content: `
    <p>In a thrilling match that will be remembered for generations, ASA secured their first championship title in over a decade with a spectacular 3-2 victory against Raja Casablanca at the Mohammed V Stadium in Casablanca.</p>
    
    <p>The match started with high intensity as both teams showed their determination to claim the title. ASA took an early lead in the 15th minute through a brilliant strike from midfielder Youssef Amrani, sending the traveling ASA fans into raptures.</p>
    
    <p>Raja responded quickly, equalizing just ten minutes later through their star striker. The first half ended 1-1, setting up what would become one of the most memorable finals in Moroccan football history.</p>
    
    <p>The second half saw ASA take control of the game. Goals from captain Hassan Benjelloun in the 67th minute and young talent Amine Chakir in the 78th minute put ASA in a commanding 3-1 position.</p>
    
    <p>Despite a late goal from Raja in the 85th minute that made for a tense finish, ASA held on to secure their historic victory. The final whistle sparked emotional celebrations as players, staff, and fans celebrated together.</p>
    
    <p>This championship victory marks a new era for ASA, validating years of investment in youth development and strategic planning. The club's commitment to developing local talent while maintaining competitive excellence has finally paid off.</p>
  `,
  excerpt: 'In a thrilling match that will be remembered for generations, ASA secured their first championship title in over a decade with a spectacular 3-2 victory.',
  slug: 'asa-wins-historic-championship-final',
  featuredImage: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
  author: 'Ahmed Benali',
  publishedAt: '2025-01-15',
  category: 'Match Reports',
  views: 2847,
  likes: 156,
  tags: ['Championship', 'Victory', 'Raja Casablanca', 'Historic Win'],
  metaTitle: 'ASA Wins Historic Championship Final - Match Report',
  metaDescription: 'Read the full match report of ASA\'s historic 3-2 victory against Raja Casablanca in the championship final.'
}

export function PostPage() {
  const { slug } = useParams()

  return (
    <>
      <Helmet>
        <title>{mockPost.metaTitle}</title>
        <meta name="description" content={mockPost.metaDescription} />
        <meta name="keywords" content={mockPost.tags.join(', ')} />
        <meta property="og:title" content={mockPost.title} />
        <meta property="og:description" content={mockPost.excerpt} />
        <meta property="og:image" content={mockPost.featuredImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <Badge className="mb-4">{mockPost.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {mockPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{mockPost.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{mockPost.publishedAt}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>{mockPost.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>{mockPost.likes} likes</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {mockPost.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={mockPost.featuredImage}
            alt={mockPost.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: mockPost.content }} />
        </div>

        {/* Social Actions */}
        <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-12">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Like ({mockPost.likes})
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
          <div className="text-sm text-gray-500">
            {mockPost.views.toLocaleString()} views
          </div>
        </div>

        {/* Comments Section */}
        <CommentsSection postId={mockPost.id} />
      </article>
    </>
  )
}