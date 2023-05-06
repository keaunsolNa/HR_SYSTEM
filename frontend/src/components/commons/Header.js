import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetLoginUser } from "../../modules/userModules/UserLoginModule";
import logo from "../../asserts/Linux.png"
function Header() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('jwtAuthToken');
        dispatch(resetLoginUser());
        alert('로그아웃')
        window.location.replace("/");
    }

    return (
        <>
            <div className='HeaderLogo'>
                <NavLink to='/'>
                    <>
                        <div className='inline-block'>
                            <img src={logo} alt=""></img> 
                        </div>
                        <div className='inline-block vertical-align'>
                            <h3>HR-인사시스템</h3>
                        </div>

                        { !loginStatus ? 
                            (
                                <NavLink to='user/login'>로그인</NavLink>
                            ) : (
                                <h5 onClick={ logoutHandler }> <NavLink to='user/login'>로그아웃</NavLink></h5>
                            )
                        }
                    </>
                </NavLink>
            </div>
        </>
    );
}

export default Header;