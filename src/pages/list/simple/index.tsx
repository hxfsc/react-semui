import React, { useEffect, useState, useMemo } from "react"
import { Table, Avatar } from "@douyinfe/semi-ui"

import { request, ResponseProps } from "@/utils/request"

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

  return <Table columns={columns} dataSource={tableData} pagination={pagination} size={"small"} />
}
