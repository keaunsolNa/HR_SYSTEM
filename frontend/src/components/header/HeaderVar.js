
function HeaderVar(props) {

    const { isRootSelect, topViewClick, topViewDown, elementIndex, menuName } = props;
    return (
        <>
        <div className="TopNav">
            <li
                onClick={() => { isRootSelect ? topViewDown(elementIndex) : topViewClick(elementIndex)} }
                >
                {isRootSelect ? props.content : menuName[elementIndex]}
            </li>
            
        </div>
        </>
    );
}

export default HeaderVar;