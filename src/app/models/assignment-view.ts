export class AssignmentView {
    name:string
    viewID:string
    fields:AssignmentView.Field[]
}

export namespace AssignmentView {
    export class Field {
        label:string
        fieldID:string
        type:string
        constructor(label:string,fieldID:string) {
            this.label = label
            this.fieldID = fieldID
        }
    }
}