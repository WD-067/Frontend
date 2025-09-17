function StudentList() {
  const students = [
    { id: 1, name: "Anila", country: "India" },
    { id: 2, name: "Aziz", country: "Pakistan" },
    { id: 3, name: "Harshi", country: "India" },
  ];

  //   Have a list items that say: "Anila from India"
  return (
    <ul>
      {/* {[
        <li>Anila from India</li>,
        <li>Aziz from Pakistan</li>,
        <li>Harshi from India</li>,
      ]} */}
      {students.map((student) => {
        return (
          <li key={student.id}>
            {student.name} from {student.country}
          </li>
        );
      })}
    </ul>
  );
}

export default StudentList;
