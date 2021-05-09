export class Employees{
    constructor(
        public id: number,
        public name: string,
        public salary: number,
        public permanent: string,
        public departmentId: number,
        public departmentName: string
    ){}
}