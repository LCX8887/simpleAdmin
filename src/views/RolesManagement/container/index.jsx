import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRolesDetails,editRolesDetails,deleteRolesDetails } from '../flow/actions';

class RolesManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments:['Warehoues','Back Office','Operation'],
            permissions:[{'permissionClass':'Administration','permissionName':['Administration','Roles','Add Users']},
                        {'permissionClass':'Client','permissionName':['Client','Accounts','Sub Accounts','Leads']},
                        {'permissionClass':'Task','permissionName':['Task','Affiliate','Document']},
                        {'permissionClass':'Affiliate Setting','permissionName':['Affiliate Setting']},
                        {'permissionClass':'Treasury','permissionName':['Treasury','Marketing Material','Freight Setting']}],
            operations:['Add','Delete','Edit','View'],
            authority:[],
            department:'Warehoues',
            role:'',

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);

    }
    handleAddItem(arr,item){
        arr.push(item);
        return arr;
    }
    handleDeleteItem(arr,item){
        arr.splice(arr.indexOf(item),1);
        return arr;
    }
    
    handleSubmit = (e) => addRolesDetails({ 
            authority:this.state.authority,
            department:this.state.department,
            role:this.state.role,
        });
    
    handleInputChange = (e) => {
       
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const type = target.type;

        if(type==='checkbox'){
            if(target.checked){
                this.setState(() => ({
                    [name]:this.handleAddItem(this.state[name],value),
                }))
             }else{
                
                this.setState(() => ({
                    [name]:this.handleDeleteItem(this.state[name],value),
                }))
            }
        }else{
            this.setState((prevState) => ({
                [name]:value,
            }))
        }
    }
    
    render() {
        const { rolesDetails } = this.props;
        const { departments,permissions,operations } = this.state;
        const handleInputChange = this.handleInputChange;
        const handleSubmit = this.handleSubmit;

        return (
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
    }
}

const mapStateToProps = state => ({
    rolesDetails:state.RolesManagementReducer.rolesDetails,
});
const mapDispatchToProps = {
    addRolesDetails,
    editRolesDetails,
    deleteRolesDetails,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RolesManagement);
