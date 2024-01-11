import { useTable } from "react-table";
import "./LogicPuzzle.scss";

function LogicPuzzle() {
  // import axios stuff and create variable for it

  return (
    <table className="table">
      <tr className="table__column">
        <th className="table__column-item">1</th>
        <th className="table__column-item">2</th>
        <th className="table__column-item">3</th>
        <th className="table__column-item">4</th>
      </tr>

      <tr className="table__row">
        <td className="table__row-item">A</td>
      </tr>
      <tr>
        <td className="table__row-item">B</td>
      </tr>
      <tr>
        <td className="table__row-item">C</td>
      </tr>
    </table>
  );
}

export default LogicPuzzle;
