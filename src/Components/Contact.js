import { Link } from 'react-router-dom';

function Contact() {
    return <main className="inner-page">
        <section className="inner-hero contact-hero">
            <div className="page-width">
                <p className="eyebrow">We would love to hear from you</p>
                <h1>Let's plan<br /><em>something good.</em></h1></div>
        </section>
        <section className="page-width contact-layout">
            <div><p className="eyebrow">Say hello</p>
                <h2>Bring us<br /><em>your question.</em></h2>
                <p className="section-copy">Whether you have a destination in mind or just a feeling, our travel team is here to help shape the next step.</p>
            </div>
            <div className="contact-details">
                <a href="tel:+911234567890">
                    <span>Call</span>+91 12345 67890</a>
                <a href="mailto:hello@travelinnewworld.com">
                    <span>Email</span>hello@travelinnewworld.com</a>
                <div>
                    <span>Find us</span>Ahmedabad · India</div>
                <Link className="button button-outline" to="/places/booknow">Start a booking
                    <span>↗</span>
                </Link></div></section></main>;
}

export default Contact;