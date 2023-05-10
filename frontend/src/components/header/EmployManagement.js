import { NavLink } from 'react-router-dom';

function EmployManagement() {

    const selectValue = [
                            { id: 1, text: "계정 생성", path: "/account/create", role:'ROLE_ADMIN_HR'},
                            { id: 2, text: "임시 계정", path: "/account/temp", role:'ROLE_ADMIN_HR'},
                            { id: 3, text: "계정 수정", path: "/account/update", role:'ROLE_EMPLOYEE'},
                            { id: 4, text: "계정 삭제", path: "/account/delete", role:'ROLE_EMPLOYEE'}
                        ];


    const userRoleList = localStorage.getItem("Role");

    return (
        <div className='mainFrame'>
            <h3>계정 관리</h3>

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

export default EmployManagement;