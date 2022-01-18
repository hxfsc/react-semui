import React from "react"
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting, IconUser, IconList } from "@douyinfe/semi-icons"

const Dashboard = React.lazy(() => import("@/pages/dashboard"))
const Settings = React.lazy(() => import("@/pages/settings"))
const Overview = React.lazy(() => import("@/pages/overview"))
const Users = React.lazy(() => import("@/pages/users"))
const List = React.lazy(() => import("@/pages/list"))
const SimpleList = React.lazy(() => import("@/pages/list/simple"))
const AdvancedList = React.lazy(() => import("@/pages/list/advanced"))

export interface routerProps {
  path?: string
  title: string
  icon?: JSX.Element
  component?: JSX.Element
  children?: routerProps[]
}

const routes: routerProps[] = [
  {
    title: "首页",
    icon: <IconHome size={"large"} />,
    path: "home",
    children: [
      {
        title: "面板",
        path: "/dashboard",
        component: <Dashboard />
      },
      {
        title: "慨览",
        path: "/overview",
        component: <Overview />
      }
    ]
  },
  {
    path: "form",
    title: "表单",
    icon: <IconHistogram size={"large"} />,
    component: <Settings />
  },
  {
    path: "list",
    title: "列表",
    icon: <IconList size={"large"} />,
    children: [
      { path: "/simple", title: "简单", component: <SimpleList /> },
      { path: "/advanced", title: "高级", component: <AdvancedList /> }
    ]
  },
  {
    path: "users",
    title: "用户",
    icon: <IconUser size={"large"} />,
    component: <Users />
  },
  {
    path: "settings",
    title: "设置",
    icon: <IconSetting size={"large"} />,
    component: <Settings />
  }
]

export default routes
