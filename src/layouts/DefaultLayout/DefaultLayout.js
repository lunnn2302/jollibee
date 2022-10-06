import SidebarMenu from '~/components/SidebarMenu';
import Header from './components/Header';
// import Container from './Container';
import Footer from './Footer';
import { SidebarMenuContext } from '~/context/SidebarMenuContext';
import { useContext } from 'react';

function DefaultLayout({ children }) {
    const sidebarMenuContext = useContext(SidebarMenuContext);

    return (
        <div
            onClick={
                sidebarMenuContext.sidebarMenu === true
                    ? sidebarMenuContext.toggleSidebarMenu
                    : (sidebarMenuContext.sidebarMenu = false)
            }
        >
            <Header />
            <SidebarMenu />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
