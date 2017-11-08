// import * as React from 'react';
// import { MemberPage } from './page';
// import { MemberEntity, MemberErrors }  from '../../model';
// import * as toastr from 'toastr';
// import { hashHistory } from 'react-router';
// // import { memberAPI } from '../../api/member'
// import { memberFormValidation } from './memberFormValidation';
// import { FieldValidationResult } from 'lc-form-validation';
// import { State } from '../../reducers';
// import { connect } from 'react-redux';
// import { fetchMemberByIdAction } from './actions/fetchMemberById';

// import { memberFieldChangeAction } from './actions/memberFieldChanges';
// import { saveMemberAction } from './actions/saveMember';
// // react-router 的hashHistory接管项目

// // Input需要change  State改变  
// // 下一站
// // interface State {
// //     member: MemberEntity;
// //     memberErrors: MemberErrors;   //FieldValidationResult
// // }

// const mapStateToProps = (state: State, ownProps: any) => ({
//     memberId: Number(ownProps.params.id) ||0,
//     member: state.member,
//     memberErrors: state.memberErrors
// });
// const mapDispatchToProps = (dispatch) => ({
//     fetchMemberById: (id: number) => 
//         dispatch(fetchMemberByIdAction(id)),
//     onChange: (member: MemberEntity, fieldName: string,
//         value: string) => 
//         dispatch(memberFieldChangeAction(member, fieldName, value)),
//     onSave: (member: MemberEntity) =>
//         dispatch(saveMemberAction(member))
// });

// export const MemberPageContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MemberPage);

// // interface Props {
// //     params: {
// //         id: string 
// //     };
// // }
// // 表单 路由 => 组件  /member  /member/:id
// // react-router  :id 在props.id
// // export class MemberPageContainer extends React.Component<Props, State> {
// //     constructor () {
// //         super();
// //         this.state = {
// //             member: {
// //                 id: -1,
// //                 login: '',
// //                 avatar_url: '',
// //             },
// //             memberErrors: {
// //                 // 状态会变
// //                 login: new FieldValidationResult()
// //             }
// //         }
// //     }
// //     // 生命周期函数
// //     public componentDidMount() {
// //         const memberId = Number(this.props.params.id) || 0;
// //         if ( memberId ) {
// //              memberAPI.fetchMemberById(memberId)
// //                 .then( (member) => {
// //                     // 更新state
// //                     this.setState({
// //                         ...this.state,
// //                         member
// //                     })
// //                 })
// //         }
// //     }
// //     render () {
// //         return (
// //             <MemberPage 
// //             member={this.state.member}
// //             onChange={this.onfieldValueChange.bind(this)}
// //             onSave={this.onSave.bind(this)}
// //             memberErrors = {this.state.memberErrors} 
// //             />
// //         )
// //     }
// //     // state改变 form就会改变
// //     // 改变状态写成方法， 传递下去
// //     // 私有方法
// //     private onfieldValueChange(filedName:string, value: string) {
// //         // 构建新的状态 ES6
// //         // this.state filedName value
// //         // change 实时去validate
// //         memberFormValidation.validateField(this.state.member, filedName, value)
// //             .then((fieldValidationResult) => {
// //                 const nextState = {
// //                     ...this.state,
// //                     member: {
// //                         ...this.state.member,
// //                         [filedName]: value
// //                     },
// //                     // 在页面上看到错误
// //                     memberErrors: {
// //                         ...this.state.memberErrors,
// //                         [filedName]: fieldValidationResult
// //                     }
// //                 }
// //                 this.setState(nextState)
// //             })
// //     }
// //     private onSave() {
// //         // 保存的api
// //         memberFormValidation.validateForm(this.state.member)
// //             .then((formValidationResult) => {
// //                 if (formValidationResult.succeeded) {
// //                     memberAPI.saveMember(this.state.member)
// //                     .then(() => {
// //                         toastr.success('Member saved');
// //                         hashHistory.goBack();
// //                     })
// //                 } else {
// //                     toastr.error(formValidationResult.fieldErrors[0].errorMessage)
// //                 }
// //             })
// //     }
// // }


import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { MemberEntity } from '../../model';
import { fetchMemberByIdAction } from './actions/fetchMemberById';
import { memberFieldChangeAction } from './actions/memberFieldChanges';
import { saveMemberAction } from './actions/saveMember';
import { MemberPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => ({
  memberId: Number(ownProps.params.id) || 0,
  member: state.member,
  memberErrors: state.memberErrors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemberById: (id: number) => dispatch(fetchMemberByIdAction(id)),
  onChange: (member: MemberEntity, fieldName: string, value: string) =>
    dispatch(memberFieldChangeAction(member, fieldName, value)),
  onSave: (member: MemberEntity) => dispatch(saveMemberAction(member))
});

export const MemberPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberPage);
