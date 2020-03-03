export const deleteTodo = todoId => {
    return {
        type: "DELETE_TODO",
        todoId
    }
}