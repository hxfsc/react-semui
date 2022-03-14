import React, { Suspense, useState, useContext, useEffect } from "react"
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Space, RadioGroup, Radio, ConfigProvider, Dropdown } from "@douyinfe/semi-ui"
import { IconSemiLogo, IconBell, IconLanguage, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from "@douyinfe/semi-icons"

import { Outlet, useNavigate, useLocation } from "react-router-dom"

import routes, { routerProps } from "@/routers/router"
import { formatMenuPath, getMenuKeyBreadcrumb } from "@/routers/index"

import Intl from "@/context/Intl"

import locales from "./locales"

export default () => {
  const { Header, Footer, Sider, Content } = Layout

  const location = useLocation()

  const formatRouters = formatMenuPath(routes)

  const { keys, breadcrumbs } = getMenuKeyBreadcrumb(location, routes)

  const [selectedKeys, setSelectKeys] = useState(keys)

  const [openKeys, setOpenKeys] = useState(keys)

  useEffect(() => {
    const { keys } = getMenuKeyBreadcrumb(location, routes)
    setSelectKeys(keys)
    setOpenKeys(keys)
  }, [location.pathname])

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

  const handleClickNav = (params) => {
    const { openKeys } = params
    setOpenKeys(openKeys)
  }

  const collapseChange = (isCollapse) => {
    if (isCollapse) {
      return
    }
    const { keys } = getMenuKeyBreadcrumb(location, routes)
    setOpenKeys(keys)
  }

  return (
    <Intl.Provider value={{ locale, setLocale: (value) => setLocale(locales[value]) }}>
      <ConfigProvider>
        <Layout className="layout">
          <Sider className="bg-color-1">
            <Nav className="nav" selectedKeys={selectedKeys} openKeys={openKeys} onClick={(parmas) => handleClickNav(parmas)} onCollapseChange={(isCollapse) => collapseChange(isCollapse)}>
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
                      <RadioGroup type="button" buttonSize="middle" defaultValue={1} onChange={(value) => changeIntl(value.target.value)}>
                        <Radio value={1}>中文</Radio>
                        <Radio value={2}>EN</Radio>
                      </RadioGroup>
                    </Space>
                    <Button theme="borderless" icon={<IconBell size="large" />} className="nav-button" />

                    <Dropdown
                      trigger={"click"}
                      position={"bottomLeft"}
                      render={
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => navigate("/users")}>个人中心</Dropdown.Item>
                          <Dropdown.Item onClick={() => navigate("/settings")}>设置密码</Dropdown.Item>
                          <Dropdown.Item>退出</Dropdown.Item>
                        </Dropdown.Menu>
                      }
                    >
                      <Avatar color="orange" size="small">
                        hxfsc
                      </Avatar>
                    </Dropdown>
                  </>
                }
              ></Nav>
            </Header>
            <Content className="content-wrapper">
              <Breadcrumb className="breadcrumb" routes={breadcrumbs} />
              <Suspense fallback={<div>Loading....</div>}>
                <Outlet />
              </Suspense>
            </Content>
            <Footer className="footer">
              <span className="copyright">
                <IconBytedanceLogo size="large" />
                <span>Copyright © 2021. semi.design </span>
              </span>
            </Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </Intl.Provider>
  )
}
