import React, { useState } from "react";

const AddOption = () => {
    const [error, setError] = useState();

    const handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        setError(error);

        if (!error) {
            e.target.elements.option.value = "";
        }
    };
    return (
        <div>
            {error && <p className="add-option-error">{error}</p>}
            <form className="add-option" onSubmit={handleAddOption}>
                <input className="add-option__input" type="text" name="option"></input>
                <button className="button">Add Option</button>
            </form>
        </div>
    );
};

export default AddOption;
