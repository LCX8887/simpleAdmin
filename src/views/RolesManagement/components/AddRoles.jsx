import React from 'react';


const AddRoles = ({ handleSubmit,handleCancel,handleInputChange,departments,permissions,operations,authority,department,role,className }) => {
    return(       
        <div>
            <form onSubmit={handleSubmit} className={className}>
                <div> 
                    <p>Department</p>
                    <select name='department' value={department} onChange={handleInputChange}>
                        {departments.map((department,index) => <option key={index} value={department}>{department}</option>)}
                    </select>
                </div>
                <div>
                    <p>Role</p>
                    <input type="text" name="role" onChange={handleInputChange} value={role}/>
                </div>
                <div id='checkBox'>
                    <p>Permission</p>
                    <div>
                        {permissions.map(permission => {
                            return (
                                <div>{permission.permissionName.map((item,index) => {
                                    return (
                                        <div key={index}>
                                            <p>{item}</p>
                                            {operations.map((operation,index) => <p key={index}><input type='checkbox' name='authority' value={item+'_'+operation} checked={authority.indexOf(item+'_'+operation)>-1} onChange={handleInputChange} />{operation}</p>)}
                                        </div>
                                    )
                                })}</div>
                            )
                        
                        })}
                    </div>
                </div>
                <div id='buttonGroup'>
                    <input type='submit' value='Save'/>
                    <button onClick={handleCancel}>cancel</button>
                </div>

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