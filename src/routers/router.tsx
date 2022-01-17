import React from "react"
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting, IconUser, IconList } from '@douyinfe/semi-icons'


const Dashboard = React.lazy(() => import('@/pages/dashboard'))
const Settings = React.lazy(() => import("@/pages/settings"))
const Overview = React.lazy(() => import("@//pages/overview"))


export interface routerProps {
  path?: string
  title: string
  icon?: JSX.Element
  component?: JSX.Element
  children?: routerProps[]
}


const routes: routerProps[] = [{
  title: '首页',
  icon: <IconHome size={"large"} />,
  children: [
    {
      title: "面板",
      path: '/dashboard',
      component: <Dashboard />,
    },
    {
      title: '慨览',
      path: '/overview',
      component: <Overview />
    }
  ]
}, {
  path: '/form',
  title: '表单',
  icon: <IconHistogram size={"large"} />,
  component: <Settings />
}, {
  path: '/list',
  title: '列表',
  icon: <IconList size={"large"} />,
  component: <Settings />
}, {
  path: '/users',
  title: '用户',
  icon: <IconUser size={"large"} />,
  component: <Settings />
}, {
  path: '/settings',
  title: '设置',
  icon: <IconSetting size={"large"} />,
  component: <Settings />
}]

export default routes

