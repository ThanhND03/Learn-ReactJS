import { useState } from "react";

const Comp2 = ({onSubmit}) => {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputSdt, setInputSdt] = useState('');

    const handleOnchangeName = (e) => {
        let inputText = e.target.value;
        setInputName(inputText);
    };

    const handleOnchangeAge = (e) => {
        let inputText = e.target.value;
        setInputAge(inputText);
    };

    const handleOnchangeSdt = (e) => {
        let inputText = e.target.value;
        setInputSdt(inputText);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Cập nhật state `data` với dữ liệu mới
        onSubmit({ name: inputName, age: inputAge, sdt: inputSdt });
        // Reset các giá trị của input
        setInputName('');
        setInputAge('');
        setInputSdt('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nhap ten"
                    value={inputName} 
                    onChange={handleOnchangeName}   
                />
                <input 
                    type="number" 
                    placeholder="Nhap tuoi" 
                    value={inputAge} 
                    onChange={handleOnchangeAge}
                />
                <input 
                    type="number" 
                    placeholder="Nhap sdt" 
                    value={inputSdt} 
                    onChange={handleOnchangeSdt}
                />
                <button type="submit">Them</button>
            </form>
        </>
    );
};

export default Comp2;
