import "./SectionTitle.css";

/**
 * Reusable SectionTitle component for consistent section headers
 * @param {React.ReactNode} children - Title content
 * @param {string} highlightText - Text to highlight in different color
 * @param {string} className - Additional CSS classes
 * @param {boolean} showDivider - Whether to show divider line
 */
function SectionTitle({ 
  children, 
  highlightText, 
  className = '',
  showDivider = true 
}) {
  // Split children by highlightText if provided
  const renderTitle = () => {
    if (highlightText && typeof children === 'string') {
      const parts = children.split(highlightText);
      return (
        <>
          {parts[0]}
          {parts.length > 1 && (
            <>
              <span className="section-title-highlight">{highlightText}</span>
              {parts[1]}
            </>
          )}
        </>
      );
    }
    return children;
  };

  return (
    <div className={`section-title-container ${className}`}>
      <h2 className="section-title">
        {renderTitle()}
      </h2>
      {showDivider && <div className="section-divider" />}
    </div>
  );
}

export default SectionTitle;
