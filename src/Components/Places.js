import { Link } from 'react-router-dom';
import { useState } from 'react';

const places = [
    ['Goa', 'Coastal calm', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85'],
    ['Manali', 'Mountain air', 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85'],
    ['Kashmir', 'Still waters', 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=85'],
    ['Kerala', 'Backwater days', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85'],
    ['Ladakh', 'High roads', 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=85'],
    ['Udaipur', 'Golden hours', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85'],
    ['Andaman', 'Island time', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85'],
    ['Taj Mahal', 'Timeless wonder', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85'],
    ['Alleppey', 'Houseboat mornings', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85'],
    ['Darjeeling', 'Tea country', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85'],
    ['Amritsar', 'Golden history', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85'],
    ['Gulmarg', 'Snow stories', 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=900&q=85'],
    ['Srinagar', 'Lake light', 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=85'],
    ['Lakshadweep', 'Blue horizons', 'https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=900&q=85'],
    ['Ooty', 'Green escapes', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85'],
    ['Rishikesh', 'River energy', 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=85'],
    ['Shimla', 'Pine air', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85'],
    ['Nainital', 'Lake retreat', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85'],
    ['Mussoorie', 'Hill walks', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85'],
    ['Pondicherry', 'French afternoons', 'https://images.unsplash.com/photo-1507521731446-7f8c7a8b7a5b?auto=format&fit=crop&w=900&q=85'],
    ['Leh', 'High desert', 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=85'],
    ['Havelock Islands', 'Island time', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85'],
    ['Mahabaleshwar', 'Forest roads', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85'],
    ['Lavasa', 'Lakeside calm', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85'],
    ['Kasauli', 'Quiet hills', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85'],
    ['Assam', 'Tea and wild', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85'],
    ['Meghalaya', 'Cloud country', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85'],
    ['Nagaland', 'Living culture', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85'],
    ['Karnataka', 'Coast and coffee', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85'],
    ['Himachal Pradesh', 'Mountain country', 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85'],
    ['Delhi', 'Old soul, new energy', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85'],
    ['Mumbai', 'City by the sea', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85'],
    ['Lonavala', 'Monsoon green', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85']
];

function Places() {
    const [query, setQuery] = useState('');
    const filteredPlaces = places.filter(([name, mood]) => `${name} ${mood}`.toLowerCase().includes(query.toLowerCase()));
    return <main className="places-page inner-page"><section className="places-intro page-width"><p className="eyebrow">Go gently, go far</p><h1>Find your next<br /><em>somewhere.</em></h1><div className="places-search"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a destination or mood" aria-label="Search destinations" /><span>⌕</span></div></section><section className="places-grid page-width">{filteredPlaces.map(([name, mood, image]) => <article className="place-card" key={name}><img src={image} alt={name} /><div><p>{mood}</p><h2>{name}</h2><Link to="/places/booknow">Plan this trip <span>↗</span></Link></div></article>)}</section>{!filteredPlaces.length && <p className="page-width empty-state">No destination found yet. Try another feeling.</p>}</main>;
}

export default Places;