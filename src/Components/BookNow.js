import React, { useEffect, useState } from 'react';

const emptyBooking = { id: '', name: '', email: '', destination: '', date: '' };

const BookNow = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isFormUpdating, setIsFormUpdating] = useState(false);
    const [booking, setBooking] = useState(emptyBooking);

    useEffect(() => { getAllData(); }, []);

    const getAllData = async () => {
        try {
            const response = await fetch('http://localhost:8000/bookings');
            if (!response.ok) throw new Error('Could not load bookings.');
            setData(await response.json());
            setError('');
        } catch (requestError) {
            setError('Booking service is unavailable. Start the backend and check the MongoDB connection.');
            console.error('Error loading bookings:', requestError);
        }
    };

    const handleChange = (event) => setBooking({ ...booking, [event.target.name]: event.target.value });

    const addBooking = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/bookings', { method: 'POST', body: JSON.stringify(booking), headers: { 'Content-Type': 'application/json' } });
            if (!response.ok) throw new Error('Could not save the booking.');
            setBooking(emptyBooking);
            setError('');
            await getAllData();
        } catch (requestError) {
            setError('Booking service is unavailable. Start the backend and check the MongoDB connection.');
            console.error('Error creating booking:', requestError);
        }
    };

    const updateBooking = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/bookings/${booking.id}`, { method: 'PUT', body: JSON.stringify(booking), headers: { 'Content-Type': 'application/json' } });
            if (!response.ok) throw new Error('Could not update the booking.');
            setBooking(emptyBooking);
            setIsFormUpdating(false);
            setError('');
            await getAllData();
        } catch (requestError) {
            setError('Booking service is unavailable. Start the backend and check the MongoDB connection.');
            console.error('Error updating booking:', requestError);
        }
    };

    const deleteBooking = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/bookings/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Could not delete the booking.');
            await getAllData();
        } catch (requestError) {
            setError('Booking service is unavailable. Start the backend and check the MongoDB connection.');
            console.error('Error deleting booking:', requestError);
        }
    };

    return (
        <main className="booking-page">
            <div className="page-width">
                <header className="booking-header">
                    <div><p className="eyebrow">Your next chapter</p><h1>Make it<br /><em>real.</em></h1></div>
                    <p>Tell us where you want to go. We will keep the details safe while you start imagining the good part.</p>
                </header>
                {error && <div className="booking-alert" role="alert">{error}</div>}
                <div className="booking-layout">
                    <section className="booking-panel">
                        <p className="panel-label">{isFormUpdating ? 'Edit your booking' : 'Start planning'}</p>
                        <form className="booking-form" onSubmit={isFormUpdating ? updateBooking : addBooking}>
                            <div className="field"><label htmlFor="booking-id">Booking ID</label><input id="booking-id" type="number" name="id" placeholder="e.g. 104" value={booking.id} onChange={handleChange} required disabled={isFormUpdating} /></div>
                            <div className="field"><label htmlFor="booking-name">Full name</label><input id="booking-name" type="text" name="name" placeholder="Your name" value={booking.name} onChange={handleChange} required /></div>
                            <div className="field field-wide"><label htmlFor="booking-email">Email</label><input id="booking-email" type="email" name="email" placeholder="you@example.com" value={booking.email} onChange={handleChange} required /></div>
                            <div className="field"><label htmlFor="booking-destination">Destination</label><input id="booking-destination" type="text" name="destination" placeholder="Where to?" value={booking.destination} onChange={handleChange} required /></div>
                            <div className="field"><label htmlFor="booking-date">Travel date</label><input id="booking-date" type="date" name="date" value={booking.date} onChange={handleChange} required /></div>
                            <button className="button button-primary form-submit" type="submit">{isFormUpdating ? 'Save changes' : 'Request this trip'} <span>↗</span></button>
                        </form>
                    </section>
                    <section className="bookings-panel">
                        <p className="panel-label">Your travel plans</p>
                        <div className="bookings-table-wrap"><table className="bookings-table"><thead><tr><th>ID</th><th>Name</th><th>Destination</th><th>Date</th><th>Actions</th></tr></thead><tbody>{data.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.destination}</td><td>{new Date(item.date).toLocaleDateString()}</td><td><div className="table-actions"><button className="table-action" type="button" onClick={() => { setIsFormUpdating(true); setBooking(item); }}>Edit</button><button className="table-action delete" type="button" onClick={() => deleteBooking(item.id)}>Delete</button></div></td></tr>)}</tbody></table></div>
                        {!data.length && <p className="section-copy">Your saved journeys will appear here.</p>}
                    </section>
                </div>
            </div>
        </main>
    );
};

export default BookNow;