import { Link } from 'react-router-dom';

function About() {
    return <main className="inner-page">
        <section className="inner-hero about-hero"><div className="page-width"><p className="eyebrow">The people behind the postcards</p><h1>Travel with<br /><em>intention.</em></h1></div></section>
        <section className="page-width story-layout"><div><p className="eyebrow">Why we wander</p><h2>Good trips are<br /><em>felt, not rushed.</em></h2></div><div className="story-copy"><p>Welcome to Travel In New World, a small team of curious people who believe the best journeys leave room for surprise. We connect thoughtful travellers with places, hosts and experiences that feel genuinely theirs.</p><p>From a quiet beach morning to a table shared with new friends, we care about the details that turn a holiday into a story you keep telling.</p><Link className="button button-primary" to="/places/booknow">Plan your story <span>↗</span></Link></div></section>
        <section className="values-section"><div className="page-width"><p className="eyebrow">What guides us</p><div className="values-grid"><article><span>01</span><h3>Curated, never crowded</h3><p>We choose places for their character, not their popularity.</p></article><article><span>02</span><h3>Local at heart</h3><p>Real recommendations from people who know a place intimately.</p></article><article><span>03</span><h3>Easy by design</h3><p>Clear planning, human support and space to enjoy the journey.</p></article></div></div></section>
    </main>;
}

export default About;