import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, Calendar, User, Eye } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const mockSearchResults = [
  {
    id: '1',
    title: 'ASA Wins Historic Championship Final',
    excerpt: 'In a thrilling match that will be remembered for generations...',
    slug: 'asa-wins-historic-championship-final',
    featuredImage: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Ahmed Benali',
    publishedAt: '2025-01-15',
    category: 'Match Reports',
    views: 2847
  }
]

export function SearchPage() {
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [results, setResults] = useState(mockSearchResults)

  useEffect(() => {
    const query = searchParams.get('q')
    if (query) {
      setSearchQuery(query)
      // In real app, perform search API call here
      setResults(mockSearchResults.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      ))
    }
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, update URL and perform search
  }

  return (
    <>
      <Helmet>
        <title>Search Results - ASA Sports Blog</title>
        <meta name="description" content={`Search results for "${searchQuery}" on ASA Sports Blog`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
          <form onSubmit={handleSearch} className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </form>
        </div>

        {searchQuery && (
          <p className="text-gray-600 mb-8">
            Found {results.length} result(s) for "{searchQuery}"
          </p>
        )}

        <div className="space-y-8">
          {results.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    <Link to={`/post/${post.slug}`} className="hover:text-red-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
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
              </div>
            </article>
          ))}
        </div>

        {results.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or browse our categories.
            </p>
            <Link to="/categories" className="inline-block mt-4">
              <Button variant="outline">Browse Categories</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}