import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import UseFetch from "../Hooks/UseFetch";
import { PHOTOS_GET } from "../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinity }) => {
  const { data, error, loading, request } = UseFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) setInfinity(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinity]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
