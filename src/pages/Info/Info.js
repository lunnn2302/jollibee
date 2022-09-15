import { useEffect } from 'react';

function Info() {
    useEffect(() => {
        document.title = 'About Us';
    }, []);
    return <h1>Info</h1>;
}

export default Info;
