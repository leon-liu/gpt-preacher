import { Header } from '../components/header/Header';
import Search from '../components/Search';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Footer } from '../components/footer/Footer';
import GoogleAdsenseContainer from '../components/GoogleAdsenseContainer';

const MainLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className='header-bg px-4 md:px-24'>
        <Header></Header>
        <Search></Search>
      </div>
      <main className="px-4 md:flex md:px-24">
        <Sidebar></Sidebar>
        <div className="flex-1">{children}</div>
      </main>
      <GoogleAdsenseContainer client={process.env.NEXT_PUBLIC_AD_CLIENT} slot={process.env.NEXT_PUBLIC_AD_SLOT}></GoogleAdsenseContainer>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
