import React, { useContext } from "react"

import Intl from "@/context/Intl"


import styles from "./index"

const Dashborad = () => {
  const { locale } = useContext(Intl)
  return <div className={styles['dashborad']}>{locale['appName']}</div>
}

export default Dashborad
