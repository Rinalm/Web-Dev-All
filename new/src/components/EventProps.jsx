import "./Evh.css";

//  FILE IS NOT RUNNING properly , KIRO  se pooche
/// Main Fucnton Component
export const EventProps = () => {
  // define FUNCITONs
  const HandleClick = (user) => {
    alert(`aagya ${user}`);
  };
  const handleHover = () => {
    alert(`hover hogya hai re baba`);
  };

  return (
    <>
      {/*  Parent Component */}
      <Welcome
        // Custom Naming of EVENT, IMP: passing the Arrow fuciton inside the Parent Component
        bb={() => HandleClick("Bablu")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

// function Defind of Component{/* Child componet */}
const Welcome = (prop) => {
  // Destructuring
  const { bb, onMouseEnter } = prop;
  const bolo = () => {
    console.log(`hey, user`);
    //what is this using
    prop.onClick; // Function call , main fucntino componet
  };

  return (
    <>
      
      {/* fetching data from: Main fucnton Components */}
      {/* IMP: EVENT exact naming in child component only */}
      <button onClick={bb}>click it </button>
      <button onMouseEnter={onMouseEnter}>hover me </button>
      {/* child part */}
      <button onClick={bolo}>bolo bhai </button>
    </>
  );
};
