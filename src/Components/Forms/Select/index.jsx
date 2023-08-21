import { forwardRef } from "react"


export const Select = forwardRef(({ label, children, ...rest }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <select ref={ref} {...rest}>{children}</select>
      </div>
    )
  })