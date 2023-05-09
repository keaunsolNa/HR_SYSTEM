import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchTempUser } from "../../api/AccountAPICalls";
import Board from "../Table/Employee/Board"
import UserItem from '../../components/items/userItem';

function TempAccountList() {
    const result = useSelector(state => state.accountReducer);
    
    const userList = result.searchUser;

    const dispatch = useDispatch();
    
    const [searchValue, setSearchValue] = useState(
        {
            empName: ''
        }
    );

    let name = ''
    let value = ''

    const onChangeHandler = (e) => {

        name  = e.target.name;
        value = e.target.value;

        setSearchValue((prevSearchValue) => {
            return {
                ...prevSearchValue,
                [name ]: value,
            };
        });
        dispatchHandler();
    }

    const dispatchHandler = async() => {

        const updateSeacrhValue = {
            ...searchValue,
            [name]: value,
        };
    
        dispatch(searchTempUser(updateSeacrhValue));
    }

    useEffect(
        () => {
            dispatch(searchTempUser(searchValue));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    
    console.log(userList)
    return (
        userList && (
            <div className='MainBox'>
                <div className='searchBox'>
                    <label>검색 (이름) : </label>
                    <input type="text" name="empName" value={ searchValue.empName } onChange={ onChangeHandler }/>
                </div>
                <div className='Table'>
                    <Board info={userList.map(emp => <UserItem key={ emp.empId } emp={ emp }/>) } />
                </div>
            </div>
        )
    );
}

export default TempAccountList;