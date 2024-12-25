function TodoRowItem({ rowNumber, rowDescription, rowAssigned }) {
  return (
    <tr>
      <th scrope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}
export default TodoRowItem;
