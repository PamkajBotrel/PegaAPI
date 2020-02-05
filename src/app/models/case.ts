import { AssignmentView } from './assignment-view';
import { AssignmentDetails } from './assignment-details';
import { Casetype } from './casetype';
export class Case {
    ID:string
    nextAssignmentID:string
    nextPageID:string
    nextActionID:string
    nextActionName:string
    fields:Case.Field[]=[]
    object:any
    constructor() {}

    addField(field:Casetype.Field[],value:string) {
        this.fields.push()
    }
}

export namespace Case {
    export class Field {
        field:Casetype.Field
        value:string
        constructor(field:Casetype.Field,value:string) {
            this.field = field
            this.value = value
        }
    }
}