import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "../User/UserPhotoPost";
import UserStats from "../User/UserStats";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import Head from "../../Helper/Head";

const User = () => {
  const {data} = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Suas fotos" description="Fotos do usuário" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
