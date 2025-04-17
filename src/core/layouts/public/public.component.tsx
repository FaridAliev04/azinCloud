import { Outlet } from "react-router-dom";
import NavComponent from "./components/nav/nav.component";
import FooterCoponent from "./components/footer/footer.coponent";
import { usePublicStyle } from "./public.style";

const PublicComponent = () => {
    const classes=usePublicStyle()
    return (
        <div>
            <NavComponent/>
            <Outlet/>
            <FooterCoponent/>
        </div>
    );
}

export default PublicComponent;
