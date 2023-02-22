import React, {useState} from 'react';

const Form = (props) => {
    const [color, setColor] = useState('');

    // ? 4/5 the state was set in Apps.js, passed into Form via props, and here they are as props, to use in functions exactly the same way as if they were created here
    const {colorList, setColorList} = props;

    // event handlers
    const onChangeHandler = (e) => {
        setColor(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setColorList([...colorList, color]);
        setColor("");
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="color" className="form-label"><b>Color</b></label>
                    <input onChange={onChangeHandler} type="text" className="form-control" name="color" value={color} id="color" />
                </div>
                {/* todo: ninja challenge to add a second input that controls the width/height of box. Haven't done this challenge yet. */}
                {/* <div className="mb-3">
                    <label htmlFor="num" className="form-label"><b>Width/Height</b></label>
                    <input onChange={onChangeHandler} type="number" className="form-control" name="num" value={num} id="num" />
                </div> */}
                <button type='submit' className='btn btn-primary mt-3'>Add</button>
            </form>            
        </>
    );
}

export default Form;