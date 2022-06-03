import React from 'react';

function useOutsideClick(ref, anchorEl, callBack) {
  const onClick = React.useCallback(
    (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !anchorEl.contains(event.target)
      ) {
        callBack();
      }
    },
    [callBack, ref, anchorEl]
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [onClick]);
}

export default useOutsideClick;
