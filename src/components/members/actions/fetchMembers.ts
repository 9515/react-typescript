// actions 放至在组件文件夹内
// 有利于分组开发， 大型项目开发
// 文件夹优秀是分组协作
import { MemberEntity } from '../../../model'
import { actionTypes } from '../../../common/constants/actionTypes'
import { memberAPI } from '../../../api/member'

// const fetchMembersCompleted = (members: MemberEntity[]) => {
//     type: actionTypes.FETCH_MEMBERS_COMPLETED,
//     payload: members
// }

// action dispatch 

// redux action dispatch 方法  修改的请求 不能修改state的 
// 只有dispatch mutation reducer  不可修改的纯函数
// action 数据处理 ajax => reducer
export const fetchMembersAction = () => (dispatch) => {
    // 返回promise的members
    memberAPI.fetchMembers()
        .then(members => {
            dispatch(fetchMembersCompleted(members));
        })
        // {
        //     type： FETCH_MEMBER_BY_ID_COMPLETED,
        //     payload: members
        // }
}
const fetchMembersCompleted = (members: MemberEntity[]) =>  ({
    type: actionTypes.FETCH_MEMBERS_COMPLETED,
    payload: members
})
