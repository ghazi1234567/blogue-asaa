import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FolderOpen, FileText } from 'lucide-react'

const categories = [
  {
    id: '1',
    name: 'Match Reports',
    slug: 'match-reports',
    description: 'Detailed analysis and reports from ASA matches',
    postCount: 23,
    color: 'bg-red-100 text-red-600'
  },
  {
    id: '2',
    name: 'News',
    slug: 'news',
    description: 'Latest news and updates from ASA',
    postCount: 18,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: '3',
    name: 'Player Profiles',
    slug: 'players',
    description: 'In-depth player profiles and interviews',
    postCount: 15,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: '4',
    name: 'Training',
    slug: 'training',
    description: 'Training updates and tactical insights',
    postCount: 12,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: '5',
    name: 'Youth Development',
    slug: 'youth',
    description: 'Youth academy news and development programs',
    postCount: 10,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: '6',
    name: 'Community',
    slug: 'community',
    description: 'Community initiatives and social responsibility',
    postCount: 9,
    color: 'bg-teal-100 text-teal-600'
  }
]

export function CategoriesPage() {
  return (
    <>
      <Helmet>
        <title>Categories - ASA Sports Blog</title>
        <meta name="description" content="Browse all categories on ASA Sports Blog - match reports, news, player profiles, training updates and more." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Categories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our content organized by topics. From match reports to community stories, 
            find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:border-red-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                  <FolderOpen className="h-6 w-6" />
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">{category.postCount}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}