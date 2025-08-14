

export const Cards = (baba) => {//  "Prop" used :just gave a Random Name("baba" as prop) in this page 

  // Destructure: the curr prop that contains the movie data
  const { curr } = baba; 
  
  // console.log("Movie data:", curr); // Debug log
  
  return (
    <li key={curr.id} style={{ marginBottom: '2rem', listStyle: 'none', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <div>
        <img
          src={baba.curr.img_url}
          alt={baba.curr.name}
          width="400"
          height="400"
          style={{ objectFit: 'cover' }}
          //
          onError={(e) => {
            e.target.src = '/vite.svg'; // Fallback image
            console.log(`Image failed to load: ${curr.img_url}`);
          }}

        />
      </div>

      <h1>Name: {baba.curr.name}</h1>
      <h2>Rating: {baba.curr.rating}</h2>
      <p>Description: {baba.curr.description}</p>
      <p>Cast: {baba.curr.cast.join(', ')}</p> 
      <p>Genre: {baba.curr.genre.join(', ')}</p>

      <a href={baba.curr.watch_url} target="_blank" rel="noopener noreferrer">
        <button>Watch Now!</button>
      </a>
    </li>
  );
};

// export default Cards;
