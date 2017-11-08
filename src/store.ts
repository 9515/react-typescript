
// Store 负责Store 实例 => react-redux connect
// createStore 生成一个store 参数
// compose 中间件的合成 thunk 中间件  类似app.use() 合并成一个
// applyMiddleware 添加中间件
import { Store, createStore, compose, applyMiddleware } from 'redux';
// reduxThunk能够 在dispatch方法前 让你先起 promise 异步化提交action
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
export const store: Store<State> = createStore (
    state,
    // redux 的中间件  和 koa一样
    compose(
        applyMiddleware(reduxThunk)
    )
)