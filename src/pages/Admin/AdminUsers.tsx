import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Edit, Trash2, User, Mail, Calendar, Shield } from 'lucide-react'

const mockUsers = [
  {
    id: '1',
    name: 'Ahmed Benali',
    email: 'ahmed.benali@asa.ma',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2024-01-15',
    lastActive: '2 hours ago',
    postsCount: 23,
    status: 'active'
  },
  {
    id: '2',
    name: 'Fatima Zahra',
    email: 'fatima.zahra@asa.ma',
    role: 'editor',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2024-02-20',
    lastActive: '1 day ago',
    postsCount: 18,
    status: 'active'
  },
  {
    id: '3',
    name: 'Omar Idrissi',
    email: 'omar.idrissi@asa.ma',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2024-03-10',
    lastActive: '3 days ago',
    postsCount: 12,
    status: 'active'
  }
]

export function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'author',
    password: ''
  })

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge className="bg-red-100 text-red-800">Admin</Badge>
      case 'editor':
        return <Badge className="bg-blue-100 text-blue-800">Editor</Badge>
      case 'author':
        return <Badge variant="outline">Author</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Creating user:', newUser)
    setShowForm(false)
    setNewUser({ name: '', email: '', role: 'author', password: '' })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600">
            Manage user accounts and permissions
          </p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Create User Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New User</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                  <Input
                    placeholder="User's full name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="user@asa.ma"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Role</label>
                  <select 
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                    className="w-full h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
                  >
                    <option value="author">Author</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Password</label>
                  <Input
                    type="password"
                    placeholder="Temporary password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  Create User
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Users List */}
      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
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
              <div key={user.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{user.name}</h3>
                    {getRoleBadge(user.role)}
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                  <p className="text-xs text-gray-500">
                    Last active: {user.lastActive}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Shield className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
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