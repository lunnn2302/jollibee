import { useEffect } from 'react';

function Promotion() {
    useEffect(() => {
        document.title = 'Khuyến mãi';
    }, []);
    return <h1>Promotion</h1>;
}

export default Promotion;
