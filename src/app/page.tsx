"use client";
import { useState } from "react";
import axios from "axios";
import NameForm from "../app/NameForm";
import Result from "../app/Result";

const Home = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async (name) => {
    setError("");
    try {
      const ageResponse = await axios.get(`https://api.agify.io?name=${name}`);
      const genderResponse = await axios.get(
        `https://api.genderize.io?name=${name}`
      );
      const countryResponse = await axios.get(
        `https://api.nationalize.io?name=${name}`
      );

      setResult({
        name,
        age: ageResponse.data.age,
        gender: genderResponse.data.gender,
        country: countryResponse.data.country[0]?.country_id || "Unknown",
      });
    } catch (error) {
      console.error(error);
      // setError("Failed to fetch data. Please try again later.");
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Guess Age, Gender, and Country</h1>
      <NameForm onSubmit={fetchData} />
      {result && <Result data={result} />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Home;
