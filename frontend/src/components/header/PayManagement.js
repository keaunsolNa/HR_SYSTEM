import { NavLink } from 'react-router-dom';

function PayManagement() {

    return (
        <>
            <h3>결재 관리</h3>
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

export default PayManagement;