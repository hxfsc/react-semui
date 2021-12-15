import * as React from "react"
import * as ReactDOM from "react-dom"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AppContainer } from "react-hot-loader"

import 'reset-css'
import "./App.css"

import App from "./App"
import routes, { routerProps } from '@/routers/index'

const routesJSX = (data: routerProps[], parentPath = "/", parentIndex: number = 0) => data.map((item: routerProps, index: number) => {
  if (item?.children) {
    return (
      <Route path={parentPath} key={`${parentIndex}-${index}`}>
        {routesJSX(item?.children, item.path, index)}
      </Route>
    )
  }
  const prefixPath = parentPath === "/" ? "" : parentPath
  return <Route path={`${prefixPath}${item.path}`} key={`${parentIndex}-${index}`} element={item.component} />
})

const render = (App) => {
  ReactDOM.render((
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {routesJSX(routes, "/")}
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  ), document.getElementById("root"))
}

render(App)

if ((module as any).hot) {
  (module as any).hot.accept("./App", () => {
    const HotApp = require("./App").default
    render(HotApp)
  })
}
