import Td from './Td';

const Tr = ({info}) => {
    
    return (
        
        <tbody>
            {
                info.map(item => {
                    return (
                        <Td key={item.props.emp.empId} item={item.props.emp} />
                    )
                })
            }
        </tbody>
    );
};

export default Tr;