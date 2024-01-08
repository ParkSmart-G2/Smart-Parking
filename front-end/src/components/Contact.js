import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; 
import feedBack from "../components/images/feedBack.jpg"

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4444/api/submitFeedback", { name, email, message });
            // Masquer le formulaire après la soumission
            setShowForm(false);
            // Afficher le message de confirmation
            setAlertMessage('Feedback submitted successfully!');
            console.log('Feedback submitted successfully!');
        } catch (error) {
            // Gérer les erreurs de soumission du formulaire
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="formContainer">
            {showForm ? (
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Your feedback" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className="alert" onClick={() => setAlertMessage('')}>
                    {alertMessage}
                </div>
            )}
              <div className="feedimage">
              <img src={feedBack} alt="feedimage" className="feedimage"/>
               </div>
        </div>
    );
}

export default ContactForm;
