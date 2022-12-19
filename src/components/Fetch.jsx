import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState({});

  // => first way to get useres information with using fetch

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setUsers(res);
  //       });
  //   }, []);

  //   const getInfo = (id) => {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setSelected(res);
  //       });
  //   };

  //   ===================
  //   ===================

  // => second and better way to gat users information with using fetch

  const getUser = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getUser().then((res) => setUsers(res));
  }, []);

  const getInfo = (id) => {
    getUser(id).then((res) => setSelected(res));
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>Fetch</h1>
        {users.map((value) => (
          <h1 key={value.id}>
            {value.id}. {value.name}
            <button onClick={() => getInfo(value.id)}>Get Info</button>
          </h1>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h1>Get Info</h1>
        <h2>{selected?.name}</h2>
      </div>
    </div>
  );
};

export default Fetch;
