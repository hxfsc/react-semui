import Mock from "mockjs"

export const Random = Mock.Random

export const initRes = (data: unknown) => ({
  code: 200,
  success: true,
  msg: "",
  data
})

export { Mock }
