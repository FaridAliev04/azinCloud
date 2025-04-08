import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import HomeComponent from "../pages/home/home.component";
import PublicComponent from "../core/layouts/public/public.component";
import AboutComponent from "../pages/about/about.component";
import ServiceComponent from "../pages/service/service.component";
import NewsCardsComponent from "../pages/news/newsCard/news-cards.component";
import NewsParamsComoponent from "../pages/newParams/news-params.comoponent";
import ContactComponent from "../pages/contact/contact.component";
import LoginComponent from "../pages/login/login.component";
import PersonInfoComponent from "../pages/personInfo/personInfo.component";

const router=createBrowserRouter([
    {
        path:Routes.default,
        element:<HomeComponent/>,
    },
    {
        element: <PublicComponent/>,
        children: [
            {
            path:Routes.about,
            element:<AboutComponent/>
            },
            {
                path:Routes.service,
                element:<ServiceComponent/>
            },
            {
                path:Routes.news,
                element:<NewsCardsComponent/>
            },
            {
                path:Routes.newsParams,
                element:<NewsParamsComoponent/>
            },
            {
                path:Routes.contact,
                element:<ContactComponent/>
            },
            {
                path:Routes.login,
                element:<LoginComponent/>
            },
            {
                path:Routes.personInfo,
                element:<PersonInfoComponent/>
            }
        ],
    },
])


export  default router