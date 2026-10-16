import React from "react";
import { useUser } from "../context/userContext";

export default function Login() {
  const { setUser } = useUser();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;

    console.log(name, value);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUser(form);
  }

  return (
    <>
      <h1>login</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="enter your name..."
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email..."
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
}
