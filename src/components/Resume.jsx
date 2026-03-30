import EducationTable from "./EducationTable";
import AssignmentsTable from "./AssignmentsTable";

export default function Resume() {
  return (
    <>
      <img src="profile.jpg" alt="profile" width="85px" />

      <h1>Eyyan Ahmad</h1>

      <p>
        Email: ayyandogarpak@gmail.com <br />
        Phone: 0315-0400194 <br />
        Address: Sarwar road, Lahore cantt, Pakistan
      </p>

      <h2>Objective</h2>
      <p>
        To obtain a position where I can use my skills and continue
        learning in the field of Computer Science.
      </p>

      <h2>Education</h2>
      <EducationTable />

      <h2>Skills</h2>
      <ul>
        <li>HTML (Basic)</li>
        <li>C++ Programming</li>
        <li>Problem Solving</li>
        <li>Communication Skills</li>
      </ul>

      <h2>Projects</h2>
      <ol>
        <li>Vehicle Rental System (C++)</li>
        <li>Simple Calculator</li>
      </ol>

      <h2>Experience</h2>
      <h3>Intern - Software House</h3>
      <p>
        Assisted in basic web development tasks and debugging programs.
      </p>

      <br />

      <h3>my assignments</h3>
      <br />

      <AssignmentsTable />
    </>
  );
}