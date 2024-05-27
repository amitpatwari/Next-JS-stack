"use client";
import { useState } from "react";
import styles from "./NameForm.css";

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onSubmit(name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
        required
      />
      <button type="submit">Guess</button>
    </form>
  );
};

export default NameForm;
