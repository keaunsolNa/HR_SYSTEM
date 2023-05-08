import UpdateAccountForm from "../../components/form/UpdateAccountForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetUser } from "../../api/AccountAPICalls"

function UpdateAccount() {

    const userId = localStorage.getItem('jwtAuthToken');

    const result = useSelector(state => state.accountReducer);
    const user = result.getUser;

    const dispatch = useDispatch();

    useEffect(
        () => {

            dispatch(callGetUser(userId));
        },
        []
    );

    return (
        <>
            <h1 className='titleH'>사원 계정 수정</h1>
            
            <UpdateAccountForm data={ user }/>
        </>
    );
}

export default UpdateAccount;