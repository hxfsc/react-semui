import React, { CSSProperties } from "react"

import { Form, Row, Col, Button, Space } from "@douyinfe/semi-ui"
import { IconUpload } from "@douyinfe/semi-icons"

import { addressData, treeNodeData } from "./variables"

import styles from "./index.scss"

const formStyles: CSSProperties = {
  width: "100%"
}

const FormBasic = () => {
  const { Section, Input, DatePicker, Select, Cascader, TreeSelect, TagInput, Upload, TextArea, CheckboxGroup, Checkbox, RadioGroup, Radio, TimePicker, InputNumber, Slider, Switch, Rating } = Form
  return (
    <div className="content">
      <Form>
        <Section text="基本信息">
          <div className={styles["form-basic"]}>
            <Row gutter={30}>
              <Col span={12}>
                <Input field="name" label="名称" style={formStyles} />
              </Col>

              <Col span={12}>
                <DatePicker field="datetime" label="日期" style={formStyles} />
              </Col>
            </Row>

            <Row gutter={30}>
              <Col span={12}>
                <Select label="角色" field="role" style={formStyles}>
                  <Select.Option>11</Select.Option>
                </Select>
              </Col>

              <Col span={12}>
                <Select label="业务线" field="business" multiple style={formStyles}>
                  <Select.Option>业务线1</Select.Option>
                  <Select.Option>业务线2</Select.Option>
                </Select>
              </Col>
            </Row>

            <Row gutter={30}>
              <Col span={12}>
                <Cascader label="地区" field="address" treeData={addressData} style={formStyles}></Cascader>
              </Col>

              <Col span={12}>
                <TreeSelect label="节点" field="nodes" treeData={treeNodeData} style={formStyles} />
              </Col>
            </Row>

            <Row gutter={30}>
              <Col span={12}>
                <TagInput label="产品" field="product" />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Upload field="files" label="证明文件（Upload）" action="//semi.design/api/upload">
                  <Button icon={<IconUpload />} theme="light">
                    点击上传
                  </Button>
                </Upload>
              </Col>
            </Row>
          </div>
        </Section>

        <Section text="资源详情">
          <div className={styles["form-basic"]}>
            <Row gutter={30}>
              <Col span={12}>
                <TextArea field="descration" label="申请理由" placeholder="申请理由" style={{ ...formStyles, height: 120 }} />
              </Col>

              <Col span={12}>
                <CheckboxGroup field="type" label="申请类型" direction="horizontal">
                  <Checkbox value={"admin"}>Admin</Checkbox>
                  <Checkbox value={"user"}>User</Checkbox>
                  <Checkbox value={"guest"}>Guest</Checkbox>
                  <Checkbox value={"root"}>Root</Checkbox>
                </CheckboxGroup>

                <RadioGroup field="monopolize" label="是否独占资源">
                  <Radio value={1}>是</Radio>
                  <Radio value={0}>否</Radio>
                </RadioGroup>
              </Col>
            </Row>

            <Row gutter={30}>
              <Col span={12}>
                <TimePicker field="time" label="截止时刻" style={formStyles} />
              </Col>

              <Col span={12}>
                <InputNumber field="number" label="申请数量" style={formStyles} />
              </Col>
            </Row>

            <Row gutter={30}>
              <Col span={12}>
                <Slider field="slider" label="资源使用报警阈值(%)" style={formStyles}></Slider>
              </Col>

              <Col span={12}>
                <Switch field="switch" label="开关" />
              </Col>
            </Row>

            <Row gutter={30}>
              <Col span={12}>
                <Rating field="rating" label="满意度" initValue={3} />
              </Col>
            </Row>

            <Checkbox noLabel={true} field="agree">
              我已阅读并清楚相关规定
            </Checkbox>

            <Space spacing="medium">
              <Button type="primary">提交</Button>
              <Button>重置</Button>
            </Space>
          </div>
        </Section>
      </Form>
    </div>
  )
}

export default FormBasic
