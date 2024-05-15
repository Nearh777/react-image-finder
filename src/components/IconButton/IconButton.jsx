import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({children=null, onClick= () => null, ...allyProps}) => (
    <button type="button"  onClick={onClick} {...allyProps}>
        {children}
    </button>
);


// IconButton.defaultProps = {
//     onClick: () => null,
//     children: null,
//     'aria-label': 'Search images'
// };

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    
};



export default IconButton;