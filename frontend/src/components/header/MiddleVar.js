import { useState } from 'react'

function MiddleVar(props) {

    const { isRootSelect, topViewClick, elementIndex, menuName } = props;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
        <div className={isHovering ? "hovering" : "MiddleNav"}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
        >
            <li
                onClick={() => topViewClick(elementIndex)}
            >
                {isRootSelect ? props.content : menuName[elementIndex]}
            </li>
            
        </div>
    );
}

export default MiddleVar;