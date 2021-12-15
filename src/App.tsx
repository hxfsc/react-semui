
import React, { Suspense, useEffect } from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui'
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import routes from '@/routers/index'


export default () => {
  const { Header, Footer, Sider, Content } = Layout

  const routesJSX = routes.map(item => (
    <Route path={item.path} key={item.path} element={item.component} />
  ))


  const routerToPage = (data) => {
  }

  return (
    <Layout className='layout'>
      <Header className='bg-color-1'>
        <div>
          <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
            <Nav.Header>
              <IconSemiLogo className='semi-logo' />
            </Nav.Header>

            <Nav.Footer>
              <Button
                theme="borderless"
                icon={<IconBell size="large" />}
                className='nav-button'
              />
              <Button
                theme="borderless"
                icon={<IconHelpCircle size="large" />}
                className='nav-button'
              />
              <Avatar color="orange" size="small">
                YJ
              </Avatar>
            </Nav.Footer>
          </Nav>
        </div>
      </Header>
      <Layout>
        <Sider className='bg-color-1'>
          <Nav
            className='nav'
            defaultSelectedKeys={['Home']}
            items={routes.map(item => ({ itemKey: item.path, text: item.title, path: item.path, icon: <IconHome size="large" /> }))}
            footer={{
              collapseButton: true,
            }}
            onClick={(data) => routerToPage(data)}
          />
        </Sider>
        <Content className='content-wrapper'>
          <Breadcrumb className='breadcrumb' routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']} />
          <div className='content'>
            <BrowserRouter>
              <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                  {routesJSX}
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
