
import { Navigate } from 'react-router-dom';
import AccountRegistForm from '../../components/form/CreateAccountForm';

function CreateAccount() {

    const loginStatus = !!localStorage.getItem('isLogin');
    if(!loginStatus) {
        return <Navigate to="/login" replace={ true }/>
    }

    return(
        <>  
            <h1 className='titleH'>신규 사원 계정 등록</h1>
            <AccountRegistForm/>
        </>
    );

}

export default CreateAccount;