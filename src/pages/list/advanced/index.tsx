import React, { useEffect } from "react"
import { Table, Avatar, Descriptions, Tag, Form, Space, Button, Row, Col } from "@douyinfe/semi-ui"
import { IconMore } from "@douyinfe/semi-icons"

import { request } from "@//utils/request"

const columns = [
  {
    title: "标题",
    width: 500,
    dataIndex: "name",
    render: (text, record, index) => {
      return (
        <span>
          <Avatar size="small" shape="square" src={record.nameIconSrc} style={{ marginRight: 12 }}></Avatar>
          {text}
        </span>
      )
    }
  },
  {
    title: "大小",
    dataIndex: "size"
  },
  {
    title: "所有者",
    dataIndex: "owner",
    render: (text, record, index) => {
      return (
        <div>
          <Avatar size="small" color={record.avatarBg} style={{ marginRight: 4 }}>
            {typeof text === "string" && text.slice(0, 1)}
          </Avatar>
          {text}
        </div>
      )
    }
  },
  {
    title: "更新日期",
    dataIndex: "updateTime"
  },
  {
    title: "",
    dataIndex: "operate",
    render: () => {
      return <IconMore />
    }
  }
]

const data = [
  {
    key: "1",
    name: "Semi Design 设计稿.fig",
    nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
    size: "2M",
    owner: "姜鹏志",
    updateTime: "2020-02-02 05:13",
    avatarBg: "grey"
  },
  {
    key: "2",
    name: "Semi Design 分享演示文稿",
    nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
    size: "2M",
    owner: "郝宣",
    updateTime: "2020-01-17 05:31",
    avatarBg: "red"
  },
  {
    key: "3",
    name: "设计文档",
    nameIconSrc: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
    size: "34KB",
    owner: "Zoey Edwards",
    updateTime: "2020-01-26 11:01",
    avatarBg: "light-blue"
  }
]

const expandData = {
  "0": [
    { key: "实际用户数量", value: "1,480,000" },
    { key: "7天留存", value: "98%" },
    { key: "安全等级", value: "3级" },
    { key: "垂类标签", value: <Tag style={{ margin: 0 }}>设计</Tag> },
    { key: "认证状态", value: "未认证" }
  ],
  "1": [
    { key: "实际用户数量", value: "2,480,000" },
    { key: "7天留存", value: "90%" },
    { key: "安全等级", value: "1级" },
    { key: "垂类标签", value: <Tag style={{ margin: 0 }}>模板</Tag> },
    { key: "认证状态", value: "已认证" }
  ],
  "2": [
    { key: "实际用户数量", value: "2,920,000" },
    { key: "7天留存", value: "98%" },
    { key: "安全等级", value: "2级" },
    { key: "垂类标签", value: <Tag style={{ margin: 0 }}>文档</Tag> },
    { key: "认证状态", value: "已认证" }
  ]
}

export default () => {
  useEffect(() => {
    request({ url: "/advanced/table" }).then((res) => console.log(res))
  }, [])

  const expandRowRender = (record, index) => {
    return <Descriptions align="justify" data={expandData[index]} />
  }

  const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === "设计文档", // Column configuration not to be checked
      name: record.name
    }),
    onSelect: (record, selected) => {
      console.log(`select row: ${selected}`, record)
    },
    onSelectAll: (selected, selectedRows) => {
      console.log(`select all rows: ${selected}`, selectedRows)
    },
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
    }
  }

  return (
    <div>
      <div className="search-box">
        <Form labelPosition="inset" layout="horizontal" style={{ width: "100%" }}>
          <Row gutter={15} style={{ width: "100%" }}>
            <Col span={4}>
              <Form.Input field="name" label="姓名" trigger="blur" placeholder="请输入姓名" fieldStyle={{ paddingRight: 0, marginRight: 0 }} />
            </Col>
            <Col span={4}>
              <Form.Input field="title" label="名称" trigger="blur" placeholder="请输入姓名" fieldStyle={{ paddingRight: 0, marginRight: 0 }} />
            </Col>

            <Col span={4}>
              <Form.Input field="size" label="大小" trigger="blur" placeholder="请输入姓名" fieldStyle={{ paddingRight: 0, marginRight: 0 }} />
            </Col>
            <Col span={4}>
              <Form.Input field="owner" label="所有者" trigger="blur" placeholder="请输入姓名" fieldStyle={{ paddingRight: 0, marginRight: 0 }} />
            </Col>

            <Col span={4}>
              <Form.Select field="role" label="角色" style={{ width: "100%" }} fieldStyle={{ paddingRight: 0, marginRight: 0 }}>
                <Form.Select.Option value="operate">运营</Form.Select.Option>
                <Form.Select.Option value="rd">开发</Form.Select.Option>
                <Form.Select.Option value="pm">产品</Form.Select.Option>
                <Form.Select.Option value="ued">设计</Form.Select.Option>
              </Form.Select>
            </Col>

            <Col span={4}>
              <Form.DatePicker field="date" label="更新日期" fieldStyle={{ paddingRight: 0, marginRight: 0 }} style={{ paddingRight: 0, marginRight:'-15px' }}></Form.DatePicker>
            </Col>
          </Row>
        </Form>

        <Space style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" theme="solid">
            搜索
          </Button>
          <Button type="tertiary" theme="solid">
            重置
          </Button>
        </Space>
      </div>
      <div className="content">
        <Table
          rowKey="name"
          columns={columns}
          dataSource={data}
          expandedRowRender={expandRowRender}
          rowExpandable={(record) => record.name !== "设计文档"}
          hideExpandedColumn={false}
          rowSelection={rowSelection}
          size={"small"}
          pagination={false}
        />
      </div>
    </div>
  )
}
