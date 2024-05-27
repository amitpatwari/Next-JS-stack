import styles from "./Result.css";

const Result = ({ data }) => {
  return (
    <div className={styles.resultContainer}>
      <h2>Results for {data.name}</h2>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Country: {data.country}</p>
    </div>
  );
};

export default Result;
