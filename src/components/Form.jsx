import React, {useState} from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    // todo: this might be overdoing it, could be a simpler way to refactor this, but get it done first and work on that later
    const [color, setColor] = useState('');
    // ! need to move this into the parent component and then add them in here via props
    // const [colorList, setColorList] = useState([]);
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
            {/* todo: maybe this gets broken out into a separate component */}
            <h2>Color Blocks:</h2>
            <div className='row'>
            {
                colorList.map((newColor, idx) => (
                    <div key={idx} className={`col-md-auto ${styles.box}`} style={{backgroundColor: newColor}}></div>
                ))
            }
            </div>
        </>
    );
}

export default Form;