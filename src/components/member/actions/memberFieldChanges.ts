import { actionTypes } from '../../../common/constants/actionTypes'
import { MemberEntity } from '../../../model'
import { FieldValidationResult } from 'lc-form-validation'
import { memberFormValidation } from '../memberFormValidation'

export const memberFieldChangeAction = (member: MemberEntity, fieldName: string, value: any) => (dispatch) => {
    // 验证一下，生成验证后的state更新
    memberFormValidation.validateField(member, fieldName, value)
        .then((fieldValidationResult) => {
            dispatch(memberFieldChangeCompleted(fieldValidationResult, value));
        })
}
export interface MemberFieldChangePayload {
    fieldValidationResult: FieldValidationResult,
    value: any;
}
const memberFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => ({
    type: actionTypes.UPDATE_MEMBER_FIELD,
    payload: {
        fieldValidationResult,
        value
    } as MemberFieldChangePayload   //as 作为某种类型进行创建
})