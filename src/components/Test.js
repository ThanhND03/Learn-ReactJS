import React, {useState} from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Test = () => {
    const [datas, setDatas] = useState([
        {name: 'User1', age: 21, sdt:1234566666},
        {name: 'User2', age: 20, sdt:1234568888},
        {name: 'User3', age: 25, sdt:1234569999},
        {name: 'User4', age: 19, sdt:1234560000},
    ]);
    
    const addData = (newData) => {
        setDatas(prev => [...prev, newData])
    }

    return (
        <>  
            <Router>
                <ul>
                    <li><Link to='/' >ThongTin</Link></li>
                    <li><Link to='/them' >Them Moi</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<Comp1 datas={datas} />} />
                    <Route path='/them' element={<Comp2 onSubmit={addData} />} />
                </Routes>
            </Router>
        </>
    )
}

export default Test