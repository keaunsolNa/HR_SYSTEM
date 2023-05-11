import { NavLink } from 'react-router-dom';
function Footer() {

    return (
        <>
            <div className='BottomLogo'>
                <NavLink to='/'>
                    <>
                        <div>
                            <h3>copyrightⓒ 2023 All rights reserved by XX</h3>
                        </div>
                    </>
                </NavLink>
            </div>
        </>
    );
}

export default Footer;