const Comp1 = ({ datas, setDatas, handleDelete }) => {
    // console.log(datas)
    // console.table(datas)

    // const [showHide, setShowHide] = useState(false)
    // const [changText, setChangeText] = useState('Show Item')
    // const handleClick = () => {
    //     setShowHide(!showHide)
    //     setChangeText(!showHide ? 'Hide Item' : 'Show Item')
    // }

    
    return (
        <div className="comp1">
            {/* <div className="btn-show" onClick={handleClick} >{changText}</div> */}
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ten</th>
                        <th>Tuoi</th>
                        <th>SDT</th>
                        <th>Xoa</th>
                    </tr>
                </thead>
                {/* { showHide &&  */}
                <tbody>
                    {datas.map((data, index) => {
                        // Xoá bằng data.id

                        // return (
                        //     <tr key={data.id} >
                        //         <th>{index + 1}</th>
                        //         <th className={ data.age >= 20 ? 'green' : 'red' }>
                        //             {data.name}
                        //         </th>
                        //         <th>{data.age}</th>
                        //         <th>{data.sdt}</th>
                        //         <th><button onClick={() => handleDelete(data.id)} >X</button></th>
                        //     </tr>
                        // )

                        // Xóa bằng key={index}
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th className={data.age >= 20 ? 'green' : 'red'}>{data.name}</th>
                                <th>{data.age}</th>
                                <th>{data.sdt}</th>
                                <th>
                                    <button onClick={() => handleDelete(index)}>X</button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
                {/* } */}
            </table>
        </div>
    );
};

export default Comp1;
