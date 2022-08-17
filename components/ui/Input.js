import style from "./Input.module.css";

const Input = ({ name, label, type }) => {
  return (
    <table className={style.input}>
      <thead>
        <tr>
          <th>
            <label htmlFor={name}>{label ? label : name}</label>
          </th>
          <td>
            <input id={name} type={type} required />
          </td>
        </tr>
      </thead>
    </table>
  );
};

export default Input;
