import React from 'react'
import { Outlet } from 'react-router-dom'
import { PublicHeader } from './PublicHeader'
import { PublicFooter } from './PublicFooter'

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  )
}