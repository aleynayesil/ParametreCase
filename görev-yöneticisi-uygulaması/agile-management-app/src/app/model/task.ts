import { Representative } from "./representative";

export interface Task {
    id?: number;
    content?: string;
    type?:string;
    isCompleted?:boolean;
    representative?: Array<Representative>;
}