import "./App.css";

import { React, useState } from "react";
function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

function Form({ onAddItem }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    if (!email) return;
    if (!first_name) return;
    if (!last_name) return;
    const newitem = { first_name, last_name, email, id: Date.now() };
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first_name: Daenerys"
          value={first_name}
          key={Date.now}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last_name: Targaryen"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email: dragonlady@gotworld.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div className="info">
        <div>first name:{first_name}</div>
        <div>last name:{last_name}</div>
        <div>email:{email}</div>
      </div>
    </>
  );
}

export default App;
