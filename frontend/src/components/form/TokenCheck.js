import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { callGetUserId } from '../../api/UserAPICalls';

function TokenCheck() {
    const result = useSelector(state => state.userReducer);

    const userId = result.loginUser;
    
    const dispatch = useDispatch();

    console.log(userId)
    const [jwtAuthToken] = useState(
        {
            jwtAuthToken: localStorage.getItem("jwtAuthToken"),
        }
    );


    useEffect(
        () => {
            dispatch(callGetUserId(jwtAuthToken));
        },
        []
    );

    return (
        <>
        </>
    );
}

export default TokenCheck;