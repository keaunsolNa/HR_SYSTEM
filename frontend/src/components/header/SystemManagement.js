import { NavLink } from 'react-router-dom';

function SystemManagement() {

    const selectValue = [
                            { id: 1, text: "준비 중1", path: "/system/temp1"},
                            { id: 2, text: "준비 중2", path: "/system/temp2"},
                            { id: 3, text: "준비 중3", path: "/system/temp3"},
                            { id: 4, text: "준비 중4", path: "/system/temp4"}
                        ];


    return (
        <div className='mainFrame'>
            <h3>시스템 관리</h3>
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
}

export default SystemManagement;