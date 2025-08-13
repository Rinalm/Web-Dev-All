

export const Cards = (props) => {
  const { curr } = props; // Destructure the curr prop that contains the movie data
  console.log("Movie data:", curr); // Debug log
  
  return (
    <li key={curr.id} style={{ marginBottom: '2rem', listStyle: 'none', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <div>
        <img
          src={curr.img_url}
          alt={curr.name}
          width="300"
          height="400"
          style={{ objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = '/vite.svg'; // Fallback image
            console.log(`Image failed to load: ${curr.img_url}`);
          }}
        />
      </div>

      <h1>Name: {curr.name}</h1>
      <h2>Rating: {curr.rating}</h2>
      <p>Description: {curr.description}</p>
      <p>Cast: {curr.cast.join(', ')}</p>
      <p>Genre: {curr.genre.join(', ')}</p>
      <a href={curr.watch_url} target="_blank" rel="noopener noreferrer">
        <button>Watch Now!</button>
      </a>
    </li>
  );
};

// export default Cards;
