import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css"; 


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4444/api/submitFeedback", { name, email, message });
            // Gérer la réussite de la soumission du formulaire
            setAlertMessage('Feedback submitted successfully!');
            console.log('Feedback submitted successfully!');
        } catch (error) {
            // Gérer les erreurs de soumission du formulaire
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Your feedback" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Submit</button>
            {alertMessage && (
                <div className="alert" onClick={() => setAlertMessage('')}>
                    {alertMessage}
                </div>
            )}
        </form>
    );
}

export default ContactForm;
