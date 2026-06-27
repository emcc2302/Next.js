import DepartmentCard from "../components/DepartmentCard";

export default function Home() {

  const departments = [
    {
      id: 1,
      name: "Computer Science",
      students: 120
    },
    {
      id: 2,
      name: "Mechanical",
      students: 90
    },
    {
      id: 3,
      name: "Civil",
      students: 60
    },
      {
      id: 4,
      name: "Electrical",
      students: 30
    },
    {
      id: 5,
      name: "ECE",
      students: 40
    },
    {
      id: 6,
      name: "IT",
      students: 40
    }
  ];

  return (
    <div>
      <h1>Departments</h1>

      {departments.map((department) => (
        <DepartmentCard
          key={department.id}
          name={department.name}
          students={department.students}
        />
      ))}
    </div>
  );
}