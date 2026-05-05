// Generic Function
/*
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObject = (value: { id: number; name: string }) => [
  value,
];
*/

const createArrayWithGeneric = <T>(value: T) => [value];

const arrayString = createArrayWithGeneric<string>("Apple");
const arrayNumber = createArrayWithGeneric<number>(123);
const arrayObject = createArrayWithGeneric<object>({
  id: 123,
  name: "Rakibul",
});

const createTupleWithGeneric = <x, y>(param1: x, param2: y) => [param1, param2];
const result1 = createTupleWithGeneric<string, number>("rakibul", 1234);

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Rakibul",
  hasPen: true,
};

const student2 = {
  id: 2124,
  name: "Bulbul",
  hasCar: true,
  idMarried: true,
};

console.log(addStudentToCourse(student1));
