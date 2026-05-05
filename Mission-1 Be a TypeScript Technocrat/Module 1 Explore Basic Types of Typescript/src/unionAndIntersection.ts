// union
type userRole = "admin" | "user";
const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "admin dashboard";
  } else if (role === "user") {
    return "user dashboard";
  } else {
    return "guest dashboard";
  }
};

const dashboard = getDashboard("user");
console.log(dashboard);

// intersection

type Manager = {
  id: number;
  name: string;
  phoneNo: string;
};

type Employee = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const RakibulHasan: EmployeeManager = {
  id: 1263,
  name: "Md Rakibul hasan",
  phoneNo: "01521711716",
  designation: "Manager",
  teamSize: 14,
};

console.log(RakibulHasan);
