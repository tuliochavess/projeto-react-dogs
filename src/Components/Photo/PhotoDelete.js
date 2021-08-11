import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import UseFetch from "../../Hooks/UseFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = UseFetch();

  async function handleClick(event) {
    const confirm = window.confirm(
      "Tem certeza que quer deletar esta bela imagem?"
    );
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
