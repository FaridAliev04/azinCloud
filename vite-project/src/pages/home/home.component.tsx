import FooterCoponent from '../../core/layouts/public/components/footer/footer.coponent';
import NavComponent from '../../core/layouts/public/components/nav/nav.component';
import AboutUsComponent from './components/about-us/about-us.component';
import CertificatesComponent from './components/certificates/certificates.component';
import HomeAboutComponent from './components/home-about/home-about.component';
import NewsComponent from './components/news/news.component';
import PartnersComponent from './components/partners/partners.component';
import ProductsComponent from './components/products/products.component';
import ScoreComponent from './components/score/score.component';
import SectorComponent from './components/sector/sector.component';
import ServiceComponent from './components/service/service.component';

const HomeComponent = () => {
    return (
        <div>
            <NavComponent/>
            <HomeAboutComponent/>
            <ProductsComponent/>
            <AboutUsComponent/>
            <SectorComponent/>
            <ServiceComponent/>
            <ScoreComponent/>
            <PartnersComponent/>
            <NewsComponent/>
            <CertificatesComponent/>
            <FooterCoponent/>
        </div>
    );
}

export default HomeComponent;
