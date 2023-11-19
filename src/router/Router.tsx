import React, { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import Page404 from "../components/pages/page404";

const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {homeRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
      <Route path="*" element={<Page404 />} /> 
    </Routes>
  );
});

export default Router;
