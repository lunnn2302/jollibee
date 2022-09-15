import { useEffect } from 'react';

function Service() {
    useEffect(() => {
        document.title = 'Service';
    }, []);
    return <h1>Service</h1>;
}

export default Service;
