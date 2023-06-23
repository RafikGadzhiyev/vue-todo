export interface ITodo {
    id: string,
    value: string,
    createdAt: number,
    updateAt: number,
    isCompleted: boolean
}

export interface IStore {
    todos: Array<ITodo>
}

