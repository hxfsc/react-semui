import * as React from "react"
import * as ReactDOM from "react-dom"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AppContainer } from "react-hot-loader"

import 'reset-css'
import "./App.css"

import App from "./App"
import routes from '@/routers/index'

const routesJSX = routes.map(item => (
  <Route path={item.path} key={item.path} element={item.component} />
))

const render = (App) => {
  ReactDOM.render((
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {routesJSX}
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
