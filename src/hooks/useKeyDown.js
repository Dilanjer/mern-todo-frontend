import React from 'react';

function useKeyDown(key, callBack) {
  const onKeyDown = React.useCallback(
    (event) => {
      if (event.key === key) {
        callBack();
      }
    },
    [callBack, key]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
}

export default useKeyDown;
