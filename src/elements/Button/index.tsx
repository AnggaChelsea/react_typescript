import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props: any) {

  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary")
  if (props.isSuccess) className.push("btn-success")
  if (props.isDanger) className.push("btn-danger")
  if (props.isWarning) className.push("btn-warning")
  if (props.isInfo) className.push("btn-info")
  if (props.isLight) className.push("btn-light")
  if (props.isDark) className.push("btn-dark")
  if (props.isLink) className.push("btn-link")
  const oneClick = () => {
    if (props.oneClick) props.oneClick()
  }

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled")
    return (
      <span className={className.join('')} style={props.style}>{props.isLoading ? (<>
        <span className="spinner-border spinner-border-sm mx-5"></span>
        <span className="sr-only">Loading...</span>
      </>) : (props.children)}</span>
    )
  }
  //rebdering component
  if (props.type === "link") {
    return (
      <a href={props.href} className={className.join("")} target={props.target == "_blank" ? "_blank" : undefined} rel={props.target == "_blank" ? "noopener noreferrer" : undefined}>{props.children}</a>
    )
  } else {
    return (
      <Link to={'props.href'} className={className.join('')} style={props.style}>
        {props.children}
      </Link>
    )
  }
  return (
    <div>
    <button className={className.join('')} style={props.style}>{props.children}</button>
    </div>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onclick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isPrimary: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isOutline: propTypes.bool,
  isLight: propTypes.bool,
  isDark: propTypes.bool,
  isLink: propTypes.bool,
  isActive: propTypes.bool,
  isDanger: propTypes.bool,
  isSuccess: propTypes.bool,
  isWarning: propTypes.bool,

}