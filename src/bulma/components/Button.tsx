import classNames from "classnames"

interface ButtonProps {
  children: React.ReactNode
  color?:
    | "white"
    | "light"
    | "dark"
    | "block"
    | "text"
    | "ghost"
    | "primary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger"
}

export const Button = ({ children, color }: ButtonProps) => {
  return (
    <button
      className={classNames("button", { [`is-${color}`]: color !== undefined })}
    >
      {children}
    </button>
  )
}
