import { Store } from 'vuex';
import { IStore, ITodo } from '../interfaces';


export const store = new Store<IStore>({
    state: {
        todos: [],
    },
    getters: {
        getTodos(state: IStore) {
            return state.todos;
        }
    },
    mutations: {
        createTodo(state: IStore, newTodo: ITodo) {
            state.todos.push({
                ...newTodo,
                id: state.todos.length + ''
            });
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodoState(state: IStore, payload: ITodo) {
            for (let todoIndex in state.todos) {
                let todo = state.todos[todoIndex];
                if (todo.id === payload.id) {
                    state.todos[todoIndex] = payload
                    state.todos[todoIndex].updateAt = Date.now();
                }
            }
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo(state: IStore, todoId: string) {
            state.todos = state.todos.filter((todo: ITodo) => todo.id !== todoId);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        getTodosFromStorage(state): void {
            state.todos = JSON.parse(localStorage.getItem('todos') || '[]');
        },
    }
});
