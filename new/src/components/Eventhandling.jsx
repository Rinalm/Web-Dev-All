import "./Evh.css";

export const Eventhandling = () => {
  // import it int App.jsx
  //
  const btnclick = (eve) => {
    //  Parameter pass
    // just umderstamd the SyntiicEvemt,? (kind of wrapper8/bu)
    console.log(eve);
    console.log(eve.target);
    console.log(eve.type);
    //
    alert("hey you touched me");
  };
  //
  const wlcm = (user) => {
    // Mistake*** : Define inside the dynamic param, inside the brace
    console.log(`hey ${user} to my homme `);
  };

  //
  return (
    <div>
      {/* M1: functn component with Named funciton */}
      <button onClick={btnclick}>click me BABY</button>
      <br />
      {/* M2: functn component with "fat arrow function": Req funtn Call, and Pass ( parameter )  */}
      <button onClick={(eve) => btnclick(eve)}>
        click me Fat arrow funciton
      </button>
      <br />
      {/* Inline Event Handlers: */} 
      {/* rreq no parameter pass */}
      <button onClick={(eve) => console.log(eve)}>Inline evh</button>
      <br/>
      <button onClick={() => alert("why you touched me")}>Inline evh</button>
      {/* Passing Args to event handlers : req to define the var, & make value Dynamic in the function call */}
      <button onClick={() => wlcm("babaji")}>click me</button>
      <button onClick={() => wlcm("kakaji")}>click me</button>
      <button onClick={() => wlcm("rajaji")}>click me</button>
    </div>
  );
};
