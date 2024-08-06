// import { useEffect, useState } from 'react';

// const MyComponent = ({ name }) => {
//     const [state, setState] = useState('Thanh');
//     const [inputText, setInputText] = useState('');
//     const [change, setChange] = useState(0);
//     const [check, setCheck] = useState(false);
//     // const state = {
//     //     name: name,
//     //     age: 20,
//     //     address: {
//     //         street: "abc",
//     //         city: "abc"
//     //     }
//     // }

//     const handleChange = (index) => {
//         let inputText = index.target.value;
//         // console.log(inputText)
//         setInputText(inputText);
//     };

//     const handleClick = () => {
//         setState(inputText);
//         // setChange(prev => prev + 1)
//         setInputText('');
//     };
//     console.log('log owr ngoai');

//     useEffect(() => {
//         console.log('log k phu thuoc');
//     }, []);
//     useEffect(() => {
//         // check && setChange(change + 1);
//         // setCheck(true);

//         // console.log(`gia tri change: ${change}`);
//         console.log('log phu thuoc');
//     }, [state]);

//     return (
//         <>
//             {/* <h1>My first component {Math.floor(Math.random() * (10 - 0 + 1)) + 1}</h1> */}
//             {/* <b>Name: {state.name}</b> */}
//             <b>Name: {state}</b> <br />
//             <b>Change:{change}</b>
//             <br />
//             <input type="text" value={inputText} onChange={handleChange}></input>;{console.log('vao trong comp')};
//             <button onClick={handleClick}>Click Me!</button>
//         </>
//     );
// };

// export default MyComponent;
// // khoi tao: comp1 ds hoc sinh {ten, tuoi, sdt}
// // comp2 : input type text dien 3 thogn tin ten, submit danh sach ban dau se them hsinh do vao
// // 1 button canh tung hoc sinh 1 owr comp1, nut de xoa, khi click xoa thi hsinh do se mat.

