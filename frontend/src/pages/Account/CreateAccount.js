import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { callGetUserId } from "../../api/UserAPICalls";
import AccountRegistForm from '../../components/form/CreateAccountForm';

function CreateAccount() {

    const userId = localStorage.getItem('jwtAuthToken');

    const dispatch = useDispatch();

    useEffect(
        () => {

            dispatch(callGetUserId(userId));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return(
        <>  
            <h1 className='titleH'>신규 사원 계정 등록</h1>
            <AccountRegistForm/>
        </>
    );

}

export default CreateAccount;