import Admin from "./pages/Admin/Admin"
import Basket from "./pages/Basket/Basket"
import Home from "./pages/Home"
import Plant from "./pages/PlantPage/PlantPage"
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, PLANT_ROUTE } from "./utils/consts"


export const authRoutes = [

    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PLANT_ROUTE + '/:id',
        Component: Plant
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]