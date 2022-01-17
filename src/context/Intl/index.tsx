import React from "react"

type localeProps = "zh" | "en"

const Intl = React.createContext<{ locale: object, setLocale?: (locale: localeProps) => void }>({ locale: {} })

export default Intl
