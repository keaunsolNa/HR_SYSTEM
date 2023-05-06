import { NavLink } from 'react-router-dom';

function EmployManagement() {

    const selectValue = [
                            { id: 1, text: "계정 생성", path: "/account/create"},
                            { id: 2, text: "임시 계정", path: "/account/temp"},
                            { id: 3, text: "계정 수정", path: "/account/update"},
                            { id: 4, text: "계정 삭제", path: "/account/delete"}
                        ];

    return (
        <div className='mainFrame'>
            <h3>계정 관리</h3>

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

export default EmployManagement;