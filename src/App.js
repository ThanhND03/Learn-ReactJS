import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import MyComponent from './components/MyComponent';
const App = ({setName, setAge, setSdt}) => {

    return (
        <div className="App">
            {/* <MyComponent name="User" /> */}
            <Comp1 setName={setName} setAge={setAge} setSdt={setSdt} />
            <Comp2/>
        </div>
    );
};

export default App;
