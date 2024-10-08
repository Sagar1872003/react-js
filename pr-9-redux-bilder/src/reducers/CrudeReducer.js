
let initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

const crudReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'add':
            let newdata = [...state.users, action.payload]
            localStorage.setItem('users', JSON.stringify(newdata))
            return {
                ...state,
                users: newdata
            }

        case 'delete':
            let ddata = state.users.filter(val => val.id != action.payload);
            localStorage.setItem("users", JSON.stringify(ddata));
            return {
                ...state,
                users: ddata
            };
            
        default:
            return state;

    }

}

export default crudReducer;