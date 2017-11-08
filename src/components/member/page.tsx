// // import * as React from 'react'
// // import {MemberForm} from './memberForm'
// // import { MemberEntity, MemberErrors } from '../../model'
// // interface Props {
// //     memberId: number;
// //     member: MemberEntity; //属性
// //     fetchMemById: (id:number) => void;
// //     onChange: (member: MemberEntity,filename: string, value: string) => void; // 方法
// //     onSave: (member: MemberEntity) => void;
// //     memberErrors: MemberErrors;
// // }
// // export class MemberPage extends React.Component<Props, {}>  {
// //     constructor () {
// //         super();
// //         this.onChange = this.onChange.bind(this);
// //         this.onSave = this.onSave.bind(this);
// //     }
// //     componentDidMount() {
// //         this.props.fetchMemById(this.props.memberId)
// //     }
// //     public render () {
// //         return(
// //             <div className="row">
// //                 <h2>Member Page</h2>
// //                 <MemberForm 
// //                 member ={this.props.member}
// //                 memberErrors={this.props.memberErrors}
// //                 onChange={this.onChange}
// //                 onSave={this.onSave}
// //                 />
// //             </div>
// //         )
// //     }
// //     private onChange(fieldName: string, value: string) {
// //         this.props.onChange(this.props.member, fieldName, value)
// //     }
// //     private onSave() {
// //         this.props.onSave(this.props.member)
// //     }
// // }
    

// // // State改变 member传下去， 给一个onChange函数

// import * as React from 'react';
// import { MemberForm } from './memberForm';
// import { MemberEntity, MemberErrors } from '../../model';
// interface Props {
//     memberId: number;
//     member: MemberEntity; //属性
//     memberErrors: MemberErrors;
//     fetchMemberById: (id: number) => void;
//     onChange: (member: MemberEntity, 
//         fieldName: string, value: string) => void;
//     onSave: (member: MemberEntity) => void;
// }
// export class MemberPage extends React.Component<Props, {}> {
//     constructor () {
//         super();
//         this.onChange = this.onChange.bind(this);
//         this.onSave = this.onSave.bind(this);
//     }
    
//     componentDidMount() {
//         this.props.fetchMemberById(this.props.memberId);
//     }

//     public render () {
//         return (
//             <div className="row">
//                 <h2>Member Page</h2>
//                 <MemberForm 
//                     member={this.props.member}
//                     memberErrors={this.props.memberErrors}
//                     onChange={this.onChange}
//                     onSave={this.onSave}
//                     />
//             </div>
//         )
//     }
//     private onChange(fieldName: string, value: string) {
//         this.props.onChange(this.props.member, 
//             fieldName, value);
//     }
//     private onSave() {
//         this.props.onSave(this.props.member);
//     }
// }


import * as React from 'react';
import { MemberEntity, MemberErrors } from '../../model';
import { MemberForm } from './memberForm';



interface Props {
  memberId: number;
  member: MemberEntity;
  memberErrors: MemberErrors;
  fetchMemberById: (id: number) => void;
  onChange: (member: MemberEntity, fieldName: string, value: string) => void;
  onSave: (member: MemberEntity) => void;
}

export class MemberPage extends React.Component<Props, {}> {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    this.props.fetchMemberById(this.props.memberId);
  }

  private onChange(fieldName: string, value: string) {
    this.props.onChange(this.props.member, fieldName, value);
  }

  private onSave() {
    this.props.onSave(this.props.member);
  }

  render() {
    return (
      <MemberForm
        member={this.props.member}
        memberErrors={this.props.memberErrors}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}
