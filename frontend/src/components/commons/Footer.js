import { NavLink } from 'react-router-dom';
import logo from "../../asserts/Linux.png"
function Footer() {

    return (
        <>
            <div className='BottomLogo'>
                <NavLink to='/'>
                    <>
                        <div className='inline-block'>
                            <img src={logo} alt=""></img> 
                        </div>
                        <div className='inline-block vertical-align'>
                            <h3>copyrightⓒ 2023 All rights reserved by XX</h3>
                        </div>
                    </>
                </NavLink>
            </div>
        </>
    );
}

export default Footer;