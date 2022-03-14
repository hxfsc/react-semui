import React from "react"
import { Navigate, Outlet, Route } from "react-router-dom"
import { pathToRegexp } from "path-to-regexp"

import routes, { routerProps } from "./router"

export const routesJSX = (data: routerProps[] = routes, parentPath = "/", parentIndex: number = 0) =>
  data.map((item: routerProps, index: number) => {
    if (item?.children) {
      return (
        <Route path={parentPath} key={`${parentIndex}-${index}`} element={<Outlet />}>
          {routesJSX(item?.children, item.path, index)}
          <Route path="*" key={`${parentIndex}-${index}-*`} element={<Navigate to={item.redirect} replace={true} />} />
        </Route>
      )
    }
    const prefixPath = parentPath === "/" ? "" : parentPath
    return <Route path={`${prefixPath}${item.path}`} key={`${prefixPath}_${index}`} element={item.component} />
  })

export const formatMenuPath = (data: routerProps[] = [], path = "/"): routerProps[] => {
  return data.map((item: routerProps) => {
    const currentPath = `${path}${item.path}`
    const result = {
      ...item,
      path: currentPath
    }

    if (item?.children) {
      result.children = formatMenuPath(item.children, currentPath) as routerProps[]
    }
    return result
  })
}

export const urlToList = (url = "") => {
  if (url) {
    const urlList = url.split("/").filter((i) => i)
    return urlList.map((item, index) => `/${urlList.slice(0, index + 1).join("/")}`)
  }
  return []
}

export const flatMenuKeys = (data: routerProps[]) => {
  const flatMenu = data.reduce((prev, next) => {
    prev.push(next.path)
    if (next.children) {
      return prev.concat(flatMenuKeys(next.children))
    }
    return prev
  }, [])

  return flatMenu
}

export const menuMatchKeys = (flatMenus: string[], paths: string[]) => {
  const menuKeys = paths.reduce((prev, next) => {
    const matchMenu = flatMenus.filter((item) => pathToRegexp(item).test(next))
    return [...prev, ...matchMenu]
  }, [])
  return menuKeys
}

const flatRouters = (routers) => {
  return routers.reduce((prev, next) => {
    if (next.children && Array.isArray(next.children)) {
      return [...prev, next, ...flatRouters(next.children)]
    }
    return [...prev, next]
  }, [])
}

export const menuMatchName = (routers, paths) => {
  const flatFormatRouters = flatRouters(routers)
  return paths.map((item) => {
    const current = flatFormatRouters.find((route) => route.path === item)
    return current?.title ?? ""
  })
}

export const changeOpenKeys = (routes: routerProps[] = [], path: string = "") => {
  const current = routes.find((item) => item.path.includes(path))
  console.log(current)
  if (current && current.children && current.children[0]) {
    return [path, current?.children[0].path]
  }
  return null
}

export const getMenuKeyBreadcrumb = (location, routes) => {
  const formatRouters = formatMenuPath(routes)
  const urlList = urlToList(location.pathname)
  const flatMenu = flatMenuKeys(formatRouters)

  const keys = menuMatchKeys(flatMenu, urlList)

  const breadcrumbs = menuMatchName(formatRouters, keys)

  return { keys, breadcrumbs }
}
