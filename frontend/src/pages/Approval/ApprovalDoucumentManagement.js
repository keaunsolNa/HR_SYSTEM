import { NavLink, useMatch } from 'react-router-dom';

import Attendance from './document/Attendance';
import Education from './document/Education';
import Outside from './document/Outside';
import Retirement from './document/Retirement';
import LeaveOfAbsence from './document/LeaveOfAbsence';

function ApprovalDoucumentManagement() {

    const selectValue = [
                            { id: 1, text: "근태 신청서", path: "/approval/approvalDocument/attendance", role:"ROLE_EMPLOYEE"},
                            { id: 2, text: "외근 신청서", path: "/approval/approvalDocument/outside", role:"ROLE_EMPLOYEE"},
                            { id: 3, text: "학습 신청서", path: "/approval/approvalDocument/education", role:"ROLE_EMPLOYEE"},
                            { id: 4, text: "휴직 신청서", path: "/approval/approvalDocument/leaveOfAbsence", role:"ROLE_EMPLOYEE"},
                            { id: 5, text: "퇴직 신청서", path: "/approval/approvalDocument/retirement", role:"ROLE_EMPLOYEE"},
                        ]

    const userRoleList = localStorage.getItem("Role");
    const match = useMatch("/:approval/approvalDocument/:documentType").params.documentType;


    return (
        <div className="approvalParentBox">
            
            <div className="approvalSideVar">
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
                
            <div className='approvalMainContent'>

            {match && 
                    match === "attendance" ? <Attendance /> : match === "outside" ? <Outside/> 
                    : match === "education" ? <Education/> : match === "retirement" ? <Retirement/> : <LeaveOfAbsence/>}

            </div>
        </div>
    );
}

export default ApprovalDoucumentManagement;