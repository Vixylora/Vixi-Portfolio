import "./Text.css";

/**
 * Reusable Text component for consistent typography
 * @param {string} variant - Text style: 'body', 'large', 'small', 'caption'
 * @param {React.ReactNode} children - Text content
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML element to render as
 */
function Text({ 
  variant = 'body', 
  children, 
  className = '',
  as = 'p',
  ...props 
}) {
  const Component = as;
  const textClass = `common-text text-${variant} ${className}`;
  
  return (
    <Component className={textClass} {...props}>
      {children}
    </Component>
  );
}

export default Text;
