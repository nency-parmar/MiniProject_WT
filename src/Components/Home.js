import { Link } from "react-router-dom";

const destinations = [
    { title: 'Coastal calm', tag: 'Beach escapes', image: 'https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=900&q=85' },
    { title: 'Open roads', tag: 'Road trips', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=85' },
    { title: 'Wild at heart', tag: 'Adventure tours', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85' }
];

function Home() {
    return (
        <main>
            <section className="hero-section">
                <div className="hero-image"></div>
                <div className="hero-content page-width">
                    <p className="eyebrow">Curated journeys · Since 2018</p>
                    <h1>Go somewhere<br /><em>worth remembering.</em></h1>
                    <p className="hero-intro">Small-group escapes, slow travel and beautiful places, thoughtfully planned around you.</p>
                    <div className="hero-actions"><Link className="button button-primary" to="/places/booknow">Start exploring <span>↗</span></Link><Link className="text-link" to="/places">See destinations <span>→</span></Link></div>
                    <div className="hero-note"><span className="note-dot"></span><span>12,000+ travellers found their next story with us</span></div>
                </div>
                <div className="hero-stamp">T · N · W<br /><small>travel beautifully</small></div>
            </section>
            <section className="intro-section page-width">
                <div><p className="eyebrow">The good kind of lost</p><h2>Travel is better<br /><em>when it feels like yours.</em></h2></div>
                <p className="section-copy">We design trips for curious people who want to feel a place, not just see it. Local stays, unhurried days and the kind of details you talk about for years.</p>
            </section>
            <section className="destination-section page-width">
                <div className="section-heading"><div><p className="eyebrow">Choose your mood</p><h2>Find your next <em>somewhere.</em></h2></div><Link className="text-link" to="/places">View all places <span>→</span></Link></div>
                <div className="destination-grid">{destinations.map((destination) => <article className="destination-card" key={destination.title}><img src={destination.image} alt={destination.title} /><div className="destination-overlay"><p>{destination.tag}</p><h3>{destination.title}</h3><span>Explore <b>↗</b></span></div></article>)}</div>
            </section>
            <section className="quote-section page-width"><p className="eyebrow">A little reminder</p><blockquote>“We travel not to escape life,<br />but for life not to escape us.”</blockquote><Link className="button button-outline" to="/places/booknow">Make it real <span>↗</span></Link></section>
        </main>
    );
}

export default Home;