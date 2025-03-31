import { useState } from 'react';
import './style.css';

function HeronsFormula() {
    const [a, setA] = useState();
    const [b, setB] = useState();
    const [c, setC] = useState();
    const [result, setArea] = useState();
    const [errorText, setError] = useState();

    function heron(e) {
        e.preventDefault();
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            if (a > 0 && b > 0 && c > 0) {
                if (valueInRoot > 0) {
                    setArea(Math.round(Math.sqrt((4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2)) / 4 * 100) / 100);
                    setError("");
                } else {
                    setError("the length of each side must be smaller than the sum of the two others");
                    setArea("");
                }
            } else {
                setError("please enter positive numbers only");
                setArea("");
            }
        } else {
            setError("please enter a value in all text boxes");
            setArea("");
        }
        
    }

    return (
        <form onSubmit={(e) => heron(e)}>
            <div class="container">
                <div class="herons-formula-section">
                    <h1>Heron's Formula</h1>
                    <h6>Side a:</h6>
                    <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
                    <h6>Side b:</h6>
                    <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />
                    <h6>Side c:</h6>
                    <input type="number" value={c} onChange={(event) => { setC(event.target.value) }} required />
                    <h6>Area:</h6>
                    <input type="text" value={result} readonly />
                    <h6 value={errorText}></h6>
                    <input type="submit" value="Calculate"></input>
                </div>
            </div>
        </form>
    )
}

export default HeronsFormula;