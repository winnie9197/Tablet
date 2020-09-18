import React from 'react';
import data from '../data.js';

function ContactScreen(props) {
    return <div className="form">
                {data.contacts.map(contact => 
                <div className="form-container contact" key={contact._id}>
                    <div className="contact-header">
                        <img className="contact-image" src={"/images/face-icon.jpg"}/>
                        <div className="contact-info">
                            <h4>Contact Name</h4>
                            <p>{contact.description}</p>
                        </div>
                    </div>
                    <div className="contact-fields">
                        <ul>
                            <li className="contact-field">
                                <h4>Relationship</h4>
                                <p>{contact.relationship}</p>
                            </li>
                        
                            <li className="contact-field">
                                <h4>How You Met</h4>
                                <p>{contact.how}</p>
                            </li>

                            <li className="contact-field">
                                <h4>Where You Met</h4>
                                <p>{contact.where}</p>
                            </li>

                            <li className="contact-field">
                                <h4>Personal Note</h4>
                                <p>{contact.personalNote}</p>
                            </li>
                        </ul>
                        <div className="contact-buttons">
                            <button type="button" className="button primary">Contact Info</button>
                            <button type="button" className="button primary">See History</button>
                        </div>
                    </div>
                </div>
                )}
        
    </div>
}

export default ContactScreen;