import "./Button.css";

/**
 * Reusable Button component with multiple variants
 * @param {string} variant - Button style: 'primary', 'secondary', 'outline'
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {string} href - Optional link destination
 */
function Button({ 
  variant = 'primary', 
  onClick, 
  children, 
  className = '',
  href,
  ...props 
}) {
  const buttonClass = `common-btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
