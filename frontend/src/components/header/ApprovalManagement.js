import { NavLink } from 'react-router-dom';

function ApprovalManagement() {

    const selectValue = [
                            { id: 1, text: "결재함 관리", path: "/approval/approvalBox"},
                            { id: 2, text: "결재 라인 관리", path: "/approval/approvalLine"},
                            { id: 3, text: "결재 문서 관리", path: "/approval/approvalDocument"},
                            { id: 4, text: "결재 상태 관리", path: "/approval/approvalState"}
                        ];
    
    return (
        <div>
            <h3>결재 관리</h3>
            {selectValue.map((link) => {
                const { id, text, path } = link;
                
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

    // return (
    //     <div className='MiddleNav'>

    //         {selectValue.map((element, index) => {
    //             return (
    //                 <MiddleVar
    //                     key={index}
    //                     isRootSelect={isRootSelect[index]}
    //                     topViewClick={topViewClick}
    //                     elementIndex={index}
    //                     content={element}
    //                     menuName = {menuName}
    //                 />
    //             );
    //         })}
    //     </div>
    // );
}

export default ApprovalManagement;