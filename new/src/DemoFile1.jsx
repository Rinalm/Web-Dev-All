// import apidata from "../api/apidata.json"; // Importing all values from API folder(Dynamic values)

// Component(Start with Capital letter): is a function , that return JSX
 const MoviesCards = () => {
  return (
    <ul>
      {/* index 0 */}
      <li>
        <div>
          <img
            src={apidata[0].img_url} // dynamic values
            alt="not shown"
            width="42%"
            height="40%"
          />
        </div>

        <h1>Name:{apidata[0].name}</h1>
        <h2> Rating: {apidata[0].rating} </h2>
        <p> Description: {apidata[0].description}</p>
        <p> Cast : {apidata[0].cast} </p>
        <p>genre: {apidata[0].genre} </p>
        <a href={apidata[0].watch_url} target="_blank">
          <button> Watch Now ! </button>
        </a>
      </li>

      {/* index 1 */}
      <li>
        <div>
          <img
            src={apidata[1].img_url} // dynamic values
            alt="not shown"
            width="42%"
            height="41%"
          />
        </div>

        <h1>Name:{apidata[1].name}</h1>
        <h2> Rating: {apidata[1].rating} </h2>
        <p> Description: {apidata[1].description}</p>
        <p> Cast : {apidata[1].cast} </p>
        <p>genre: {apidata[1].genre} </p>
        <a href={apidata[1].watch_url} target="_blank">
          <button> Watch Now ! </button>
        </a>
      </li>

      {/* index 2 */}
      <li>
        <div>
          <img
            src={apidata[2].img_url} // dynamic values
            alt="not shown"
            width="42%"
            height="40%"
          />
        </div>

        <h1>Name:{apidata[2].name}</h1>
        <h2> Rating: {apidata[2].rating} </h2>
        <p> Description: {apidata[2].description}</p>
        <p> Cast : {apidata[2].cast} </p>
        <p>genre: {apidata[2].genre} </p>
        <a href={apidata[2].watch_url} target="_blank">
          <button> Watch Now ! </button>
        </a>
      </li>

      {/* index 3 */}
      <li>
        <div>
          <img
            src={apidata[3].img_url} // dynamic values
            alt="not shown"
            width="42%"
            height="40%"
          />
        </div>

        <h1>Name:{apidata[3].name}</h1>
        <h2> Rating: {apidata[3].rating} </h2>
        <p> Description: {apidata[3].description}</p>
        <p> Cast : {apidata[3].cast} </p>
        <p>genre: {apidata[3].genre} </p>
        <a href={apidata[3].watch_url} target="_blank">
          <button> Watch Now ! </button>
        </a>
      </li>
    </ul>
  );
};

// export default MoviesCards;
