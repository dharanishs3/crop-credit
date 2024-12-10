import React, { useState, useEffect } from 'react';
const MovetoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Scroll to top when button is clicked
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <div>
        {isVisible && (
          <button onClick={scrollToTop} style={styles.button}>
            ↑ 
          </button>
        )}
      </div>
    );
}
const styles = {
    button: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '3600px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  };
  
export default MovetoTop;