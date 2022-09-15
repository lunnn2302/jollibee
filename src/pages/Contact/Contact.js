import { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);
    return <h1>Contact</h1>;
}

export default Contact;
