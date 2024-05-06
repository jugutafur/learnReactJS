import { data } from './data';

export class Person {

    constructor(
        public name: string,
        public lastName: string,
        public age: number,
        public universidad: data
    ){}

    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
    
    getAgeInYears(years: number) : number{
        return this.age + years;
    }

    setAge(newAge: number){
        this.age = newAge >0? newAge: 1;
    }

    getAge(): number{
        return this.age;
    }

}