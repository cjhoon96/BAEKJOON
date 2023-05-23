const fullNameMaxLength = 10;

class Employee2 {
    private _fullName: string | null = null;

    get fullName(): string | null{
        return this._fullName;
    }

    set fullName(newName: string | null) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}

let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}





