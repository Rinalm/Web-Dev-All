import { useState } from "react";
import "./Evh.css";

// Q1: By looping thr Objects , show names & ages .OP: ex: name - age yrs old ?
// Q2: By useState hooks , to manage states to give same OP.

// // Given Arr, that contains Objests
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];
// // Ans1: looping
// export const DerivedState = () => {
//   return (
//     <div className="main-div">
//       <h1>Users ki List</h1>
//       <ul>
//         {
//           // Inside Js:
//           users.map((curr, index) => {
//             return (
//               <>
//                 // always give index as key props
//                 <li key={index}>
//                   {curr.name} - {curr.age} yrs old .
//                 </li>
//               </>
//             );
//           })
//         }
//       </ul>
//     </div>
//   );
// };

// Ans2: by useState() hook :
export const DerivedState = () => {
  // useState() hook :, containing Arr[]
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  // by Derived state: Count of users ?
  console.log(users);
  const userCount = users.length;
  // by Derived state: Average age of users ?. Js Methods( reduce .... etc see thapa 1st video )
  const averageAge = users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;
  //
  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};
