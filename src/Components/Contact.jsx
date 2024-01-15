import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] =useState('');
    const [message, setMessage] = useState('');

    const service_id = 'service_8uj5v6h'
    const template_id = 'template_cay9vkl'
    const user_id = 'sc1IimSIKFu-suYwt'

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const emailTemplate = {
            to_email: 'manson88fang@gmail.com', 
            from_name: fromName,
            from_email: fromEmail,
            message: message,
        };

        emailjs.send(service_id, template_id, emailTemplate, user_id)
            .then((response) => {
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });

        setFromName('');
        setFromEmail('');
        setMessage('');
    };

    return (
        <form className='p-2 flex flex-col' ref={form} onSubmit={sendEmail}>
            <h2>Name:</h2>
            <input 
                type='text' 
                value={fromName} 
                onChange={(e) => setFromName(e.target.value)}
                required
                />
            <h2>Email:</h2>
            <input 
                type='text' 
                value={fromEmail} 
                onChange={(e) => setFromEmail(e.target.value)}
                required
                />
            <h2>Message:</h2>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button 
                type='submit'
                className='bg-slate-300 mt-2 p-2 rounded-md text-sm hover:bg-slate-400'
            >
                SUBMIT
            </button>
        </form>
    )
}

export default Contact;