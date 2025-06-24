class User{
    private _role:String;
    private _access:String

    constructor(role:String){
     this._role=role;
     this._access =this.checkAccess(role);
    }

    public get role():String{
        return this._role;
    }
    public set role(newRole:String){
        this._role = newRole;
        this._access = this.checkAccess(newRole);
    }
    public get access():boolean{

        return this._access;
    }

    public checkAccess(role:String):boolean {

        const allowedRole = ['admin','superAdmin','Manager'];

       return allowedRole.includes(role.toLocaleLowerCase())
    }

    public showAccess():void{

        if(this.access){
         console.log(`Access is granted for the role${this.role}`)
        }
        else{
            console.log(`Access is denied for the rol ${this.role}`)
        }
    }
}

const user1 = new User('Admin');
user1.showAccess();

const user2 = new User('broker');
user2.showAccess();