import Image from "next/image";
import styles from "./AboutSection.module.css"

export default function AboutSection(){
    return(

        <section className={styles.about}>

            <div className={styles.imageContainer}>
                <Image src="/Aliah_University_Logo.svg.png" alt="University"  width={500} height={350}/>

            </div>

            <div className={styles.content}>
                <h1>About Our University</h1>
                <p>
                Welcome to University Portal. Our institution is committed to
                providing quality education, innovative research, and practical
                learning experiences that prepare students for successful careers.
                </p>

                <p>
                We offer modern classrooms, experienced faculty, advanced
                laboratories, and a vibrant campus environment where students can
                grow academically and personally.
                </p>

                <button>Explore Courses</button>
            </div>


        </section>


    )
}