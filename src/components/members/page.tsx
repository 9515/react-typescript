import * as React from 'react'
import { MemberEntity } from '../../model'
// import { memberAPI } from '../../api/member'
import { MemberHeader } from './memberHeader'
import { MemberRow } from './memberRow'
import { Link } from 'react-router';
//state react constructor this.state = 初始化

// 加入redux后， 原有组件的state 要store state props 
// state props 一样的 没有自己了 由store 传进来
interface Props {
    members: MemberEntity[],
    fetchMembers(): void;
}
//Props
// MembersPage Component 有状态
// class *** extends React.Component 需要有两个参数<Props,state>
export class MembersPage extends React.Component<Props> {
    // ts class
    constructor () {
        super();
    }
    public componentDidMount() {
            // memberAPI.fetchMembersAsync()
            this.props.fetchMembers()
            // memberAPI.fetchMembers()
            //     .then(members => {
            //         this.setState({
            //             members
            //         })
            //     })
    }
    public render () {
        return (
            <div className="row">
                <h2>Members Page</h2>
                <Link to="/member">New Member</Link>
                <table className="table">
                    <thead>
                        <MemberHeader/>
                    </thead>
                    <tbody>
                        { this.props.members.map(
                            (member) => {
                               return <MemberRow
                                key={member.id}
                                member = {member} />
                            }
                        ) }
                    </tbody>
                </table>
            </div>
        )
    }
} 
// jsx ui语法 没有Vue 直接
// jsx 更像编程
// 复杂的jsx 封装一下， 返回jsx的函数
// const MemberHeader = () => {
//     return (
//         <tr>
//             <td>Avatar</td>
//             <td>Id</td>
//             <td>Name</td>
//         </tr>
//     );
// }
// 函数 返回jsx 参数由map members member
// const MemberRow = (member: MemberEntity) => {
//     return (
//         <tr key= {member.id}>
//             <td> 
//                 <img src={member.avatar_url} className="avatar" alt=""/>    
//             </td>
//             <td>
//                 <span>{member.id}</span>
//             </td>
//             <td>
//                 <span>{member.login}</span>
//             </td>
//         </tr>
//     )
// }

