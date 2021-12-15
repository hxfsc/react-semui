
import React, { Suspense, useEffect } from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui'
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons'

import { Outlet, useNavigate } from "react-router-dom"

import routes from '@/routers/index'


export default () => {
  const { Header, Footer, Sider, Content } = Layout
  const navigate = useNavigate()

  const routerToPage = (data) => {
    navigate(data.itemKey)
  }

  return (
    <Layout className='layout'>
      <Sider className='bg-color-1'>
        <Nav
          style={{ maxWidth: 220, height: '100%' }}
          items={routes.map(item => ({ itemKey: item.path, text: item.title, path: item.path, icon: item?.icon, items: item?.children?.map(c => c.title) }))}
          onClick={(data) => routerToPage(data)}
          header={{
            logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
            text: '运营后台',
          }}
          footer={{
            collapseButton: true,
          }}
        />
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
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
            <span>Copyright © 2019. </span>
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
