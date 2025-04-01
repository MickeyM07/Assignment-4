import './App.css'
import AmbiguousCase from './components/AmbiguousCase.jsx';
import HeronsFomula from './components/HeronsFormula.jsx';
import NewtonsMethod from './components/NewtonsMethod.jsx';
import PolynomialFunction from './components/PolynomialFunction.jsx';

function App() {
  return (
    <div className="functions">
      <HeronsFomula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  );
}

export default App;