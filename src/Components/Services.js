const services = [['01', 'Active tours', 'A little more altitude, movement and fresh air.'], ['02', 'Flight research', 'Smart routes and flexible options that suit your rhythm.'], ['03', 'Local guidance', 'The restaurants, walks and hidden corners worth your time.'], ['04', 'Always supported', 'A real human when plans change or questions pop up.'], ['05', 'Slow stays', 'Handpicked spaces that make staying in feel like part of the trip.']];

function Services() {
    return <main className="inner-page services-page"><section className="services-intro page-width"><p className="eyebrow">How we help</p><h1>More than a<br /><em>map and a ticket.</em></h1><p className="section-copy">From the first spark of an idea to the moment you arrive home, we make travel feel lighter and more personal.</p></section><section className="services-list page-width">{services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p><b>↗</b></article>)}</section></main>;
}

export default Services;