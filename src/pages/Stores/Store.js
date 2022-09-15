import { useEffect } from 'react';

function Store() {
    useEffect(() => {
        document.title = 'Store Locator';
    }, []);
    return <h1>Store</h1>;
}

export default Store;
