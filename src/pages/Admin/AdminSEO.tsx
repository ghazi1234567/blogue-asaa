import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Globe, 
  FileText, 
  Settings,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Save
} from 'lucide-react'

const seoPages = [
  {
    id: '1',
    title: 'ASA Wins Championship Final',
    url: '/post/asa-wins-championship-final',
    metaTitle: 'ASA Wins Historic Championship Final - Match Report',
    metaDescription: 'Read the full match report of ASA\'s historic 3-2 victory against Raja Casablanca.',
    status: 'optimized',
    issues: 0
  },
  {
    id: '2',
    title: 'New Stadium Construction Updates',
    url: '/post/new-stadium-construction',
    metaTitle: '',
    metaDescription: '',
    status: 'needs-attention',
    issues: 2
  }
]

export function AdminSEO() {
  const [globalSEO, setGlobalSEO] = useState({
    siteTitle: 'ASA Sports Blog - Official Blog of Astre Sportif D\'Agadir',
    siteDescription: 'Stay updated with the latest news, match reports, and insights from ASA - Astre Sportif D\'Agadir, Morocco\'s premier football club.',
    siteKeywords: 'ASA, Astre Sportif Agadir, Morocco football, sports blog, match reports',
    siteUrl: 'https://blog.asa-sports.com',
    googleAnalytics: '',
    facebookPixel: ''
  })

  const handleSaveGlobalSEO = () => {
    console.log('Saving global SEO settings:', globalSEO)
  }

  const getStatusBadge = (status: string, issues: number) => {
    if (status === 'optimized') {
      return <Badge className="bg-green-100 text-green-800">Optimized</Badge>
    } else if (issues > 0) {
      return <Badge className="bg-red-100 text-red-800">{issues} Issues</Badge>
    } else {
      return <Badge className="bg-yellow-100 text-yellow-800">Needs Attention</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">SEO Management</h1>
        <p className="text-gray-600">
          Optimize your blog for search engines
        </p>
      </div>

      {/* Global SEO Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Global SEO Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Site Title</label>
              <Input
                value={globalSEO.siteTitle}
                onChange={(e) => setGlobalSEO({...globalSEO, siteTitle: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Site URL</label>
              <Input
                value={globalSEO.siteUrl}
                onChange={(e) => setGlobalSEO({...globalSEO, siteUrl: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Site Description</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              rows={3}
              value={globalSEO.siteDescription}
              onChange={(e) => setGlobalSEO({...globalSEO, siteDescription: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Keywords</label>
            <Input
              placeholder="Separate keywords with commas"
              value={globalSEO.siteKeywords}
              onChange={(e) => setGlobalSEO({...globalSEO, siteKeywords: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Google Analytics ID</label>
              <Input
                placeholder="GA-XXXXXXXXX-X"
                value={globalSEO.googleAnalytics}
                onChange={(e) => setGlobalSEO({...globalSEO, googleAnalytics: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Facebook Pixel ID</label>
              <Input
                placeholder="Facebook Pixel ID"
                value={globalSEO.facebookPixel}
                onChange={(e) => setGlobalSEO({...globalSEO, facebookPixel: e.target.value})}
              />
            </div>
          </div>
          <Button onClick={handleSaveGlobalSEO} className="bg-red-600 hover:bg-red-700">
            <Save className="mr-2 h-4 w-4" />
            Save Global Settings
          </Button>
        </CardContent>
      </Card>

      {/* Page SEO Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Page SEO Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {seoPages.map((page) => (
              <div key={page.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{page.title}</h3>
                    {getStatusBadge(page.status, page.issues)}
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">URL:</span>
                      <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{page.url}</span>
                      <a href={page.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Meta Title:</span>
                      <span className={page.metaTitle ? 'text-gray-900' : 'text-red-600'}>
                        {page.metaTitle || 'Missing'}
                      </span>
                      {page.metaTitle ? (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-600" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Meta Description:</span>
                      <span className={page.metaDescription ? 'text-gray-900' : 'text-red-600'}>
                        {page.metaDescription ? 'Set' : 'Missing'}
                      </span>
                      {page.metaDescription ? (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SEO Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sitemap</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Generate and manage your XML sitemap for search engines.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last Generated:</span>
                <span className="text-sm text-gray-600">2025-01-15 10:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View Sitemap
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Regenerate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Robots.txt</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Configure how search engines crawl your site.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status:</span>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View File
                </Button>
                <Button size="sm" variant="outline">
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}