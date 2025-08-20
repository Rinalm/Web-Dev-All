// import React from "react";
import "./Evh.css";
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    // stopPropagation(); // stop travel
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    //
    event.stopPropagation(); // stop travel
    console.log("Child clicked");
  };
  // IMP: instead of addEventlistener(): used in Js ; use onClickCapture={handleChildClick}
  return (
    <section className="main-div">
      {/* onClick={} : search more info */}
      {/* <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Child Div
          </button>
        </div>
      </div> */}
      {/* onClickCapture={}: search more info */}
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};

// export default EventPropagation;
