import DepartmentCard from "../../components/DepartmentCard";

export default function Departments() {

  const departments = [
    { id: 1, name: "Computer Science", students: 120 ,slug: "computer-science",},
    { id: 2, name: "Mechanical", students: 90 ,slug: "mechanical",},
    { id: 3, name: "Civil", students: 60 ,slug: "civil",},
  ];

  return (
    <div>
      <h1>Departments</h1>

      {departments.map((department) => (
        <DepartmentCard
          key={department.id}
          name={department.name}
          students={department.students}
          slug={department.slug}
        />
      ))}
    </div>
  );
}