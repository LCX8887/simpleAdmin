import React from 'react';

const ButtonGroup = ({ buttonGroup,handleAdd,handleEdit,handleSubmit,handleCancel }) => {
    return(
        <div>
            {buttonGroup.map()}
        </div>
    );
};
ButtonGroup.defaultProps = {
   
 }
export default ButtonGroup;