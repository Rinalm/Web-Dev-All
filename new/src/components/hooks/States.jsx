// Task: Make Increament Button ->
// IMP: rect strict mode : gives 2times-Rendering

import { useState } from "react";

// IMP: this is "Parent Component(Function)": always give SAME Name of "File-Name" , to Make it Component
export const States = () => {
  // Normal Var , Not understand by react
  //   let value = 0; // this changing val : shows in DOM , but Not in UI
  //   //  : Dyanmic Val to show in UI => use "Hooks"
  //   const btnclick = () => {
  //     value++;
  //     console.log(value);
  //   };

  // Hook use : by Destructureing
  const [ok, setOk] = useState(1);
  console.log('parent compo rendered')
  const btnclick = () => {
    setOk(()=> ok+1)
  };
  //
  return (
    <>
      {/* dynamic value inside the h1 */}
      <h1>{ok}</h1>
      {/* fucntinn passed :inside the onClick event */}
      <button onClick={btnclick}>Increament</button>
      {/* data passing */}
      <ChildCompo ok={ok}/>
    </>
  );
};

// Defining the Component(funciton)
// why it is not working : fix this , MISTAKE : 
function ChildCompo({ok}){
    console.log('child compo rendered')
    return (
        <div className="main-div ">
           <h2> Child Compo -{ok} </h2>
        </div>
    )
}

// another SIBLING(of Parent-compo) commpo: I not affected, only render 1st time , 
// then next time not render : bcz both are DIFFERENT
export function SiblingCompo(){
    console.log('Sibling compo rendered')
    return (
        <div className="main-div ">
           <h2> Sibling Compo </h2>
        </div>
    )
}