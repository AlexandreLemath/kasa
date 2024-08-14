import React, { useState } from 'react';
import '../styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Collapse = ({ title, children }) => {

    const [isOpen , setIsOpen] = useState(false) ; 
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`collapse ${isOpen ? 'open' : ''}` }>
            <div className="collapse-title"     >
            {title}
            <FontAwesomeIcon className={`collapse-icon ${isOpen ? 'rotate' : ''}`} icon={faChevronDown} onClick={toggleCollapse} />

            </div>
            <div className="collapse-content">
                {children}
            </div>
        </div>
    );
};

export default Collapse;
