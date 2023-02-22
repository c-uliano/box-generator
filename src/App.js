import './App.css';
import Form from './components/Form';
import React, {useState} from 'react';

function App() {
    return (
        <div className='w-50 m-auto pt-4'>
            <h1>Box Generator</h1>
            <Form />
        </div>
    );
}

export default App;
