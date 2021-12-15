
import React, { Suspense, useEffect, useState } from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui'
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons'

import { Outlet, useNavigate } from "react-router-dom"

import routes, { routerProps } from '@/routers/index'




export default () => {
  const { Header, Footer, Sider, Content } = Layout
  const navigate = useNavigate()

  const [selectedKeys, setSelectKeys] = useState([])


  const routerToPage = (path: string) => {
    navigate(path)
  }

  const createNav = (data: routerProps[]) => {
    const jsx = data.map((item) => {
      if (item?.children) {
        return (
          <Nav.Sub text={item.title} icon={item.icon} itemKey={item.title}>
            {createNav(item.children)}
          </Nav.Sub>
        )
      }
      return (<Nav.Item text={item.title} icon={item.icon} itemKey={item.title} onClick={() => routerToPage(item.path)}></Nav.Item>)
    }, [])
    return jsx
  }

  return (
    <Layout className='layout'>
      <Sider className='bg-color-1'>
        <Nav className='nav' onSelect={data => setSelectKeys(data.selectedKeys)} selectedKeys={selectedKeys}>
          <Nav.Header logo={<img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />} text={"运营后台"} />
          {createNav(routes)}
          <Nav.Footer collapseButton={true} />
        </Nav>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            mode="horizontal"
            footer={
              <>
                <Button theme="borderless" icon={<IconBell size="large" />} className='nav-button' />
                <Button theme="borderless" icon={<IconHelpCircle size="large" />} className='nav-button' />
                <Avatar color="orange" size="small">
                  YJ
                </Avatar>
              </>
            }>
          </Nav>
        </Header>
        <Content className='content-wrapper'>
          <Breadcrumb className='breadcrumb' routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']} />
          <div className='content'>
            <Suspense fallback={<div>Loading....</div>}>
              <Outlet />
            </Suspense>
          </div>
        </Content>
        <Footer className='footer'>
          <span className='copyright'>
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
  )
}
