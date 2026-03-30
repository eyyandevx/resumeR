export default function AssignmentsTable() {
  const assignments = [
    "assignment1",
    "assignment2",
    "assignment3",
    "assignment4",
    "assignment5",
    "assignment6",
    "assignment7",
    "assignment8",
  ];

  return (
    <table border="1">
      <tbody>
        {assignments.map((item, index) => (
          <tr key={index}>
            <td>
              <a href={`index${index + 1}.html`}>{item}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}