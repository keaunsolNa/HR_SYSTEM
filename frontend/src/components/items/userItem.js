function MenuItem({ emp }) {

    return (
            <>
                <td>
                        `{emp.empId}` 
                </td>
                <td>
                        `{emp.password}`
                </td>
                <td>
                        `{emp.empName}`
                </td>
            </>
    );
}

export default MenuItem;
