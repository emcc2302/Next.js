import styles from "./DepartmentCard.module.css";
import Link from "next/link";
export default function DepartmentCard({

  name,
  students,
  slug,
})
{
  return (
    <div className={styles.card}>
      <h2>{name}</h2>

      <p>{students} Students</p>
    
      <Link href={`/departments/${slug}`} className={styles.button}>
        View Details
      </Link>
    </div>
  );
}