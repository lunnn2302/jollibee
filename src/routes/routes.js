import config from '~/configs';

//  Pages
import Home from '~/pages/Home';
import Info from '~/pages/Info';
import Menu from '~/pages/Menu';
import Promotion from '~/pages/Promotion';
import Service from '~/pages/Service';
import News from '~/pages/News';
import Stores from '~/pages/Stores';
import Contact from '~/pages/Contact';
import Register from '~/pages/Register';
import Recruit from '~/pages/Recruit';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.info, component: Info },
    { path: config.routes.menu, component: Menu },
    { path: config.routes.promotion, component: Promotion },
    { path: config.routes.service, component: Service },
    { path: config.routes.news, component: News },
    { path: config.routes.stores, component: Stores },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.register, component: Register },
    { path: config.routes.recruit, component: Recruit },
];

// Private routes
export const privateRoutes = [];
