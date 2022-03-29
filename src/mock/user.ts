import { Mock, initRes } from "./mock"

const profession = () => {
  return Array.from({ length: Mock.Random.natural(2, 5) }).map(() => ({
    color: ["blue", "green", "red"][Mock.Random.natural(0, 2)],
    title: Mock.Random.ctitle()
  }))
}

Mock.mock(`doc/list`, "get", () => {
  const citys = Array.from({ length: 20 }).map((item) => ({
    id: Mock.mock("@id"),
    name: Mock.Random.cname(),
    publish: Mock.Random.datetime(),
    paragraph: Mock.Random.cparagraph(),
    url: Mock.Random.url("https"),
    title: Mock.Random.ctitle(),
    profession: profession()
  }))
  return initRes(citys)
})


Mock.mock(`user/member`, "get", () => {
  const citys = Array.from({ length: 5 }).map((item) => ({
    id: Mock.mock("@id"),
    name: Mock.Random.cname(),
    no: Mock.Random.id(),
    orz: Mock.Random.ctitle(5)
  }))
  return initRes(citys)
})



