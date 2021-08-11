import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../../Hooks/UseFetch";
import { PHOTO_GET } from "../../api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import Head from "../../Helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, request, error } = UseFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent singl={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
