import MainLayout from '../../MainLayout';

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return <MainLayout>{children}</MainLayout>;
}

export default Layout;