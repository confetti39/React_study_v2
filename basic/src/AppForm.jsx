import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
