import React from 'react';
import styles from './Form.module.css';


const Display = (props) => {
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

export default Display