import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import * as toastr from 'toastr';
import { FormValidationResult } from 'lc-form-validation';
import { hashHistory } from 'react-router';  //跳转(返回)
import { memberFormValidation } from '../memberFormValidation';
import { memberAPI } from '../../../api/member';


export const saveMemberAction = (member: MemberEntity) => (dispatch) => {
    memberFormValidation.validateForm(member)
        .then((formValidationResult) => {
            if (formValidationResult.succeeded) {
                saveMember(member);
            }
            dispatch(saveMemberActionCompleted(formValidationResult))
        })
}

const saveMember = (member: MemberEntity) => {
    memberAPI.saveMember(member)
        .then(() => {
            toastr.success('Member saved');
            hashHistory.goBack();
        })
        .catch(toastr.error)
}
const saveMemberActionCompleted = (formValidationResult: FormValidationResult) => ({
    type: actionTypes.SAVE_MEMBER,
    payload: formValidationResult
})
// action 包含了很多业务的逻辑, 有多少个动作添加多少个action文件