import { Link } from 'react-router-dom';

const PageNotFound = () => <main className="not-found"><div className="page-width"><p className="eyebrow">A wrong turn</p><h1>404 <em>somewhere.</em></h1><p>That page seems to have wandered off. Let's get you back to the good stuff.</p><Link className="button button-primary" to="/">Back to the beginning <span>↗</span></Link></div></main>;

export default PageNotFound;