import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom'
import { Context } from "./../index";
import Shop from "../pages/Shop";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const { user } = useContext(Context)
    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<Shop />} />
        </Routes>
    )
}

export default AppRouter