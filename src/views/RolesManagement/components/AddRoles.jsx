import React from 'react';


const AddRoles = ({ handleSubmit,handleInputChange,departments,permissions,operations }) => {
    return(       
        <div>
            <form onSubmit={handleSubmit}> 
                <p>Department</p>
                <select name='department' onChange={handleInputChange}>
                    {departments.map(department => <option value={department}>{department}</option>)}
                </select>
                <p>Role</p>
                <input type="text" name="role" onChange={handleInputChange}/>
                <p>Permission</p>
                {permissions.map(permission => {
                    return (
                        <div>{permission.permissionName.map(item => {
                            return (
                                <div>
                                    <p>{item}</p>
                                    {operations.map(operation => <p><input type='checkbox' name='authority' value={item+'_'+operation} onChange={handleInputChange} />{operation}</p>)}
                                </div>
                            )
                        })}</div>
                    )
                
                })}
                <input type='submit' value='Save'/>
            </form>
        </div>
    );
};
AddRoles.defaultProps = {
   
}
export default AddRoles;