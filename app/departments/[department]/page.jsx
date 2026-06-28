"use client";

import { useParams } from "next/navigation";

const departments = [
  {
    slug: "computer-science",
    name: "Computer Science",
    students: 120,
    hod: "Dr. Sharma",
  },
  {
    slug: "mechanical",
    name: "Mechanical",
    students: 90,
    hod: "Dr. Kumar",
  },
  {
    slug: "civil",
    name: "Civil",
    students: 60,
    hod: "Dr. Singh",
  },
];

export default function DepartmentDetails() {
  const params = useParams();

  const department = departments.find(
    (dept) => dept.slug === params.department
  );

  return (
    <div>
      <h1>{department.name}</h1>
      <p>Students: {department.students}</p>
      <p>Head of Department: {department.hod}</p>
    </div>
  );
}