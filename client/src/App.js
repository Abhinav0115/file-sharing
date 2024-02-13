import "./App.css";
import Left from "./components/Left_Side";

import Right from "./components/Right_side";

function App() {
    return (
        <div className="bg-gradient-to-r from-slate-700 to-neutral-600 flex max-md:flex-col h-[100vh] w-[100vw] overflow-hidden object-cover">
            <Left />
            <Right />
        </div>
    );
}

export default App;
