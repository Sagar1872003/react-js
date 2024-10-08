export const AddUser = (data) => {
    return {
        type: 'add',
        payload: data
    }
}

export const DeleteUser = (id) => {
    return {
        type: 'delete',
        payload: id
    }
}