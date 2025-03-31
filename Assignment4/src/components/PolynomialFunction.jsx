import { useState } from 'react';
import './style.css';

function PolynomialFunction() {
    const [coefficients, setCoefficients] = useState();
    const [exponents, setExponents] = useState();
    const [xvalue, setX] = useState();
    const [functionResult, setFunction] = useState();
    const [evaluationResult, setEvaluation] = useState();
    const [errorText, setError] = useState();

    function polynomial(e) {
        e.preventDefault();
        let validInput = true;
        setError("");

        for (let i = 0; i < coefficients.length; i++) {
            coefficients[i] = parseFloat(coefficients[i]);
            exponents[i] = parseFloat(exponents[i]);
            if (isNaN(coefficients[i]) || isNaN(exponents[i])) {
                validInput = false;
            }
        }
        if (isNaN(xvalue)) {
            validInput = false;
        }
        let func = ["", 0];
        if (validInput) {
            for (let i = 0; i < coefficients.length; i++) {
                switch (coefficients[i]) {
                    case -1:
                        break;
                    case 0:
                        break;
                    case 1:
                        break;
                    default:
                        func[0] += Math.abs(coefficients[i]);
                }
                switch (exponents[i]) {
                    case 0:
                        break;
                    case 1:
                        func[0] += (coefficients[i] === 0) ? "" : "x";
                        break;
                    default:
                        func[0] += (coefficients[i] === 0) ? "" : `x^${exponents[i]}`;
                }
                if (i < coefficients.length - 1) {
                    if (coefficicents[i] != 0 || i != 0) {
                        if (coefficients[i + 1] > 0) {
                            func[0] += " + ";
                        } else if (coefficients[i + 1] < 0) {
                            func[0] += " - ";
                        }
                    }
                }
                func[1] += coefficients[i] * xvalue ** exponents[i];
            }
            func[1] = Math.round(func[1] * 100) / 100;
            setFunction(`f(x) = ${func[0]}`);
            setEvaluation(`f(${xvalue}) = ${func[1]}`);
        } else {
            setError("please input numbers that make sense");
            setFunction("");
            setEvaluation("");
        }
    }

    return (
        <form onSubmit={(e) => polynomial(e)}>
            <div class="container">
                <div class="polynomial-function-section">
                    <h1>Polynomial Function</h1>
                    <h6>Coefficients:</h6>
                    <input type="number" value={angleA} onChange={(event) => { setCoefficients(event.target.value) }} required />
                    <h6>Exponents:</h6>
                    <input type="number" value={a} onChange={(event) => { setExponents(event.target.value) }} required />
                    <h6>x value:</h6>
                    <input type="number" value={b} onChange={(event) => { setX(event.target.value) }} required />
                    <h6>Polynomial function:</h6>
                    <input type="text" value={functionResult} readonly />
                    <h6>Polynomial evaluation:</h6>
                    <input type="text" value={evaluationResult} readonly />
                    <h6 value={errorText}></h6>
                    <input type="submit" value="Calculate"></input>
                </div>
            </div>
        </form>
    )
}

export default PolynomialFunction;