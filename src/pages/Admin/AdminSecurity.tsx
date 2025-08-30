import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Shield, Lock, Key, AlertTriangle, CheckCircle } from 'lucide-react'

export function AdminSecurity() {
  const [passwordSettings, setPasswordSettings] = useState({
    requireStrongPassword: true,
    twoFactorAuth: false,
    sessionTimeout: 60,
    maxLoginAttempts: 5
  })

  const securityChecks = [
    { name: 'Strong Password Policy', status: 'enabled', severity: 'good' },
    { name: 'Two-Factor Authentication', status: 'disabled', severity: 'warning' },
    { name: 'SSL Certificate', status: 'active', severity: 'good' },
    { name: 'Regular Backups', status: 'active', severity: 'good' },
    { name: 'Firewall Protection', status: 'active', severity: 'good' }
  ]

  const getStatusIcon = (severity: string) => {
    switch (severity) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Shield className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Security</h1>
        <p className="text-gray-600">
          Manage security settings and monitor threats
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {securityChecks.map((check, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(check.severity)}
                    <span className="text-sm font-medium text-gray-900">{check.name}</span>
                  </div>
                  <Badge variant={
                    check.severity === 'good' ? 'default' : 
                    check.severity === 'warning' ? 'secondary' : 'destructive'
                  }>
                    {check.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="h-5 w-5" />
              <span>Password Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">Strong Password Policy</span>
                <p className="text-xs text-gray-600">Require complex passwords</p>
              </div>
              <Button
                variant={passwordSettings.requireStrongPassword ? "default" : "outline"}
                size="sm"
                onClick={() => setPasswordSettings({
                  ...passwordSettings, 
                  requireStrongPassword: !passwordSettings.requireStrongPassword
                })}
              >
                {passwordSettings.requireStrongPassword ? 'Enabled' : 'Disabled'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">Two-Factor Authentication</span>
                <p className="text-xs text-gray-600">Add extra security layer</p>
              </div>
              <Button
                variant={passwordSettings.twoFactorAuth ? "default" : "outline"}
                size="sm"
                onClick={() => setPasswordSettings({
                  ...passwordSettings, 
                  twoFactorAuth: !passwordSettings.twoFactorAuth
                })}
              >
                {passwordSettings.twoFactorAuth ? 'Enabled' : 'Disabled'}
              </Button>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Session Timeout (minutes)</label>
              <Input
                type="number"
                value={passwordSettings.sessionTimeout}
                onChange={(e) => setPasswordSettings({
                  ...passwordSettings, 
                  sessionTimeout: parseInt(e.target.value)
                })}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}