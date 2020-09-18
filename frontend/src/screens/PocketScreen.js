import React from 'react';
import data from '../data.js';

function ContactScreen(props) {
    return <div className="pocket">
                <div className="pocket-header flex-row">
                    <img className="contact-image" src={"/images/face-icon.jpg"}/>
                    <div className="pocket-info flex-col">
                        <div className="flex-row">
                            <h1 className="display display-4 no-margin">Contact Name</h1>
                            <h4 className="grey-hint pocket-relationship no-margin">( relationship )</h4>
                        </div>
                        <div >
                            <h2 className="pocket-title">Pocket Title</h2>
                        </div>
                    </div>
                </div>
                <div className="pocket-content">
                    <div className="edit-buttons">
                        <button className="grey-hint">Edit</button>
                        <button className="grey-hint">Delete</button>
                    </div>
                    <ul>
                        <li className="pocket-field">
                            <p className="personalNote">(Personal Note 1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis fermentum dui, a dapibus nulla pretium vitae. Morbi id iaculis turpis, id vestibulum elit. Cras lectus diam, ultricies non commodo hendrerit, volutpat ut metus. Nulla ligula nunc, elementum sed vehicula a, aliquet eget urna. Morbi sed dictum nulla, a ullamcorper lacus. Morbi dapibus, quam sed vestibulum rutrum, magna urna mollis enim, nec pharetra justo nunc et magna. In hac habitasse platea dictumst. Nullam vitae tellus augue. Nunc ut luctus nibh, id posuere est. Phasellus sit amet mauris malesuada sapien condimentum dictum. Fusce accumsan a sem quis tristique. Quisque at dui sit amet risus cursus feugiat sed fringilla erat. Aenean id est auctor, faucibus velit ut, volutpat enim. Vivamus nec nisl bibendum, maximus nisl eu, hendrerit odio. Quisque sit amet quam vestibulum, pretium justo vel, vestibulum sapien. Nunc at lobortis quam.

</p>
                        </li>

                        <button className="grey-hint">+</button>
                    </ul>
                </div>
                
        
    </div>
}

export default ContactScreen;