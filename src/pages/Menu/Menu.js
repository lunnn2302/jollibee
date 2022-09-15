import { useEffect } from 'react';

function Menu() {
    useEffect(() => {
        document.title = 'Món mới món ngon';
    }, []);
    return <h1>Menu</h1>;
}

export default Menu;
