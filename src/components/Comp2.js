import { useState } from "react"

const Comp2 = () => {

    const [inputName, setInputName] = useState('')
    const [inputAge, setInputAge] = useState('')
    const [inputSdt, setInputSdt] = useState('')

    const handleOnchangeName = (e) => {
        let inputText = e.target.value
        console.log(inputText)
        setInputName(inputText)
    }
    const handleOnchangeAge = (e) => {
        let inputText = e.target.value
        console.log(inputText)
        setInputAge(inputText)
    }
    const handleOnchangeSdt = (e) => {
        let inputText = e.target.value
        console.log(inputText)
        setInputSdt(inputText)
    }

    return (
        <div>
            <input type="text" placeholder="nhap name" value={inputName} onChange={handleOnchangeName} /> 
            <button onClick={() => setInputName(inputName)}>submit</button>
            <input type="text" placeholder="nhap age" value={inputAge} onChange={handleOnchangeAge} />
            <input type="text" placeholder="nhap sdt" value={inputSdt} onChange={handleOnchangeSdt}/>
        </div>
    )
}

export default Comp2