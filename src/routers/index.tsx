import React from "react"

// const Dashboard = React.lazy(() => import('@/pages/dashboard'))
// const Settings = React.lazy(() => import("@/pages/settings"))


import Dashboard from '@/pages/dashboard'
import Settings from "@/pages/settings"



const routes = [{
  path: '/dashboard',
  title: '首页',
  component: <Dashboard />
}, {
  path: '/settings',
  title: '设置',
  component: <Settings />
}]

export default routes

