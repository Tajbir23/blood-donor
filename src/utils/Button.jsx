

const Button = ({children, className}) => {
  return (
    <div className={`w-full text-center px-3 py-1 ${className}`}>{children}</div>
  )
}

export default Button