import React from 'react';


const AddRoles = ({ handleSubmit,handleCancel,handleInputChange,departments,permissions,operations,authority,department,role,className }) => {
    return(       
        <div>
            <form onSubmit={handleSubmit} name={className}> 
                <p>Department</p>
                <select name='department' value={department} onChange={handleInputChange}>
                    {departments.map(department => <option value={department}>{department}</option>)}
                </select>

                <p>Role</p>
                <input type="text" name="role" onChange={handleInputChange} value={role}/>

                <p>Permission</p>
                {permissions.map(permission => {
                    return (
                        <div>{permission.permissionName.map(item => {
                            return (
                                <div>
                                    <p>{item}</p>
                                    {operations.map(operation => <p><input type='checkbox' name='authority' value={item+'_'+operation} checked={authority.indexOf(item+'_'+operation)>-1} onChange={handleInputChange} />{operation}</p>)}
                                </div>
                            )
                        })}</div>
                    )
                
                })}

                <input type='submit' value='Save'/>
                <button onClick={handleCancel}>cancel</button>

            </form>
        </div>
    );
};
AddRoles.defaultProps = {
    departments:[],
    permissions:[],
    operations:[],
    authority:[],
    department:'',
    role:'',
}
export default AddRoles;