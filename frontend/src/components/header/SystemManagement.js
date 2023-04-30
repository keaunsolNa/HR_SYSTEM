import { NavLink } from 'react-router-dom';

function SystemManagement() {

    return (
        <>
            <h3>시스템 관리</h3>
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

export default SystemManagement;