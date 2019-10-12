import { State } from "../store/state";
import { ITodoItem } from "./state";

export const getters = {
  getCurrentTodoList(state: State): ITodoItem[] {
    return state.todoList;
  }
};
