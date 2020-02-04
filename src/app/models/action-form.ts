import { HttpClient } from '@angular/common/http';
export class ActionForm {
    private title:string = ""
    private fields:ActionForm.DynamicField[] = []

    constructor(private json:any) {
    }

    toJSON() {
        this.title = this.json['view']['name']
        let jsonFields = this.json['view']['groups'][0]['layout']['groups']
        jsonFields.forEach(e => {
            this.fields.push(
                new ActionForm.DynamicField(e['field']['reference'],e['field']['label'])
            )
        });
    }
}

export namespace ActionForm {
    export class DynamicField {
        reference:string
        label:string

        constructor(reference:string,label:string) {
            this.reference = reference
            this.label = label
        }
    }
}