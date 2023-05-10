import { useState } from 'react';
import HeaderVar from '../header/HeaderVar';
import EmployManagement from '../header/EmployManagement';
import ApprovalManagement from '../header/ApprovalManagement';
import PayManagement from '../header/PayManagement';
import AuthorityManagement from '../header/AuthorityManagement';
import SystemManagement from '../header/SystemManagement';

function Navbar() {

    const [isRootSelect, setIsRootSelect] = useState(false);
    const selectValue = [<EmployManagement/>, <ApprovalManagement/>, <PayManagement/>, <AuthorityManagement/>, <SystemManagement/>];
    const menuName = ['계정 관리', '결재 관리', '급여 관리', '권한 관리', '시스템 관리']
    const newArr = Array(selectValue.length).fill(false);
 
    const topViewClick = (idx) => {
        newArr[idx] = true;
        setIsRootSelect(newArr);
    };

    const topViewDown = (idx) => {
        newArr[idx] = false;
        setIsRootSelect(newArr);
    }
 
    return (
        <div className='navbarDiv'>

            {selectValue.map((element, index) => {
                return (
                    <HeaderVar
                        key={index}
                        isRootSelect={isRootSelect[index]}
                        topViewClick={topViewClick}
                        topViewDown={topViewDown}
                        elementIndex={index}
                        content={element}
                        menuName = {menuName}
                        newArr = {newArr}
                    />
                );
            })}
        </div>
    );
}

export default Navbar;