import './App.css';
import Form from './components/Form';
import React, {useState} from 'react';
import Display from './components/Display';

function App() {
    /* 1/5 The list of colors is collected in Form and needs to be iterated through in Display. So it needs to be collected in the parent so the data can go downward 
    Hence the list being made here... */
    const [colorList, setColorList] = useState([]);

    return (
        <div className='w-50 m-auto pt-4'>
            <h1>Box Generator</h1>
            {/* 2/5 ...the states that Form need to use being passed passed in via props this way... */}
            <Form colorList={colorList} setColorList={setColorList} />
            {/* 3/5 ...and the states that Display needs passed in here (it's only display the list, it doesn't need setColorList) */}
            <Display colorList={colorList} />
        </div>
    );
}

export default App;
