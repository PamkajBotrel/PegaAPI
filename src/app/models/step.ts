import { DynamicForm } from './dynamic-form';

export interface Step {
    name:string,
    form?:DynamicForm
}