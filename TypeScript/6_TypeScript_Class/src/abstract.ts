abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // 반드시 파생된 클래스에서 구현되어야 합니다.
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // 파생된 클래스의 생성자는 반드시 super()를 호출해야 합니다.
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // 추상 타입의 레퍼런스를 생성
// department = new Department(); // 오류: 추상 클래스는 인스턴스화 할 수 없다.
department = new AccountingDepartment(); // 추상이 아닌 하위 클래스를 생성하고 할당한다.
department.printName();
department.printMeeting();
// department.generateReports(); // 오류: 선언된 추상 타입에 메서드가 존재하지 않는다.