const Td = ({item}) => {

    const gender = item.genderCd === 'M' ? '남' : '여';
    const hireCd = item.hireCd === '100' ? '정규직 신입' : item.hireCd === '200' ? '정규직 경력' : item.hireCd === '300' ? '인턴'
                 : item.hireCd === '400' ? '계약직' : '외부파견인재';

    return (
        <>
            <tr className="Tr">
                <td>{item.empId}</td>
                <td>{item.empName}</td>
                <td>{gender}</td>
                <td>{hireCd}</td>
                <td>{item.password}</td>
            </tr>
        </>
    )
};

export default Td;