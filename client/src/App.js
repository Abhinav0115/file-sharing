import "./App.css";
import Left from "./components/Left_Side";

import Right from "./components/Right_side";

function App() {
    return (
        <div className="bg-black flex max-md:flex-col h-[100vh] w-[100vw] overflow-hidden">
            <Left />
            <Right />
        </div>
    );
}

export default App;
