import { NavLink } from 'react-router-dom';

function ApprovalManagement() {

    const selectValue = [
                            { id: 1, text: "결재함 관리", path: "/approval/approvalBox", role:'ROLE_EMPLOYEE'},
                            { id: 2, text: "결재 라인 관리", path: "/approval/approvalLine", role:'ROLE_EMPLOYEE'},
                            { id: 3, text: "결재 문서 관리", path: "/approval/approvalDocument", role:'ROLE_EMPLOYEE'},
                            { id: 4, text: "결재 상태 관리", path: "/approval/approvalState", role:'ROLE_EMPLOYEE'}
                        ];
    
    const userRoleList = localStorage.getItem("Role");

    return (
        <div className='mainFrame'>
            <h3>결재 관리</h3>
            
            {selectValue.map((link) => {
                const { id, text, path, role } = link;

                if(userRoleList.indexOf({role}.role) === -1) {
                    return <div key={id}></div>
                }
                
                return (
                    <div className='BottomNav' key={id}>
                    <NavLink
                        key={id}
                        to={path}
                        >
                        <span>{text}</span>
                    </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default ApprovalManagement;