import { useState } from 'react';
import './style.css';

function NetwonsMethod() {
    const [g, setGuess] = useState();
    const [result, setResult] = useState();
    const [errorText, setError] = useState();

    function newton(e) {
        e.preventDefault();
        if (isNaN(g)) {
            setResult("");
            setError("please enter a value in the root guess text box");
        } else {
            const func = (guess) => {
                return 6 * guess ** 4 - 13 * guess ** 3 - 18 * guess ** 2 + 7 * guess + 6;
            }
            const derivative = (guess) => {
                return 24 * guess ** 3 - 39 * guess ** 2 - 36 * guess + 7;
            }
            let ans1 = g;
            let ans2 = ans1 - func(ans1) / derivative(ans1);
            while (Math.abs(ans2 - ans1) > 0.0001) {
                ans1 = ans2;
                ans2 = ans1 - func(ans1) / derivative(ans1);
            }
            setError("");
            setResult(Math.round(ans2 * 100) / 100);
        }
    }

    return (
        <form onSubmit={(e) => newton(e)}>
            <div className="container">
                <div className="newtons-method-section">
                    <h1>Newton's Method</h1>
                    <h6>Root guess:</h6>
                    <input type="number" value={g} onChange={(event) => { setGuess(event.target.value) }} required />
                    <h6>Root approximation:</h6>
                    <input type="text" value={result} readOnly />
                    <h6 value={errorText}></h6>
                    <input type="submit" value="Calculate"></input>
                </div>
            </div>
        </form>
    )
}

export default NetwonsMethod;