import { useState } from 'react';
import './style.css';

function AmbiguousCase() {
    const [angleA, setA] = useState();
    const [a, setB] = useState();
    const [b, setC] = useState();
    const [result, setTri] = useState();
    const [errorText, setError] = useState();

    function ambiguous(e) {
        const radiansAngleA = angleA * Math.PI / 180;
        const h = b * (Math.sin(radiansAngleA));
        e.preventDefault();

        if (isNaN(angleA) || isNaN(a) || isNaN(b)) {
            setError("please enter a value in every text box");
            setTri("");
        } else {
            if (angleA > 180) {
                setError("please enter an angle below 180°");
                setTri("");
            } else if (angleA < 90) {
                if (a < h) {
                    setTri("no triangle");
                } else if (a == h) {
                    setTri("right triangle");
                } else {
                    if (a >= b) {
                        setTri("one triangle");
                    } else {
                        setTri("two triangles");
                    }
                }
                setError("");
            } else if (angleA > 90) {
                if (a <= b) {
                    setTri("no triangle");
                } else {
                    setTri("one triangle");
                }
                setError("");
            } else {
                setTri("right triangle");
                setError("");
            }
        }
    }

    return (
        <form onSubmit={(e) => ambiguous(e)}>
            <div class="container">
                <div class="ambiguous-case-section">
                    <h1>Ambiguous case</h1>
                    <h6>Angle A:</h6>
                    <input type="number" value={angleA} onChange={(event) => { setA(event.target.value) }} required />
                    <h6>Side b:</h6>
                    <input type="number" value={a} onChange={(event) => { setB(event.target.value) }} required />
                    <h6>Side c:</h6>
                    <input type="number" value={b} onChange={(event) => { setC(event.target.value) }} required />
                    <h6>Triangly type:</h6>
                    <input type="text" value={result} readonly />
                    <h6 value={errorText}></h6>
                    <input type="submit" value="Calculate"></input>
                </div>
            </div>
        </form>
    )
}

export default AmbiguousCase;