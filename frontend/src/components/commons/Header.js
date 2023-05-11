import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetLoginUser } from "../../modules/userModules/UserLoginModule";

function Header() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.clear();
        dispatch(resetLoginUser());
        
        alert('로그아웃')
        window.location.replace("/");
    }

    return (
        <>
            <div className='Header'>
                <NavLink to='/'>
                    <>
                        <h3>HR-인사시스템</h3>
                        <div className='Logout'>

                            { !loginStatus ? 
                                (<NavLink to='user/login' className='isLogin'>로그인</NavLink>) : <h5 onClick={ logoutHandler }> <NavLink to='user/login'>로그아웃</NavLink></h5>
                            }
                        </div>
                    </>
                </NavLink>
            </div>
        </>
    );
}

export default Header;