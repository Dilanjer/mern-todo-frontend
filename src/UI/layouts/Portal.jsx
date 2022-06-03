import ReactDOM from 'react-dom';
import React from 'react';

const Portal = ({ children }) => {
  const [container] = React.useState(() => document.createElement('div'));

  React.useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
