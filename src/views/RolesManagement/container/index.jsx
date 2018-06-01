import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRolesDetails,editRolesDetails,deleteRolesDetails } from '../flow/actions';

class RolesManagement extends Component {
  componentDidMount() {
   
  }

  render() {
    const { rolesDetails,departments,permissions,operations } = this.props;

    return (
        <div>
            <div>
                <p>Department</p>
                <select>
                    {departments.map(department => <option value={department}>{department}</option>)}
                </select>
            </div>
            <div>
                <p>Role</p>
                <input type="text" name="role"/>
            </div>
            <div>
                <p>Permission</p>
                {permissions.map(permission => {
                    return (
                        <div>{permission.permissionName.map(item => <p>{item}</p>)}</div>
                    )
                   
                })}
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    rolesDetails:state.RolesManagementReducer.rolesDetails,
    departments:state.RolesManagementReducer.departments,
    permissions:state.RolesManagementReducer.permissions,
    operations:state.RolesManagementReducer.operations,
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
