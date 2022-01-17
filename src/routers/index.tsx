import React from "react"
import { Route } from "react-router-dom"

import routes, { routerProps } from './router'

const routesJSX = (data: routerProps[] = routes, parentPath = "/", parentIndex: number = 0) => data.map((item: routerProps, index: number) => {
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

export { routesJSX }
