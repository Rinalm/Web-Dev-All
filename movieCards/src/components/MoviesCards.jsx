import apidata from "../api/apidata.json"; // Importing all values from API folder(Dynamic values)
import { Cards } from "./Cards";

// Component(Start with Capital letter): is a function , that return JSX
export const MoviesCards = () => {
   console.log("API Data:", apidata); // for checking
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Movie Collection</h1>
      <ul style={{ padding: 0 }}>
        {/* LOOPING:by .map()  */}
        {apidata.map((currelem) => { // passed Props ??
          // passing Data inside the components , by using Props(here: curr, key)
          // IMP: MISTAKE: inside .map()  write return (   ) , ALWAYS
          return ( 
            <Cards curr={currelem} key={currelem.id} />
          )
        })}
      </ul>
    </div>
  );
}; 

export default MoviesCards;
