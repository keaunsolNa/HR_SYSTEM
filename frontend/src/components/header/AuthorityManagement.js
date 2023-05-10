import { NavLink } from 'react-router-dom';

function AuthorityManagement() {

    const selectValue = [
                            { id: 1, text: "준비 중1", path: "/authority/temp1", role:'ROLE_ADMIN_SEC'},
                            { id: 2, text: "준비 중2", path: "/authority/temp2", role:'ROLE_ADMIN_SEC'},
                            { id: 3, text: "준비 중3", path: "/authority/temp3", role:'ROLE_ADMIN_SEC'},
                            { id: 4, text: "준비 중4", path: "/authority/temp4", role:'ROLE_ADMIN_SEC'}
                        ];

    const userRoleList = localStorage.getItem("Role");
    
    return (
        <div className='mainFrame'>
            <h3>권한 관리</h3>
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

export default AuthorityManagement;