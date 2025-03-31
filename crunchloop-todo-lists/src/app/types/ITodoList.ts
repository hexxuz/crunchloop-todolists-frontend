import ITodoListItem from "./ITodoListItem";

export default interface ITodoList {
    id: number;
    name: string;
    items?: ITodoListItem[];
}