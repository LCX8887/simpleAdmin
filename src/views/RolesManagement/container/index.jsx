import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRolesDetails,editRolesDetails,deleteRolesDetails } from '../flow/actions';
import AddRoles from '../components/AddRoles';
import RolesDetails from '../components/RolesDetails';

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
            rolesDetailsHead:['NO.','Department','Role','Permission','Action'],
            rolesDetailsAction:['Edit','Delete'],

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
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(addRolesDetails({ 
            authority:this.state.authority.slice(0),
            department:this.state.department,
            role:this.state.role,
        }));
    }       
    
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
        const { departments,permissions,operations,rolesDetailsHead,rolesDetailsAction } = this.state;
        const handleInputChange = this.handleInputChange;
        const handleSubmit = this.handleSubmit;

        return (
            <div>
                <AddRoles 
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    departments={departments}
                    permissions={permissions}
                    operations={operations}
                />
                <RolesDetails 
                    rolesDetails={rolesDetails}
                    rolesDetailsHead={rolesDetailsHead}
                    rolesDetailsAction={rolesDetailsAction}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    rolesDetails:state.RolesManagementReducer.rolesDetails,
});

export default connect(
  mapStateToProps,
)(RolesManagement);
