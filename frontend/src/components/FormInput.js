import React from 'react';

function FormInput(props) {
    return <div className="form">
            <form>
                <ul className="form-container">
                    <li>
                        <label>
                            Write a personal note about a contact…
                        </label>
                    </li>
                    <li>
                        <textarea type="text" name="personal-note" rows="4" cols="50" placeholder="What was your first impression of them? What did you talk about? Where did you meet them?"/>
                    </li>
                        
                    <button type="submit" className="button primary">Submit</button>
                </ul>
            </form>
        </div>;
}

export default FormInput;