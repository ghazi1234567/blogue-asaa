import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings as SettingsIcon, Save, Globe, Shield, Bell } from 'lucide-react'

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Configure your blog settings and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>General Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Blog Title</label>
              <Input defaultValue="ASA - Astre Sportif D'Agadir" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Blog Description</label>
              <Input defaultValue="Official blog of ASA Sports Club" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Website URL</label>
              <Input defaultValue="https://asa-agadir.ma" />
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Change Password</label>
              <Input type="password" placeholder="New password" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Confirm Password</label>
              <Input type="password" placeholder="Confirm new password" />
            </div>
            <Button variant="outline">
              Update Password
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Email notifications</span>
              <Button variant="outline" size="sm">Enable</Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Push notifications</span>
              <Button variant="outline" size="sm">Enable</Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Weekly reports</span>
              <Button variant="outline" size="sm">Enable</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="h-5 w-5" />
              <span>Advanced</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Posts per page</label>
              <Input type="number" defaultValue="10" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Default post status</label>
              <select className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <Button variant="outline">
              Reset to Defaults
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}