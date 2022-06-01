import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Auth from './pages/Auth'
import Shop from './pages/Shop'
import DevicePage from './pages/DevicePage'
import Favorite from './pages/Favorite'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, FAVORITE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]