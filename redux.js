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