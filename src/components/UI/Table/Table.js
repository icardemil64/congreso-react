import "./Table.module.css";

const Table = (props) => {
  const tableInfo = props.content;
  return (
    <table>
      <tbody>
        {tableInfo.map((e) => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.des}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
