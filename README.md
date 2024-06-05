![image](https://github.com/CharlyJSX/baseDeRedux/assets/77645310/4a8b2db0-71b4-44ee-8abd-100a6eee41a5)

const counterReducer = (state, action) => {
    switch (action.type) {
        case '@counter/incremented':
            return state + 1
        case '@counter/decremented':
            return state - 1
        case '@counter/reset':
            return 0
        default:
            return state
    }
}


const actionIncremented = {
    type: '@counter/incremented'
}
const actionDecremented = {
    type: '@counter/decremented'
}

const actionReset = {
    type: '@counter/reset'
}

counterReducer(0, actionIncremented)
counterReducer(1, actionDecremented)
counterReducer(10, actionReset)
