import React from 'react';

const ButtonGroup = ({ buttonGroup,andOrEdit,handleAdd,handleEdit,handleSubmit,handleCancel }) => {
    return(
        <div id='ButtonGroup'>
           <button onClick= {andOrEdit? handleAdd:handleSubmit}>{buttonGroup[0]}</button>
           <button onClick= {andOrEdit? handleEdit:handleCancel}>{buttonGroup[1]}</button>
        </div>
    );
};
ButtonGroup.defaultProps = {
   
 }
export default ButtonGroup;