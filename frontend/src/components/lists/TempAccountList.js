import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchTempUser } from "../../api/AccountAPICalls";

import UserItem from '../../components/items/userItem';

function TempAccountList() {
    const result = useSelector(state => state.accountReducer);
    
    const userList = result.searchUser;

    const dispatch = useDispatch();
    
    const [searchValue, setSearchValue] = useState(
        {
            empName: '%'
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
        []
    );
    
    return (
        userList && (
            <div>
                <input type="text" name="empName" value={ searchValue.empName } onChange={ onChangeHandler }/>
                <div className="accountBox">
                    <table>
                        <thead> 
                            <tr>
                                { userList.map(emp => <UserItem key={ emp.empId } emp={ emp }/>) }
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    );
}

export default TempAccountList;