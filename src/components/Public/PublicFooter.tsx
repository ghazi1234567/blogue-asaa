import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Mail, Phone, MapPin } from 'lucide-react'

export function PublicFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">ASA Sports</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Official blog of Astre Sportif D'Agadir. Stay updated with the latest news, 
              match reports, and insights from our football club.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-red-600 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-red-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/news" className="text-gray-600 hover:text-red-600 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/category/matches" className="text-gray-600 hover:text-red-600 transition-colors">
                  Matches
                </Link>
              </li>
              <li>
                <Link to="/category/players" className="text-gray-600 hover:text-red-600 transition-colors">
                  Players
                </Link>
              </li>
              <li>
                <Link to="/category/training" className="text-gray-600 hover:text-red-600 transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Agadir, Morocco</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@asa-sports.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+212 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Statistics */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-red-600">87</div>
              <div className="text-sm text-gray-600">Total Posts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">6</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">156</div>
              <div className="text-sm text-gray-600">Comments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">12.5K</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 ASA Sports Blog. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}