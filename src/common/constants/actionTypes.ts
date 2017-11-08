// VUE actionTypes常量
// 数据流向清单

// common/constans/actionTypes.ts
// 动作类型
export const actionTypes = {
    // 将列表的数据操作量redux
    FETCH_MEMBERS_COMPLETED: 'FETCH_MEMBERS_COMPLETED',
    // 表单/member/:id
    FETCH_MEMBER_BY_ID_COMPLETED: 'FETCH_MEMBER_BY_ID_COMPLETED',
    // chang action 修改 member state
    UPDATE_MEMBER_FIELD: 'UPDATE_MEMBER_FIELD',
    // 保存
    SAVE_MEMBER: 'SAVE_MEMBER'
}