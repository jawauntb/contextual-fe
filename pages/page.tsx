// page.js
import React from 'react';
import theme from '../theme';

interface PageBodyProps {
  children?: React.ReactNode;
}

const PageBody: React.FC<PageBodyProps> = ({ children }) => {
  return (
    <div className="h-rectangle-15 left-rectangle-15 top-rectangle-15  ">
      {children}
    </div>
  );
};

export default PageBody;

