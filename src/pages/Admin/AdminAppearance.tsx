import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Palette, Upload, Save } from 'lucide-react'

export function AdminAppearance() {
  const [theme, setTheme] = useState({
    primaryColor: '#DC2626',
    secondaryColor: '#3B82F6',
    backgroundColor: '#FFFFFF',
    textColor: '#111827',
    headerFont: 'Inter',
    bodyFont: 'Inter'
  })

  const handleSave = () => {
    console.log('Saving theme settings:', theme)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Appearance</h1>
        <p className="text-gray-600">
          Customize the look and feel of your blog
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Color Scheme</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Primary Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={theme.primaryColor}
                    onChange={(e) => setTheme({...theme, primaryColor: e.target.value})}
                    className="w-12 h-10 border border-gray-300 rounded-md"
                  />
                  <Input
                    value={theme.primaryColor}
                    onChange={(e) => setTheme({...theme, primaryColor: e.target.value})}
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Secondary Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={theme.secondaryColor}
                    onChange={(e) => setTheme({...theme, secondaryColor: e.target.value})}
                    className="w-12 h-10 border border-gray-300 rounded-md"
                  />
                  <Input
                    value={theme.secondaryColor}
                    onChange={(e) => setTheme({...theme, secondaryColor: e.target.value})}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
            <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Header Font</label>
              <select 
                value={theme.headerFont}
                onChange={(e) => setTheme({...theme, headerFont: e.target.value})}
                className="w-full h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Body Font</label>
              <select 
                value={theme.bodyFont}
                onChange={(e) => setTheme({...theme, bodyFont: e.target.value})}
                className="w-full h-10 px-3 py-2 text-sm border border-gray-300 bg-white rounded-md"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}