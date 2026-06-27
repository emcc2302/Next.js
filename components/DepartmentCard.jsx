import styles from "./DepartmentCard.module.css";
export default function DepartmentCard(props) {
  return (
    <div className={styles.card}>
      <h2>{props.name}</h2>

      <p>{props.students} Students</p>

      <button className={styles.button}>View Details</button>
    </div>
  );
}