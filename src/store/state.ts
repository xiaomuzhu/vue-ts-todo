export enum Mode {
  edit,
  finish
}

export interface ITodoItem {
  id: string;
  name: string;
  isDone: boolean;
  iconName: string;
  color: string;
  mode: Mode;
}

export interface State {
  todoList: Array<ITodoItem>;
}

export const state: State = {
  todoList: []
};
