import { Person } from '../../models/Person';

describe("Test about components/models/Person class", ()=>{
    const personTest = new Person("Juan", "Tafur", 36);

    it("Test getFullName", ()=>{
        const fullName = personTest.getFullName();
        expect(fullName).toEqual("Juan Tafur");
    });
    
    it("Test getAgeInYears", ()=>{
        const agePersonTest = personTest.getAgeInYears(5);
        expect(agePersonTest).toEqual(41)
    });

    it("Test getAgeInYears receive positive values", ()=>{
        const newAge = 89;
        personTest.setAge(newAge);
        expect(personTest.getAge()).toEqual(newAge);

    });

});