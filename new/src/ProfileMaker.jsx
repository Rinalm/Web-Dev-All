// Hoisting :, supporsts better in: M1:  default Creatiion Import/export
function ProfileMaker() {
  return (
    <div>
      <h1>Profile Cards Challenge</h1>
      {/* using components */}
      <ProfileCards
        name="Raju"
        age={30}
        greeting={
          <div>
            <strong>Hi bro , how are you all bal bache sab thek</strong>
          </div>
        }
      >
        {/* JSX inside the Child Component : using  .children*/}
        <p>Hobbies: Reading , hiking</p>
        <button>Call me</button>
      </ProfileCards>
      {/*  */}
      {/*  */}
      <ProfileCards
        name="Babaji"
        age={50}
        greeting={
          <div>
            <strong>Hi bro , how are you all bal bache sab thek</strong>
          </div>
        }
      >
        <p>Hobbies: dancing , Coding</p>
        <button>Call me</button>
      </ProfileCards>
    </div>
  );
}

export default ProfileMaker;

//=========================================================================

// Task: Fetch the component data of Jsx function :?

// M1: destructure by, const function
// function ProfileCards(props) {
//   const {name, age, greeting,children} = props;
//   return (
//     <>
//       <h1>Name:{name}</h1>
//       <p>Age:{age}</p>
//       <p>Greeting:{greeting}</p>
//       <div>{children}</div>
//     </>
//   );
// }

//-------------------------------------------------------
//M2: Can Destruct inside the function braces , with { all Props }
function ProfileCards({ name, age, greeting, children }) {
  // const {name, age, greeting,children} = props;
  return (
    <>
      <h1>Name:{name}</h1>
      <p>Age:{age}</p>
      <p>Greeting:{greeting}</p>
      <div>{children}</div>
    </>
  );
}
