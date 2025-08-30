import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  FolderOpen, 
  MessageSquare,
  Image,
  Search,
  BarChart3,
  Palette,
  Shield,
  Settings,
  LogOut,
  Trophy,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Posts', href: '/admin/posts', icon: FileText },
  { name: 'Categories', href: '/admin/categories', icon: FolderOpen },
  { name: 'Comments', href: '/admin/comments', icon: MessageSquare },
  { name: 'Media', href: '/admin/media', icon: Image },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'SEO', href: '/admin/seo', icon: Search },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Appearance', href: '/admin/appearance', icon: Palette },
  { name: 'Security', href: '/admin/security', icon: Shield },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
  const location = useLocation()
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Blog Admin</h1>
          </div>
        </div>
      </div>
      
      {/* View Blog Link */}
      <div className="px-4 py-3 border-b border-gray-200">
        <Link to="/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Blog
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Sign Out */}
      <div className="border-t border-gray-200 p-4">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-gray-700 hover:text-gray-900"
          onClick={handleSignOut}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}