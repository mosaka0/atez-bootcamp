
class Ders {

    constructor(name,teacher) {
        this.name = name;
        this.teacher = teacher;
    }

    getClassNameWithTeacher(){
        if(this.name && this.teacher){
            return this.name + " dersinin öğretmeni: "+ this.teacher;
        }
    }

}

const matematik = new Ders("matematik","Umut");

console.log(matematik.getClassNameWithTeacher());
