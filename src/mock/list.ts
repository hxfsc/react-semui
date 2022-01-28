import { Mock, initRes } from "./mock"

Mock.mock(`/advanced/table`, "get", () => {
  const citys = Array.from({ length: 100 }).map((item) => ({
    name: Mock.mock("@cname"),
    address: Mock.mock("@county(true)")
  }))
  return initRes(citys)
})

Mock.mock(`/base/table`, "post", () => {
  const users = Array.from({ length: 100 }).map((item) => ({
    size: Mock.mock("@integer(10,100)"),
    updateTime: Mock.mock('@date("yyyy-MM-dd")'),
    title: Mock.mock("@csentence"),
    name: Mock.mock("@cname"),
    address: Mock.mock("@county(true)")
  }))
  return initRes(users)
})
