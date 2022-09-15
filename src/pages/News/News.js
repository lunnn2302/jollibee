import { useEffect } from 'react';

function News() {
    useEffect(() => {
        document.title = 'Tin tức';
    }, []);
    return <h1>News</h1>;
}

export default News;
