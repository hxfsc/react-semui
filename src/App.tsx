import React, { Suspense, useState, useContext } from "react"
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Space, RadioGroup, Radio } from "@douyinfe/semi-ui"
import { IconSemiLogo, IconBell, IconLanguage, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from "@douyinfe/semi-icons"

import { Outlet, useNavigate, useLocation } from "react-router-dom"

import routes, { routerProps } from "@/routers/router"
import { formatMenuPath, urlToList, flatMenuKeys, menuMatchKeys } from "@/routers/index"

import Intl from "@/context/Intl"

import locales from "./locales"

export default () => {
  const { Header, Footer, Sider, Content } = Layout

  const location = useLocation()
  const formatRouters = formatMenuPath(routes)
  const urlList = urlToList(location.pathname)
  const flatMenu = flatMenuKeys(formatRouters)
  const keys = menuMatchKeys(flatMenu, urlList)

  const [selectedKeys, setSelectKeys] = useState(keys)

  const navigate = useNavigate()
  const routerToPage = (path: string) => {
    navigate(path)
  }

  const [locale, setLocale] = useState(locales["zh"])

  const changeIntl = (value: number) => {
    const intlMap = {
      1: "zh",
      2: "en"
    }
    setLocale(locales[intlMap[value]])
  }

  const createNav = (data: routerProps[]) => {
    const jsx = data.map((item) => {
      if (item?.children) {
        return (
          <Nav.Sub text={item.title} icon={item.icon} itemKey={item.path} key={item.path}>
            {createNav(item.children)}
          </Nav.Sub>
        )
      }
      return <Nav.Item text={item.title} icon={item.icon} itemKey={item.path} key={item.path} onClick={() => routerToPage(item.path)}></Nav.Item>
    }, [])
    return jsx
  }

  return (
    <Intl.Provider value={{ locale, setLocale: (value) => setLocale(locales[value]) }}>
      <Layout className="layout">
        <Sider className="bg-color-1">
          <Nav className="nav" onSelect={(data) => setSelectKeys(data.selectedKeys)} selectedKeys={selectedKeys}>
            <Nav.Header logo={<img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />} text={locale["appName"]} />
            {createNav(formatRouters)}
            <Nav.Footer collapseButton={true} />
          </Nav>
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
            <Nav
              mode="horizontal"
              footer={
                <>
                  <Space vertical spacing="loose" align="start">
                    <RadioGroup type="button" buttonSize="middle" defaultValue={1} aria-label="单选组合示例" onChange={(value) => changeIntl(value.target.value)}>
                      <Radio value={1}>中文</Radio>
                      <Radio value={2}>EN</Radio>
                    </RadioGroup>
                  </Space>
                  <Button theme="borderless" icon={<IconBell size="large" />} className="nav-button" />
                  <Avatar color="orange" size="small">
                    YJ
                  </Avatar>
                </>
              }
            ></Nav>
          </Header>
          <Content className="content-wrapper">
            <Breadcrumb className="breadcrumb" routes={["首页", "当这个页面标题很长时需要省略", "上一页", "详情页"]} />
            <div className="content">
              <Suspense fallback={<div>Loading....</div>}>
                <Outlet />
              </Suspense>
            </div>
          </Content>
          <Footer className="footer">
            <span className="copyright">
              <IconBytedanceLogo size="large" />
              <span>Copyright © 2021. semi.design </span>
            </span>
            <span>
              <span>平台客服</span>
              <span>反馈建议</span>
            </span>
          </Footer>
        </Layout>
      </Layout>
    </Intl.Provider>
  )
}
