import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Save, 
  Globe, 
  Mail, 
  Bell, 
  Shield,
  Palette,
  Upload
} from 'lucide-react'

export function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'ASA Sports Blog',
    siteDescription: 'Official blog of Astre Sportif D\'Agadir',
    siteUrl: 'https://blog.asa-sports.com',
    adminEmail: 'admin@asa-sports.com',
    timezone: 'Africa/Casablanca',
    postsPerPage: 10,
    defaultPostStatus: 'draft',
    allowComments: true,
    moderateComments: true,
    emailNotifications: true,
    weeklyReports: true
  })

  const handleSave = () => {
    console.log('Saving settings:', settings)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Configure your blog settings and preferences
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>General Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Site Name</label>
              <Input
                value={settings.siteName}
                onChange={(e) => setSettings({...settings, siteName: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Site Description</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={3}
                value={settings.siteDescription}
                onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Site URL</label>
              <Input
                value={settings.siteUrl}
                onChange={(e) => setSettings({...settings, siteUrl: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Admin Email</label>
              <Input
                type="email"
                value={settings.adminEmail}
                onChange={(e) => setSettings({...settings, adminEmail: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Timezone</label>
              <select 
                value={settings.timezone}
                onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                className="w-full h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
              >
                <option value="Africa/Casablanca">Africa/Casablanca</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">America/New_York</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Content Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Content Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Posts per Page</label>
              <Input
                type="number"
                value={settings.postsPerPage}
                onChange={(e) => setSettings({...settings, postsPerPage: parseInt(e.target.value)})}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Default Post Status</label>
              <select 
                value={settings.defaultPostStatus}
                onChange={(e) => setSettings({...settings, defaultPostStatus: e.target.value})}
                className="w-full h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Allow Comments</span>
                <Button
                  variant={settings.allowComments ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSettings({...settings, allowComments: !settings.allowComments})}
                >
                  {settings.allowComments ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Moderate Comments</span>
                <Button
                  variant={settings.moderateComments ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSettings({...settings, moderateComments: !settings.moderateComments})}
                >
                  {settings.moderateComments ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                <p className="text-xs text-gray-600">Get notified about new comments and posts</p>
              </div>
              <Button
                variant={settings.emailNotifications ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({...settings, emailNotifications: !settings.emailNotifications})}
              >
                {settings.emailNotifications ? 'Enabled' : 'Disabled'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">Weekly Reports</span>
                <p className="text-xs text-gray-600">Receive weekly analytics reports</p>
              </div>
              <Button
                variant={settings.weeklyReports ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({...settings, weeklyReports: !settings.weeklyReports})}
              >
                {settings.weeklyReports ? 'Enabled' : 'Disabled'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logo Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>Site Logo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload site logo</p>
                <Button variant="outline" size="sm">Choose File</Button>
              </div>
              <p className="text-xs text-gray-600">
                Recommended size: 200x60px, PNG or SVG format
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg" className="bg-red-600 hover:bg-red-700">
          <Save className="mr-2 h-4 w-4" />
          Save All Settings
        </Button>
      </div>
    </div>
  )
}