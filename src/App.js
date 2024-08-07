import { useState } from 'react';
import './App.css';
import Test from './components/Test';
const App = () => {
    // // comp1
    // const [name, setName] = useState('adf');
    // const [age, setAge] = useState('');
    // const [sdt, setSdt] = useState('');

    // const [inputName, setInputName] = useState('');
    // const [inputAge, setInputAge] = useState('');
    // const [inputSdt, setInputSdt] = useState('');
    // // comp2
    // const handleOnchangeName = (e) => {
    //     let inputText = e.target.value;
    //     setInputName(inputText);
    // };
    // const handleOnchangeAge = (e) => {
    //     let inputText = e.target.value;
    //     setInputAge(inputText);
    // };
    // const handleOnchangeSdt = (e) => {
    //     let inputText = e.target.value;
    //     setInputSdt(inputText);
    // };

    // const clearName = () => setName('');
    // const clearAge = () => setAge('');
    // const clearSdt = () => setSdt('');

    const [datas, setDatas] = useState([
        { id: 1, name: "User", age: 20 },
        { id: 2, name: "User2", age: 21 },
        { id: 3, name: "User3", age: 22 },
        { id: 4, name: "User4", age: 23 }
    ])

    // const [minAge, setMinAge] = useState(0)

    const filterAge = (minAge) => {
        return datas.filter(data => data.age >= minAge)
    }

    // const handleFilter = (newAge) => {
    //     setMinAge(newAge)
    // }
    const handleFilter = () => {
        const filterUser = filterAge(21)
        setDatas(filterUser)
    }
    return (
        <div className="App">            
            {/* <Test/> */}
            <button onClick={handleFilter} >age</button>
            <ul>
                {datas.map((data, index)=>{
                    return (
                        <div key={index} >
                            <li>{data.id}----{data.name}----{data.age}</li> 
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export default App;
