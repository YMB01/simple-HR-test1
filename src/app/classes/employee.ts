export class Employee {
    constructor(
        public id: number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public phoneNumber: string = '',
        public departmentId: number = 0,
        public salaryId: number = 0
    ) { }
}