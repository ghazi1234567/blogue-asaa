import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, Eye, FolderOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const mockCategoryPosts = [
  {
    id: '1',
    title: 'ASA vs Raja Casablanca - Championship Final',
    excerpt: 'Complete match report from the historic championship final.',
    slug: 'asa-vs-raja-championship-final',
    featuredImage: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Ahmed Benali',
    publishedAt: '2025-01-15',
    views: 2847
  },
  {
    id: '2',
    title: 'ASA Defeats Wydad in Semi-Final Thriller',
    excerpt: 'Dramatic semi-final victory sets up championship showdown.',
    slug: 'asa-defeats-wydad-semi-final',
    featuredImage: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Omar Idrissi',
    publishedAt: '2025-01-08',
    views: 1567
  }
]

export function CategoryPage() {
  const { slug } = useParams()
  
  // Mock category data - in real app, fetch based on slug
  const category = {
    name: 'Match Reports',
    description: 'Detailed analysis and reports from ASA matches',
    postCount: 23
  }

  return (
    <>
      <Helmet>
        <title>{category.name} - ASA Sports Blog</title>
        <meta name="description" content={`${category.description} - Browse all posts in ${category.name} category.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <FolderOpen className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            {category.description}
          </p>
          <Badge variant="outline">{category.postCount} posts</Badge>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCategoryPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link to={`/post/${post.slug}`} className="hover:text-red-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.publishedAt}</span>
                    </span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{post.views}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}