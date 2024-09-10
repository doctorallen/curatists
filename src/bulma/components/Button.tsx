import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconName } from "@fortawesome/fontawesome-svg-core"

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
  size?: "small" | "normal" | "medium" | "large"
  dark?: boolean
  fullwidth?: boolean
  outlined?: boolean
  inverted?: boolean
  rounded?: boolean
  hovered?: boolean
  focused?: boolean
  active?: boolean
  loading?: boolean
  isStatic?: boolean
  disabled?: boolean
  iconStart?: IconName
  iconEnd?: IconName
}

export const Button = ({
  children,
  color,
  size,
  dark,
  fullwidth,
  outlined,
  inverted,
  rounded,
  hovered,
  focused,
  active,
  loading,
  isStatic,
  disabled,
  iconStart,
  iconEnd,
}: ButtonProps) => {
  return (
    <button
      className={classNames("button", {
        [`is-${color}`]: color !== undefined,
        [`is-${size}`]: size !== undefined,
        [`is-dark`]: dark !== undefined,
        [`is-fullwidth`]: fullwidth !== undefined,
        [`is-outlined`]: outlined !== undefined,
        [`is-inverted`]: inverted !== undefined,
        [`is-rounded`]: rounded !== undefined,
        [`is-hovered`]: hovered !== undefined,
        [`is-focused`]: focused !== undefined,
        [`is-active`]: active !== undefined,
        [`is-loading`]: loading !== undefined,
        [`is-static`]: isStatic !== undefined,
        [`is-disabled`]: disabled !== undefined,
      })}
    >
      {iconStart && (
        <span className="icon">
          <FontAwesomeIcon icon={iconStart} />
        </span>
      )}
      <span>{children}</span>
      {iconEnd && (
        <span className="icon">
          <FontAwesomeIcon icon={iconEnd} />
        </span>
      )}
    </button>
  )
}
