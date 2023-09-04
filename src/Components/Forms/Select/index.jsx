import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Select = forwardRef(({ label, children, ...rest }, ref) => {
    return (
      <div className={styles.div}>
        <label className="label">{label}</label>
        <select className="select" ref={ref} {...rest}>{children}</select>
      </div>
    )
  })