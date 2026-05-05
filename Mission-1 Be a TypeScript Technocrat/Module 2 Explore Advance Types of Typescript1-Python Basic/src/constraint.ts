const addStudentToCourse = <T extends { id: number; name: string }>(
  studentInfo: T,
) => {
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
