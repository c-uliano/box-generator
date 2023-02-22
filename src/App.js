import './App.css';
import Form from './components/Form';
import React, {useState} from 'react';
import Display from './components/Display';

function App() {
    const [colorList, setColorList] = useState([]);
    return (
        <div className='w-50 m-auto pt-4'>
            <h1>Box Generator</h1>
            <Form colorList={colorList} setColorList={setColorList} />
            <Display colorList={colorList} />
        </div>
    );
}

export default App;
