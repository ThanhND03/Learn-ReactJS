import React, {useState} from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Test = () => {
    const [datas, setDatas] = useState([
        {id: 1, name: 'User1', age: 21, sdt:1234566666},
        {id: 2, name: 'User2', age: 20, sdt:1234568888},
        {id: 3, name: 'User3', age: 25, sdt:1234569999},
        {id: 4, name: 'User4', age: 19, sdt:1234560000},
    ]);
    
    const addData = (newData) => {
        setDatas(prev => [...prev, newData])
    }

    // const handleDelete = (userId) => {
    //     let datasClone = datas
    //     datasClone = datasClone.filter(item => item.id !== userId
    //     )
    //     console.log(datasClone)
    //     setDatas(datasClone)

    // }

    const handleDelete = (userKey) => {
        // let datasClone = datas;
        console.log({ datas, userKey });

        const datasClone = datas.filter(( item,index) => index !== userKey);
        console.log(datasClone);
        setDatas(datasClone);
    };

    

    return (
        <>  
            <Router>
                <ul>
                    <li><Link to='/' >ThongTin</Link></li>
                    <li><Link to='/them' >Them Moi</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<Comp1 datas={datas} handleDelete={handleDelete} />} />
                    <Route path='/them' element={<Comp2 onSubmit={addData} />} />
                </Routes>
            </Router>
        </>
    )
}

export default Test