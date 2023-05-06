import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Tr from './Tr';

const Board = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, SetModalOn] = useState(false);

    const nextId = useRef(11);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setInfo(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleSave = (data) => {

        if(data.id){
            setInfo(
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    name : data.name,
                    email : data.email,
                } : row)
            )
        }

        else {

            setInfo(info => info.concat(
                {
                    id : nextId.current,
                    name : data.name,
                    email : data.email,
                }
            ))
            nextId.current += 1;
        }
    }

    const handleRemove = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = (item) => {
        SetModalOn(true);
        const selectedData = {
            id : item.id,
            name : item.name,
            email : item.email,
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    const handleCancel = () => {
        SetModalOn(false);
    };

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        SetModalOn(false)
    };

    return (
        <div>
            <div>고객 정보 리스트</div>
            <table>
                <thead>
                    <tr>
                        <th>Id.</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <Tr info={info} handleRemove = {handleRemove} handleEdit={handleEdit}/>
            </table>
        </div>
    );
};

export default Board;