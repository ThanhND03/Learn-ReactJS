import { useState } from "react"

const Comp1 = () => {
    
    const [name,setName]= useState('')
    const [age,setAge]= useState('')
    const [sdt,setSdt]= useState('')

    return (
        <div>
            name: {name} <br />
            age: {age} <br />
            sdt: {sdt} <br />
        </div>
    )
}

export default Comp1