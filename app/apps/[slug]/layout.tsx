import { Header } from '../../../components/header/Header';
import { Sidebar } from '../../../components/sidebar/Sidebar';
import { Footer } from '../../../components/footer/Footer';

const MainLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div className='header-bg px-4 md:px-24 h-72'>
                <Header></Header>
            </div>
            <main className="flex px-4 md:px-24">
                <div className="flex-1">{children}</div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default MainLayout