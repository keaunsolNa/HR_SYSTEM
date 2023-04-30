import { NavLink } from 'react-router-dom';
import logo from "../../asserts/Linux.png"
function Header() {

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
                    </>
                </NavLink>
            </div>
        </>
    );
}

export default Header;