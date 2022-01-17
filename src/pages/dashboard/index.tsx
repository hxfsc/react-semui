import React, { useContext } from "react"

import Intl from "@/context/Intl"

const Dashborad = () => {
  const { locale } = useContext(Intl)
  return <div>{locale['appName']}</div>
}

export default Dashborad
