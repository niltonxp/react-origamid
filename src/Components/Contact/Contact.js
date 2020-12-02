import React from "react";
import photo from "../../img/nilton.jpg";
import Head from "../Head/Head";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={photo} alt="Nilton" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.data}>
          <li>nitinhosilva1996@gmail.com</li>
          <li>(79) 99198-0902</li>
          <li>Rua XYZ</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
