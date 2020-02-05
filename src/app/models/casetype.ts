export class Casetype {
    public ID:string
    public name:string
    fields:Casetype.Field[]=[]

    constructor(ID:string,name:string) {
        this.ID = ID
        this.name = name
    }
f
    addField(ref:string,type:string,maxLength:number) {
        this.fields.push(new Casetype.Field(ref,type,maxLength))
    }
}

export namespace Casetype {
    export class Field {
        reference:string
        type:FieldType
        maxLength:number
        constructor(ref:string,type:string,maxLength:number) {
            this.reference = ref
            this.type = FieldType[type]
            this.maxLength = maxLength
        }
    }

    export enum FieldType {
        Text = "Text"
    }
}