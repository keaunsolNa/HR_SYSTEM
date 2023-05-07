import Tr from './Tr';

const Board = (item) => {

    return (
        <div>
            <div className='Title'>임시 계정 리스트</div>
            <table className='Table'>
                <thead className='Thead'>
                    <tr >
                        <th>ID</th>
                        <th>이름</th>
                        <th>입사구분</th>
                        <th>성별</th>
                        <th>임시 비밀번호</th>
                    </tr>
                </thead>
                <Tr info={item.info} key={item.info.empId}/>
            </table>
        </div>
    );
};

export default Board;