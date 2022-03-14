import React from "react"
import { Tabs, TabPane } from "@douyinfe/semi-ui"
import { IconFile, IconGlobe, IconHelpCircle } from "@douyinfe/semi-icons"

import styles from "./index.scss"

const Settings = () => {
  return (
    <div>
      <div className="content">
        <Tabs tabPosition={"left"} type={"line"} className={styles['tab']}>
          <TabPane
            tab={
              <span>
                <IconFile />
                基本设置
              </span>
            }
            itemKey="1"
          >
            <div style={{ padding: "0 24px" }}>
              <h3>文档</h3>
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <IconGlobe />
                安全设置
              </span>
            }
            itemKey="2"
          >
            <div style={{ padding: "0 24px" }}>
              <h3>快速起步</h3>
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <IconHelpCircle />
                账号绑定
              </span>
            }
            itemKey="3"
          >
            <div style={{ padding: "0 24px" }}></div>
          </TabPane>

          <TabPane
            tab={
              <span>
                <IconHelpCircle />
                新消息通知
              </span>
            }
            itemKey="4"
          >
            <div style={{ padding: "0 24px" }}></div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Settings
