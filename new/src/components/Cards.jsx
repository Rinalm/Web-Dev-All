//With Destructure: ***
export const Cards = ({curr}) => {
  // M1: "Prop": gave a Random Name("baba" as prop) in this page 
  // M2: inside the (), can Destruct the (props that passed inside the component pf parent file)  
  // console.log("Movie data:", curr); // Debug log

  // Destructure(Js concept): the  prop(curr) that contains the movie data
  const {img_url, name, rating,description,cast,genre,watch_url } = curr; // now NO req to write baba.
  //
  return (
    <li  style={{ marginBottom: '2rem', listStyle: 'none', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <div>
        <img
          src={img_url}
          alt={name}
          width="400"
          height="400"
          style={{ objectFit: 'cover' }}
          //
          onError={(e) => {
            e.target.src = '/vite.svg'; // Fallback image
            console.log(`Image failed to load: ${img_url}`);
          }}

        />
      </div>

      <h1>Name: {name}</h1>
      <h2>Rating: {rating}</h2>
      <p>Description: {description}</p>
      <p>Cast: {cast.join(', ')}</p> 
      <p>Genre: {genre.join(', ')}</p>

      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button>Watch Now!</button>
      </a>
    </li>
  );
};

