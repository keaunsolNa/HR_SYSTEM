import { NavLink } from 'react-router-dom';

function AuthorityManagement() {

    return (
        <>
            <h5>권한 관리</h5>
            <div className='MiddleNav'>
                <ul>
                    <li><NavLink to='/'>준비중</NavLink></li>
                    <li><NavLink to='/'>준비중</NavLink></li>
                    <li><NavLink to='/'>준비중</NavLink></li>
                    <li><NavLink to='/'>준비중</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default AuthorityManagement;