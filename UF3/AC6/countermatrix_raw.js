// context para el color de fondo
const BgColorContext = React.createContext();

// context para valores distintos en fourcounter
const FourValueContext = React.createContext();

// context para el estado global del contador
const CounterContext = React.createContext();

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App />);

function App() {
    const bgColor = "red";
    const [count, setCount] = React.useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            <BgColorContext.Provider value={bgColor}>
                <FourValueContext.Provider value="A">
                    <FourCounter />
                </FourValueContext.Provider>
                <FourValueContext.Provider value="B">
                    <FourCounter />
                </FourValueContext.Provider>
            </BgColorContext.Provider>
        </CounterContext.Provider>
    );
}

function FourCounter() {
    const value = React.useContext(FourValueContext);

    return (
        <>
            <TwoCounter label={`${value}1`} />
            <TwoCounter label={`${value}2`} />
        </>
    );
}

function TwoCounter({ label }) {
    return (
        <>
            <Counter label={`${label}-a`} />
            <Counter label={`${label}-b`} />
        </>
    );
}

function Counter({ label }) {
    const bgColor = React.useContext(BgColorContext);
    const { count, setCount } = React.useContext(CounterContext);

    return (
        <div className="counter" style={{ backgroundColor: bgColor }}>
            <div className="count-display">{label}: {count}</div>
            <div className="button-container">
                <button onClick={() => setCount(count + 1)} className="button">+1</button>
                <button onClick={() => setCount(count - 1)} className="button">-1</button>
                <button onClick={() => setCount(0)} className="button">reset</button>
            </div>
        </div>
    );
}
