import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>
        Túlio Chaves de Souza
        <br/> 
        <br/> 
        tuliochavess@gmail.com - (31) 9 9726-6369
      </p>
    </footer>
  );
};

export default Footer;
