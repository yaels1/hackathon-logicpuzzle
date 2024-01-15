import { useTable } from "react-table";
import "./LogicPuzzle.scss";

function LogicPuzzle({ characters }) {
  return (
    <table className="table">
      <tr className="table__column">
        <th></th>
        <th className="table__column-item">1</th>
        <th className="table__column-item">2</th>
        <th className="table__column-item">3</th>
        <th className="table__column-item">4</th>
      </tr>

      <tr className="table__row">
        <td></td>
        <td className="table__row-item">A</td>
        <td className="table__row-item">A</td>;
        <td className="table__row-item">A</td>
        <td className="table__row-item">A</td>
      </tr>

      <tr>
        <td></td>
        <td className="table__row-item">B</td>
        <td className="table__row-item">B</td>
        <td className="table__row-item">B</td>
        <td className="table__row-item">B</td>
      </tr>

      <tr>
        <td></td>
        <td className="table__row-item">C</td>
        <td className="table__row-item">C</td>
        <td className="table__row-item">C</td>
        <td className="table__row-item">C</td>
      </tr>
    </table>
  );
}

export default LogicPuzzle;
