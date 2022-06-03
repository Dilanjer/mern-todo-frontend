import React from 'react';
import usePosition from './usePosition';

function usePopoverPosition(ref, anchorEl) {
  const { top, bottom, left, width } = usePosition(anchorEl);

  const [originPos, setOriginPos] = React.useState();

  const verticalPosition = () => {
    const heightOffset = ref.current.offsetHeight;
    const shouldMoveTop = heightOffset > window.innerHeight - top;

    ref.current.style.top = `${
      shouldMoveTop ? top - heightOffset - 10 : bottom + 10
    }px`;

    return shouldMoveTop;
  };

  const horizontalPosition = () => {
    const widthOffset = ref.current.offsetWidth;
    const shouldMoveLeft = widthOffset > window.innerWidth - left;

    ref.current.style.left = `${
      shouldMoveLeft ? left - widthOffset + width : left
    }px`;

    return shouldMoveLeft;
  };

  const updatePopoverPosition = () => {
    const popoverMoveTop = verticalPosition();
    const popoverMoveLeft = horizontalPosition();

    if (!popoverMoveTop && popoverMoveLeft) {
      setOriginPos('origin-top-right');
    } else if (!popoverMoveTop && !popoverMoveLeft) {
      setOriginPos('origin-top-left');
    } else if (popoverMoveTop && !popoverMoveLeft) {
      setOriginPos('origin-bottom-left');
    } else if (popoverMoveTop && popoverMoveLeft) {
      setOriginPos('origin-bottom-right');
    } else {
      setOriginPos('origin-center');
    }
  };

  React.useLayoutEffect(() => {
    if (ref.current) updatePopoverPosition();
  }, []);

  return { originPos };
}

export default usePopoverPosition;
