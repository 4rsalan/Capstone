export class Team_member {
    public fname : string;
    public lname : string;
    public email : string;
    public id : number;
    public active : boolean;

    constructor(fname : string, lname : string, email : string, id : number, active : boolean) {
        this.id = id;
        this.lname =lname;
        this.fname = fname;
        this.email = email;
        this.active = active;
    }
}