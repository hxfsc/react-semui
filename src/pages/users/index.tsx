import React, { useEffect, useState } from "react"
import { Avatar, Tag, Tabs, TabPane, Card, Typography, Space, Button } from "@douyinfe/semi-ui"
import { TagColor } from "@douyinfe/semi-ui/lib/es/tag"
import { IconWholeWord, IconMember, IconHome } from "@douyinfe/semi-icons"

import Divider from "@/components/Divider"
import { request, ResponseProps } from "@/utils/request"

import avatar from "@/assets/images/avatar.jpg"
import styles from "./index.scss"

const DocList = (props: docProps) => {
  return (
    <div className={styles["doc-list"]}>
      <h4>{props.title}</h4>
      <div>
        {props.profession?.map((item) => (
          <Tag key={item.title} color={item.color}>
            {item.title}
          </Tag>
        ))}
      </div>
      <div>{props.paragraph}</div>
      <div className={styles["publish"]}>
        <Avatar size="extra-small" color="green">
          {props.name.at(1)}
        </Avatar>
        <div>{props.name}</div>
        发布在
        <a href={props.url}>{props.url}</a>
        <em>{props.publish}</em>
      </div>
      <Divider type="solid" />
    </div>
  )
}

type docProps = {
  id: string
  name: string
  publish: string
  paragraph: string
  url: string
  title: string
  profession: { color: TagColor; title: string }[]
}

const ApplicationCard = () => {
  const { Meta } = Card
  const { Text } = Typography
  return (
    <Card
      style={{ maxWidth: 340 }}
      title={
        <Meta
          title="Semi Doc"
          description="全面、易用、优质"
          avatar={<Avatar alt="Card meta img" size="default" src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg" />}
        />
      }
      headerExtraContent={<Text link>More</Text>}
      cover={<img alt="example" src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg" />}
      footerLine={true}
      footerStyle={{ display: "flex", justifyContent: "flex-end" }}
      footer={
        <Space>
          <Button theme="borderless" type="primary">
            精选案例
          </Button>
          <Button theme="solid" type="primary">
            开始使用
          </Button>
        </Space>
      }
    >
      Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。
    </Card>
  )
}

const Help = () => {
  const { Text } = Typography
  return (
    <Card title="Semi Design" style={{ maxWidth: 360 }} headerExtraContent={<Text link>更多</Text>}>
      Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
      Web 应用。
    </Card>
  )
}

export default () => {
  const [docList, setDocList] = useState<docProps[]>([])

  useEffect(() => {
    request({ url: "doc/list" }).then((res: ResponseProps<docProps[]>) => {
      const { code = 0, data = [] } = res
      if (code !== 200) {
        return
      }
      console.log(data)
      setDocList(data)
    })
  }, [])

  return (
    <div>
      <div className={styles["settings"]}>
        <div>
          <div className={styles["prefile"]}>
            <div className={styles["avatar"]}>
              <Avatar size={"large"} alt="a cat" src={avatar} />
              <h3>Serati Ma</h3>
              <div className={styles["intro"]}>海纳百川，有容乃大</div>

              <div className={styles["list-item"]}>
                <div>
                  <IconWholeWord />
                  交互专家
                </div>
                <div>
                  <IconMember />
                  蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
                </div>
                <div>
                  <IconHome />
                  浙江省杭州市
                </div>
              </div>

              <Divider style={{ width: "90%" }} />

              <div className={styles["list-item"]}>
                <h4>描述</h4>
                <div className={styles["list-content"]}>
                  <Tag color={"blue"}>很有想法的</Tag>
                  <Tag color={"indigo"}>专注设计</Tag>
                  <Tag color={"red"}>辣~</Tag>
                  <Tag color={"purple"}>大长腿</Tag>
                  <Tag color={"orange"}>川妹子</Tag>
                  <Tag color={"green"}>海纳百川</Tag>
                </div>
              </div>

              <Divider style={{ width: "90%" }} />

              <div className={styles["list-item"]}>
                <h4>团队</h4>
                <div className={styles["list-content"]}>
                  <div className={styles["group"]}>
                    <div className={styles["group-list"]}>
                      <Avatar size={"small"} color="cyan">
                        科
                      </Avatar>
                      科学搬家组
                    </div>

                    <div className={styles["group-list"]}>
                      <Avatar size={"small"} color="red">
                        A
                      </Avatar>
                      Anguar
                    </div>

                    <div className={styles["group-list"]}>
                      <Avatar size={"small"} color="purple">
                        二
                      </Avatar>
                      中二少女团
                    </div>

                    <div className={styles["group-list"]}>
                      <Avatar size={"small"} color="cyan">
                        程
                      </Avatar>
                      程序员日常
                    </div>

                    <div className={styles["group-list"]}>
                      <Avatar size={"small"}>骗</Avatar>
                      骗你来学计算机
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["news"]}>
          <Tabs type="line" size="large">
            <TabPane tab={<span className={styles["tab-gap"]}>消息</span>} itemKey="1">
              <div className={styles["tab-content"]}>
                {docList.map((doc) => (
                  <DocList {...doc} key={doc.id} />
                ))}
              </div>
            </TabPane>
            <TabPane tab={<span className={styles["tab-gap"]}>应用</span>} itemKey="2">
              <div className={styles["tab-content"]}>
                <div className={styles["application"]}>
                  {Array.from({ length: 10 }).map(() => (
                    <ApplicationCard />
                  ))}
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span className={styles["tab-gap"]}>帮助</span>} itemKey="3">
              <div className={styles["tab-content"]}>
                <div className={styles["help"]}>
                  {Array.from({ length: 10 }).map(() => (
                    <Help />
                  ))}
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
