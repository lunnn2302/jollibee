import Home from '~/pages/Home';
import Info from '~/pages/Info';
import Menu from '~/pages/Menu';
import Promotion from '~/pages/Promotion';
import Service from '~/pages/Service';
import News from '~/pages/News';
import Stores from '~/pages/Stores';
import Contact from '~/pages/Contact';

// Public routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/info', component: Info },
    { path: '/menu', component: Menu },
    { path: '/promotion', component: Promotion },
    { path: '/service', component: Service },
    { path: '/news', component: News },
    { path: '/stores', component: Stores },
    { path: '/contact', component: Contact },
];

// Private routes
export const privateRoutes = [];
