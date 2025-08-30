import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Menu, X, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-900">ASA Sports Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-red-600 transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Search and Admin */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </form>
            <Link to="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-red-600 transition-colors">
                Categories
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </Link>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </form>
              <Link to="/admin">
                <Button variant="outline" size="sm" className="w-full">
                  Admin
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}