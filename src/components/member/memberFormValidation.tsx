// 表单的报错 input下面有error message
// 状态合在一起
// memberEntity input .login .avator_url
// error 出错时显示到页面
// state
import {
    Validators, ValidationConstraints,createFormValidation
} from 'lc-form-validation'

// 表单， 集体提供验证对象
const validationConstraints: ValidationConstraints = {
    fields: {
        login: [
            { validator: Validators.required },
            { validator: Validators.minLength ,
            customParams: { length: 3} }
        ]
    }
}
export const memberFormValidation = createFormValidation (validationConstraints);

// 一个表单， 创建一个验证对象 createFormValidation
// 规则constraints ValidationConstraints
// fields 
    // login -> input form 
        // Validators.required
    // avator_url