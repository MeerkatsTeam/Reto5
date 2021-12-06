import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore/';
import {Contacts} from 'shared/models/contacts';
@Injectable({
                providedIn: 'root' 
            })
export class DatabaseService {
    constructor(private database: AngularFirestore) { }

    set(data:Contacts, path:string): Promise<void> {
        return this.database.doc(path).set(data,{merge:true});
    }
    getNewUid(): string {
        return this.database.createId();
    }

    //49. Crea el método addContactDatabase
    /* onSubmit(): void{
        this.submitted = true;
        if(this.form.invalid){
            return;
        }
        console.log(JSON.stringify(this.form.value, null, 2));
    }

    onReset():void{
        this.submitted = false;
        this.form.reset()
    }

    addContactToDatabase(Email: string, FirstName:string, LastName:string, Password: string) {
        const contact: Contacts = {Email, FirstName, LastName, Password};
        return this.IDBDatabase.set(contact, `contacts/${Email}`)
    } */
}
