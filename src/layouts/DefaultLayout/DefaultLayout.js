import Header from './components/Header';
import Container from './Container';
import Footer from './Footer';
import { useState } from 'react';

function DefaultLayout({ children }) {
    const [title, setTitle] = useState(children.type.name);
    if (children.type.name !== document.title) {
        setTitle(children.type.name);
        document.title = title;
    }

    return (
        <div>
            <Header />
            <div className="container">
                <Container />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
