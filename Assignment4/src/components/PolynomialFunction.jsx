import { useState } from 'react';
import './style.css';

function PolynomialFunction() {
    const [coefficients, setCoefficients] = useState();
    const [exponents, setExponents] = useState();
    const [xValue, setX] = useState();
    const [functionResult, setFunction] = useState();
    const [evaluationResult, setEvaluation] = useState();
    const [errorText, setError] = useState();

    function polynomial(e) {
        e.preventDefault();
        let validInput = true;
        const coefficientsArray = coefficients.split(' ');
        const exponentsArray = exponents.split(' ');
        setError("");

        for (let i = 0; i < coefficientsArray.length; i++) {
            coefficientsArray[i] = parseFloat(coefficientsArray[i]);
            exponentsArray[i] = parseFloat(exponentsArray[i]);
            if (isNaN(coefficientsArray[i]) || isNaN(exponentsArray[i])) {
                validInput = false;
            }
        }
        if (isNaN(xValue)) {
            validInput = false;
        }
        let func = ["", 0];
        if (validInput) {
            for (let i = 0; i < coefficientsArray.length; i++) {
                switch (coefficientsArray[i]) {
                    case -1:
                        break;
                    case 0:
                    case 1:
                        break;
                    default:
                        func[0] += Math.abs(coefficientsArray[i]);
                }
                switch (exponentsArray[i]) {
                    case 0:
                        break;
                    case 1:
                        func[0] += (coefficientsArray[i] === 0) ? "" : "x";
                        break;
                    default:
                        func[0] += (coefficientsArray[i] === 0) ? "" : `x^${exponentsArray[i]}`;
                }
                if (i < coefficientsArray.length - 1) {
                    if (coefficientsArray[i] != 0 || i != 0) {
                        if (coefficientsArray[i + 1] > 0) {
                            func[0] += " + ";
                        } else if (coefficientsArray[i + 1] < 0) {
                            func[0] += " - ";
                        }
                    }
                }
                func[1] += coefficientsArray[i] * xValue ** exponentsArray[i];
            }
            func[1] = Math.round(func[1] * 100) / 100;
            setFunction(`f(x) = ${func[0]}`);
            setEvaluation(`f(${xValue}) = ${func[1]}`);
        } else {
            setError("please input numbers that make sense");
            setFunction("");
            setEvaluation("");
        }
    }

    return (
        <form onSubmit={(e) => polynomial(e)}>
            <div className="container">
                <div className="polynomial-function-section">
                    <h1>Polynomial Function</h1>
                    <h6>Coefficients:</h6>
                    <input type="text" value={coefficients} onChange={(event) => { setCoefficients(event.target.value) }} required />
                    <h6>Exponents:</h6>
                    <input type="text" value={exponents} onChange={(event) => { setExponents(event.target.value) }} required />
                    <h6>x value:</h6>
                    <input type="number" value={xValue} onChange={(event) => { setX(event.target.value) }} required />
                    <h6>Polynomial function:</h6>
                    <input type="text" value={functionResult} readOnly />
                    <h6>Polynomial evaluation:</h6>
                    <input type="text" value={evaluationResult} readOnly />
                    <h6 value={errorText}></h6>
                    <input type="submit" value="Calculate"></input>
                </div>
            </div>
        </form>
    )
}

export default PolynomialFunction;