// Button is reused for BOTH the Generate and Copy actions
// This shows why we make components: write once, use many times
const Button = ({ onClick, disabled, className, children }) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
