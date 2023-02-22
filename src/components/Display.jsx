import React from 'react';
import styles from './Form.module.css';

const Display = (props) => {
    // ? 5/5 the state was set in Apps.js, passed into Display via props, and here it is as props. Only needed the getter list to iterate through so no need to include setColorList in props
    const {colorList} = props;

    return (
        <div className='mt-4'>
            <h2>Color Blocks:</h2>
            <div className='row'>
            {
                colorList.map((newColor, idx) => (
                    <div key={idx} className={`col-md-auto ${styles.box}`} style={{backgroundColor: newColor}}></div>
                ))
            }
            </div>
        </div>
    )
}

export default Display;