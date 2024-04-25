import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import { Context } from "../../main";
import { useContext } from "react";

const AppRouter = () => {
    const { user }: any = useContext(Context);
    console.log(user)
    return (
            <Routes>
                {user.isAuth && authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
};

export default AppRouter;
