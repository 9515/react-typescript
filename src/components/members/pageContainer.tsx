// react container  
// redux state action  
// connect 将组件包装一层 
// 声明要借什么 state action  
// connect props=> page.tsx

import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchMembersAction } from './actions/fetchMembers'
import { MembersPage } from './page'
// state, action 来到component流程
const mapStateToProps = (state: State)  => ({
    members: state.members
})
const mapDispatchToProps = (dispatch) => ({
    fetchMembers:() => dispatch(fetchMembersAction())
})
// 将被拿走了状态的组件，从redux 里map 状态和action过来，作为props
// connect 连接 组件与redux 里的需要的状态和需要的方法
export const MembersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MembersPage);