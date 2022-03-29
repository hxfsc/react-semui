import React, { CSSProperties, useEffect, useState } from "react"
import { Card, Form, Row, Col, Table, Button, Typography } from "@douyinfe/semi-ui"

const { Text } = Typography

import styles from "./index.scss"
import { request } from "@/utils/request"

const formStyle: CSSProperties = {
  width: "100%"
}

interface personProps {
  name: string
  no: number
  orz: string
}

const FormAdvanced = () => {
  const [persons, setPersons] = useState<personProps[]>([])

  const getPersons = async () => {
    const res = await request<personProps[]>({ url: "user/member" })
    const { code, data } = res
    if (code !== 200) {
      return
    }

    setPersons(data)
  }

  useEffect(() => {
    getPersons()
  }, [])

  const columns = [
    {
      title: "成员姓名",
      dataIndex: "name",
      width: 100
    },

    {
      title: "工号",
      dataIndex: "no",
      width: 200
    },
    {
      title: "所属部门",
      dataIndex: "orz",
      width: 200
    },
    {
      title: "操作",
      dataIndex: "operate",
      width: 400,
      render: (text, record, index) => {
        return (
          <div>
            <Text type="primary" link>编辑</Text>
          </div>
        )
      }
    }
  ]

  return (
    <Form>
      <div className={styles["card"]}>
        <Card title="仓库管理">
          <Row gutter={40}>
            <Col span={8}>
              <Form.Input label="仓库名" field="name" />
            </Col>
            <Col span={8}>
              <Form.Input label="仓库域名" prefix="http://" suffix=".com" field="name" />
            </Col>
            <Col span={8}>
              <Form.Select label="仓库管理员" field="person" style={formStyle}>
                <Form.Select.Option value={1}>李小小</Form.Select.Option>
                <Form.Select.Option value={2}>王二小</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>

          <Row gutter={40}>
            <Col span={8}>
              <Form.Select label="审批人" field="approval" style={formStyle}>
                <Form.Select.Option value={1}>周毛毛</Form.Select.Option>
                <Form.Select.Option value={2}>孙小小</Form.Select.Option>
              </Form.Select>
            </Col>
            <Col span={8}>
              <Form.DatePicker label="生效日期" field="date" type="dateRange" style={formStyle} />
            </Col>
            <Col span={8}>
              <Form.Select label="仓库类型" field="person" style={formStyle}>
                <Form.Select.Option value={1}>私密</Form.Select.Option>
                <Form.Select.Option value={2}>公开</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>
        </Card>
        <Card title="任务管理">
          <Row gutter={40}>
            <Col span={8}>
              <Form.Input label="任务名" field="name" />
            </Col>
            <Col span={8}>
              <Form.Input label="任务描述" field="name" />
            </Col>
            <Col span={8}>
              <Form.Select label="执行人" field="person" style={formStyle}>
                <Form.Select.Option value={1}>李小小</Form.Select.Option>
                <Form.Select.Option value={2}>王二小</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>

          <Row gutter={40}>
            <Col span={8}>
              <Form.Select label="责任" field="approval" style={formStyle}>
                <Form.Select.Option value={1}>周毛毛</Form.Select.Option>
                <Form.Select.Option value={2}>孙小小</Form.Select.Option>
              </Form.Select>
            </Col>
            <Col span={8}>
              <Form.DatePicker label="生效日期" field="date" style={formStyle} />
            </Col>
            <Col span={8}>
              <Form.Select label="任务类型" field="person" style={formStyle}>
                <Form.Select.Option value={1}>李小小</Form.Select.Option>
                <Form.Select.Option value={2}>王二小</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>
        </Card>
        <Card title="成员管理">
          <Table dataSource={persons} columns={columns} bordered pagination={false} size="middle"></Table>
        </Card>
      </div>
    </Form>
  )
}

export default FormAdvanced
