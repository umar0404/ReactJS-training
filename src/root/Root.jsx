import React from "react";
import Fetch from "../components/Fetch";
// import Body from "../components/Body";
// import Controlled from "../components/Controlled";
// import Uncontrolled from "../components/Uncontrolled";

const Main = () => {
  return (
    <div>
      <Fetch />
      {/* <Controlled />
      <hr />
      <Uncontrolled /> */}
    </div>
  );
};

export default Main;

// import React, { useEffect, useState } from "react";

// export const Fetch = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
//       res.json().then((res) => {
//         console.log(res);
//         setUsers(res);
//       })
//     );
//   }, []);

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ flex: 1 }}>
//         <h1>Fetch:</h1>
//         {users.map((value) => {
//           <h1 key={value.id}>{value.name}</h1>;
//         })}
//       </div>
//       <div style={{ flex: 1 }}>
//         <h1>Get Info</h1>
//       </div>
//     </div>
//   );
// };

// export default Fetch;
