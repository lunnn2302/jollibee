import { useEffect } from 'react';

function Recruit() {
    useEffect(() => {
        document.title = 'Tuyển dụng';
    }, []);
    return <h1>Recruit</h1>;
}

export default Recruit;
