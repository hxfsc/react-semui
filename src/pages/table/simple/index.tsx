import React, { useEffect, useState, useMemo } from "react"
import { Table, Avatar, Form, Button, Space } from "@douyinfe/semi-ui"

import { request } from "@/utils/request"

const columns = [
  {
    title: "标题",
    dataIndex: "title",
    width: 400,
    render: (text, record, index) => {
      return <div>{text}</div>
    }
  },
  {
    title: "大小",
    dataIndex: "size"
  },
  {
    title: "所有者",
    dataIndex: "name",
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
  }
]

interface tableDataProps {
  name: string
  updateTime: string
  size: string
  title: string
}

export default () => {
  const [tableData, setTableData] = useState<tableDataProps[]>([])

  const getData = async () => {
    const response = await request<tableDataProps[]>({ url: "/base/table", method: "POST" })
    const { code, data } = response
    if (code === 200) {
      setTableData(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const pagination = useMemo(() => ({ pageSize: 10 }), [])

  return (
    <div>
      <div className="search-box">
        <Form labelPosition="inset" layout="horizontal">
          <Form.Input field="name" label="姓名" trigger="blur" style={{ width: 250 }} placeholder="请输入姓名" initValue="semi" />
          <Form.Select field="role" label="角色" style={{ width: "250px" }} initValue="rd">
            <Form.Select.Option value="operate">运营</Form.Select.Option>
            <Form.Select.Option value="rd">开发</Form.Select.Option>
            <Form.Select.Option value="pm">产品</Form.Select.Option>
            <Form.Select.Option value="ued">设计</Form.Select.Option>
          </Form.Select>
          <Form.DatePicker field="date" label="开始日期" style={{ width: "250px" }} initValue={new Date()}></Form.DatePicker>

          <Space>
            <Button type="primary" theme="solid">
              搜索
            </Button>
            <Button type="tertiary" theme="solid">
              重置
            </Button>
          </Space>
        </Form>
      </div>

      <div className="content">
        <Table columns={columns} dataSource={tableData} pagination={pagination} size={"small"} />
      </div>
    </div>
  )
}
