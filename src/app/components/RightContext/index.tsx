import React from 'react';

function RightContext() {
  const [context, setContext] = React.useState(true);
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 });
  const showNav = event => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    setXyPosistion(positionChange);
    setContext(true);
  };
  const hideContext = event => {
    setContext(false);
  };

  const [chosen, setChosen] = React.useState();
  const initMenu = chosen => {
    setChosen(chosen);
  };
  return (
    <div>
      <h2 className="mb-3">React Right Click Context Menu Example</h2>
      <div className="z-10" onContextMenu={showNav} onClick={hideContext}>
        {chosen && <h1>"{chosen}" is chosen</h1>}
        {context && (
          <div
            style={{ top: xYPosistion.y, left: xYPosistion.x }}
            className="rightClick"
          >
            <div
              className="text-[#222222] cursor-pointer px-[17px] py-[36px] hover:text-white hover:bg-[#009688]"
              onClick={() => initMenu('Refactor')}
            >
              Refactor
            </div>
            <div
              className="text-[#222222] cursor-pointer px-[17px] py-[36px] hover:text-white hover:bg-[#009688]"
              onClick={() => initMenu('Cut')}
            >
              Cut
            </div>
            <div
              className="text-[#222222] cursor-pointer px-[17px] py-[36px] hover:text-white hover:bg-[#009688]"
              onClick={() => initMenu('Copy')}
            >
              Copy
            </div>
            <div
              className="text-[#222222] cursor-pointer px-[17px] py-[36px] hover:text-white hover:bg-[#009688]"
              onClick={() => initMenu('Paste')}
            >
              Paste
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default RightContext;
