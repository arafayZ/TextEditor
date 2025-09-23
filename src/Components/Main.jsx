import React, { useState } from 'react';

    const Main = () => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    const handleConvert = () => {
        setText(text.toUpperCase());
    };

    const handleCountWords = () => {
        const words = text.trim().split(/\s+/);
        const count = text.trim() === '' ? 0 : words.length;
        setWordCount(count);
    };

    const handleCountChar = () => {
    const count = text.replace(/\s/g, '').length;
    setCharCount(count);
    };

    const handleChange = (e) => {
        setText(e.target.value);
        setWordCount(0);
        setCharCount(0);
    };

    return (
        <div className="container my-3">
            <div className="mb-3">
                <h3>Enter your text</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange}></textarea>
            </div>
            <button type="button" className="btn btn-secondary me-2" onClick={handleConvert}>Convert to Uppercase</button>
            <button type="button" className="btn btn-secondary me-2" onClick={handleCountWords}>Count Words</button>
            <button type="button" className="btn btn-secondary" onClick={handleCountChar}>Count Characters</button>

            {wordCount > 0 && (
                <div className="mt-3">Word Count:{wordCount}</div>
            )}

            {charCount > 0 && (
                <div className="mt-3">Character Count:{charCount}</div>
            )}
        </div>
    );
};

export default Main;