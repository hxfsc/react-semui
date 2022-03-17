import React, { CSSProperties } from "react"

import styles from "./index.scss"

type Props = {
  style?: React.CSSProperties
  type?: "dashed" | "solid"
}



const Divider = (props: Props = { type: "dashed" }) => {
  const style:CSSProperties = {
    ...props.style,
    borderStyle: props.type
  }
  return <div className={styles["divider"]} style={style}></div>
}

export default Divider
