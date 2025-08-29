import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Edit, Trash2, User, Mail, Calendar } from 'lucide-react'

const mockUsers = [
  {
    id: '1',
    name: 'Ahmed Benali',
    email: 'ahmed.benali@asa.ma',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2024-01-15',
    lastActive: '2 hours ago',
    postsCount: 23
  },
  {
    id: '2',
    name: 'Fatima Zahra',
    email: 'fatima.zahra@asa.ma',
    role: 'editor',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2024-02-20',
    lastActive: '1 day ago',
    postsCount: 18
  },
  {
    id: '3',
    name: 'Omar Idrissi',
    email: 'omar.idrissi@asa.ma',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2024-03-10',
    lastActive: '3 days ago',
    postsCount: 12
  }
]

export function Users() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin': return 'default'
      case 'editor': return 'secondary'
      case 'author': return 'outline'
      default: return 'outline'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">
            Manage user accounts and permissions
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-foreground">{user.name}</h3>
                      <Badge variant={getRoleBadgeVariant(user.role)}>
                        {user.role}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Mail className="mr-1 h-3 w-3" />
                        {user.email}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        Joined {user.joinedAt}
                      </span>
                      <span>{user.postsCount} posts</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Last active: {user.lastActive}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
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