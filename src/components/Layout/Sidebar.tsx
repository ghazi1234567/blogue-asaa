import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  FolderOpen, 
  Settings,
  LogOut,
  Trophy
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Posts', href: '/posts', icon: FileText },
  { name: 'Categories', href: '/categories', icon: FolderOpen },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const location = useLocation()
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r">
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-lg font-bold text-foreground">ASA Blog</h1>
            <p className="text-xs text-muted-foreground">Admin Dashboard</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t p-4">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-muted-foreground hover:text-foreground"
          onClick={handleSignOut}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}