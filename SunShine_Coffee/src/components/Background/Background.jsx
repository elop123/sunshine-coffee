import React from 'react'
import { useLocation } from 'react-router-dom';

const Background = ({ children }) => {
  const location = useLocation();

  const backgroundColor = location.pathname === '/products' ? '#EFEFEF' : '#000000';

  return (
    <div style={{ backgroundColor}}>
      {children}
    </div>
  );
};

export default Background
