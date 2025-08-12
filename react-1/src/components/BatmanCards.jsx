// Component(Start with Capital letter): is a function , that return JSX
export const BatmanCards = () => {
  // Var Declaration
  const intro = "I am Batman";
  // const r = " 8.4 ";
  const s = `error code fix: fix the code of leetcode problem , and explain why
         the error occure . Also give in general step-wise approach to solve this
        question. the code `; // using Backtick(`) : to write multi line string, instede of double quotes(" it sometime give error )")

  let age = 5;

  // let canWatch = ' not available'
  // if(age>= 18) canWatch = 'Watch now'; /// What is this called ?

  // fucnito Creation
  const watchkr = () => {
    if (age >= 18) return "Watch now";
    // else
    return " get out ";
  };

  const give = () => {
    const doc = "the code is beautiful";
    return doc;
  };
  return (
    <div>
      {/* 
        // 1)html code inside js funtn (called as Jsx) . 
       // 2) {} by this braces : can enter in Js world, inside it return( html code , ....
       ... nested Js <-> html )
      */}

      <h1>hello:{intro} </h1>
      <div>
        {/* add img file in (public folder) */}
        <img src="b3.jpg" alt="not shown" width="42%" height="40%" />
      </div>
      <h2> Rating: {(3 + 5) / 2} </h2>
      <p> Summary: {s}</p>
      {/* function call inside JSX */}
      <p> Info : {give()}</p>

      {/* IMP: js inside html, by { } */}
      {/* M1: by using ternary operator */}
      {/* <button> {age >= 5 ? "Watch it bro" : " NOT allowed"} </button>
       */}

      {/* M2: function creation */}
      {/* <button> {canWatch} </button> */}

      {/*  M3: by function call** Best++ */}
      <button> {watchkr()} </button>
    </div>
  );
};

// Exporting globely in the project
// export default BatmanCards; // OR , just write "export" in starting of funciton '


export const Footer = () => {
    return (
      <>
        <p>this is footer in the place of foot location </p>
      </>
    )
}


const Header = () =>{
  return <h1> done it </h1>
}
export default Header