import { Outlet } from "react-router-dom";
import NavComponent from "./components/nav/nav.component";
import FooterCoponent from "./components/footer/footer.coponent";

const PublicComponent = () => {
    return (
        <div>
            <NavComponent/>
            <Outlet/>
            <FooterCoponent/>
        </div>
    );
}

export default PublicComponent;
