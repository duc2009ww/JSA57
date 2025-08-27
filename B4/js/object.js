//khai bao
const obj = {}
console.log(obj)

//them thuoc tinh moi
obj.a = 10;
console.log(obj)

//tao cho object
class Animal{
    construtor(name) {
        this.$name = name;
        this.$speak = "abc";
    }
}

//tao obj
const obj1 = new Animal("mno");
console.log(obj1);

//duyet object(for in)
for(let key in obj1) {
    console.log(key, obj1[key])
}

// toan tu in -> return booj
console.log("a" in obj); //kiem tra key a co ton tai trong obj

//ham hasOwnProperty -> return booj
console.log(obj1.hasOwnProperty("$gender") ? "co" : "khong"); // false (khong)

// xoa key
const obj2 = {...obj1, gender: 0}
console.log(obj2)

// toan tu rest
 const { $name: animalName, ...otherInfo} = obj2;
 console.log(animalName);
 console.log(otherInfo);

 //
 //KIEM TRA LOAI
 console.log(typeof []); // object -x array
console.log(Array.isArray([])); //true

console.log(typeof {}); // object
