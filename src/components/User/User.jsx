import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../feed/Feed.jsx";
import UserPhotoPost from "./UserPhotoPost.jsx";
import UserStats from "./UserStats.jsx";
import { UserContext } from "../../UserContext.jsx";
import NotFound from "../NotFound.jsx";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
