import React from 'react';

function useWindowResize(callBack) {
  React.useEffect(() => {
    window.addEventListener('resize', callBack);
    return () => {
      window.removeEventListener('resize', callBack);
    };
  }, [callBack]);
}

export default useWindowResize;
