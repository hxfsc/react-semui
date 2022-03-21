import React from "react"
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting, IconUser, IconList } from "@douyinfe/semi-icons"

const Dashboard = React.lazy(() => import("@/pages/dashboard"))
const Settings = React.lazy(() => import("@/pages/settings"))
const Overview = React.lazy(() => import("@/pages/overview"))
const Users = React.lazy(() => import("@/pages/users"))
const List = React.lazy(() => import("@/pages/table"))
const SimpleList = React.lazy(() => import("@/pages/table/simple"))
const AdvancedList = React.lazy(() => import("@/pages/table/advanced"))

const FormBasic = React.lazy(() => import("@/pages/form/basic"))
const FormStep = React.lazy(() => import("@/pages/form/step"))
const FormAdvanced = React.lazy(() => import("@/pages/form/advanced"))

export interface routerProps {
  path?: string
  title: string
  icon?: JSX.Element
  redirect?: string
  component?: JSX.Element
  children?: routerProps[]
}

const routes: routerProps[] = [
  {
    title: "首页",
    icon: <IconHome size={"large"} />,
    path: "home",
    redirect: "home/dashboard",
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
    children: [
      { path: "/basic", title: "基础", component: <FormBasic /> },
      { path: "/step", title: "分步", component: <FormStep /> },
      { path: "/advanced", title: "高级", component: <FormAdvanced /> }
    ]
  },
  {
    path: "table",
    title: "表格",
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
