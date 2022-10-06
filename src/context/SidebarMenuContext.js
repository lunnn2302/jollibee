import { useState, createContext } from 'react';

const SidebarMenuContext = createContext();

function SidebarMenuProvider({ children }) {
    const [sidebarMenu, setSidebarMenu] = useState(false);

    const toggleSidebarMenu = () => {
        setSidebarMenu(!sidebarMenu);
    };

    const value = {
        sidebarMenu,
        toggleSidebarMenu,
    };

    return <SidebarMenuContext.Provider value={value}>{children}</SidebarMenuContext.Provider>;
}

export { SidebarMenuContext, SidebarMenuProvider };
