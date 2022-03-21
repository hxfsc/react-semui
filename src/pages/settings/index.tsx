import React from "react"
import { Tabs, TabPane, Form, Button, Avatar, Typography, Switch } from "@douyinfe/semi-ui"
import { IconFile, IconGlobe, IconHelpCircle } from "@douyinfe/semi-icons"

import styles from "./index.scss"
import avatar from "@/assets/images/avatar.jpg"
import alipay from "@/assets/images/alipay.png"
import taobao from "@/assets/images/taobao.png"
import dingding from "@/assets/images/dingding.png"

const UserProfile = () => {
  const { Title, Text } = Typography
  return (
    <div className={styles["user-profile"]}>
      <div className={styles["user-form"]}>
        <Title heading={5}>基本设置</Title>
        <Form>
          <Form.Input label="邮箱" />
          <Form.Input label="呢称" />
          <Form.TextArea label="个人简介" />
          <Form.Select label="国家" style={{ width: 180 }}>
            <Form.Select.Option>中国</Form.Select.Option>
          </Form.Select>

          <div className={styles["counties-wrapper"]}>
            <Text strong>所在省市</Text>
            <div className={styles["counties"]}>
              <Form.Select style={{ width: 180 }}>
                <Form.Select.Option>中国</Form.Select.Option>
              </Form.Select>
              <Form.Select style={{ width: 180 }}>
                <Form.Select.Option>中国</Form.Select.Option>
              </Form.Select>
            </div>
          </div>

          <Form.Input label="街道地址" />

          <div className={styles["counties-wrapper"]}>
            <Text strong>联系电话</Text>
            <div className={styles["counties"]}>
              <Form.Input style={{ width: 100 }} />
              <Form.Input style={{ width: 200 }} />
            </div>
          </div>

          <Button type="primary" theme="solid">
            更新
          </Button>
        </Form>
      </div>
      <div className={styles["user-thumb"]}>
        <Avatar size="extra-large" src={avatar} />
      </div>
    </div>
  )
}

const SecuritySetting = () => {
  const { Title, Text } = Typography
  return (
    <div>
      <Title heading={5}>安全设置</Title>
      <div>
        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>账户密码</Text>
            <Text type="quaternary">当前密码强度：强</Text>
          </div>
          <Text link>修改</Text>
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>密保手机</Text>
            <Text type="quaternary">已绑定手机：138****8293</Text>
          </div>
          <Text link>修改</Text>
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>密保问题</Text>
            <Text type="quaternary">未设置密保问题，密保问题可有效保护账户安全</Text>
          </div>
          <Text link>修改</Text>
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>备用邮箱</Text>
            <Text type="quaternary">已绑定邮箱：ant***sign.com</Text>
          </div>
          <Text link>修改</Text>
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>MFA 设备</Text>
            <Text type="quaternary">未绑定 MFA 设备，绑定后，可以进行二次确认</Text>
          </div>
          <Text link>修改</Text>
        </div>
      </div>
    </div>
  )
}

const AccountBind = () => {
  const { Title, Text } = Typography
  return (
    <div>
      <Title heading={5}>账号绑定</Title>
      <div className={styles["account"]}>
        <div className={styles["account-list"]}>
          <div className={styles["account-title"]}>
            <div>
              <Avatar shape="square" src={taobao} />
            </div>
            <div>
              <p>
                <Text>绑定淘宝</Text>
              </p>
              <p>
                <Text type="quaternary">当前未绑定淘宝账号</Text>
              </p>
            </div>
          </div>
          <div>
            <Text link>绑定</Text>
          </div>
        </div>

        <div className={styles["account-list"]}>
          <div className={styles["account-title"]}>
            <div>
              <Avatar shape="square" src={alipay} />
            </div>
            <div>
              <p>
                <Text>绑定支付宝</Text>
              </p>
              <p>
                <Text type="quaternary">当前未绑定支付宝账号</Text>
              </p>
            </div>
          </div>
          <div>
            <Text link>绑定</Text>
          </div>
        </div>

        <div className={styles["account-list"]}>
          <div className={styles["account-title"]}>
            <div>
              <Avatar shape="square" src={dingding} />
            </div>
            <div>
              <p>
                <Text>绑定钉钉</Text>
              </p>
              <p>
                <Text type="quaternary">当前未绑定钉钉账号</Text>
              </p>
            </div>
          </div>
          <div>
            <Text link>绑定</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

const News = () => {
  const { Title, Text } = Typography
  return (
    <div>
      <Title heading={5}>新消息通知</Title>
      <div>
        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>账户密码</Text>
            <Text type="quaternary">其他用户的消息将以站内信的形式通知</Text>
          </div>
          <Switch checkedText="开" uncheckedText="关" checked />
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>系统消息</Text>
            <Text type="quaternary">系统消息将以站内信的形式通知</Text>
          </div>
          <Switch checkedText="开" uncheckedText="关" />
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>待办任务</Text>
            <Text type="quaternary">待办任务将以站内信的形式通知</Text>
          </div>
          <Switch checkedText="开" uncheckedText="关" />
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>备用邮箱</Text>
            <Text type="quaternary">已绑定邮箱：ant***sign.com</Text>
          </div>
          <Switch checkedText="开" uncheckedText="关" />
        </div>

        <div className={styles["security-list"]}>
          <div className={styles["security-title"]}>
            <Text>MFA 设备</Text>
            <Text type="quaternary">未绑定 MFA 设备，绑定后，可以进行二次确认</Text>
          </div>
          <Switch checkedText="开" uncheckedText="关" />
        </div>
      </div>
    </div>
  )
}

const Settings = () => {
  return (
    <div>
      <div className="content">
        <Tabs tabPosition={"left"} type={"line"} className={styles["tab"]}>
          <TabPane
            tab={
              <span className={styles["tab-title"]}>
                基本设置
                <IconFile />
              </span>
            }
            itemKey="1"
          >
            <div style={{ padding: "0 24px" }}>
              <UserProfile />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className={styles["tab-title"]}>
                <em>安全设置</em>
                <IconGlobe />
              </span>
            }
            itemKey="2"
          >
            <div style={{ padding: "0 24px" }}>
              <SecuritySetting />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className={styles["tab-title"]}>
                账号绑定
                <IconHelpCircle />
              </span>
            }
            itemKey="3"
          >
            <div style={{ padding: "0 24px" }}>
              <AccountBind />
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className={styles["tab-title"]}>
                新消息通知
                <IconHelpCircle />
              </span>
            }
            itemKey="4"
          >
            <div style={{ padding: "0 24px" }}>
              <News />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Settings
