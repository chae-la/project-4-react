import "./DropdownFilter.scss";
import { ChangeEventHandler } from "react";

type DropdownFilterProps = {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
};

const DropdownFilter = ({ handleChange }: DropdownFilterProps) => {
  
  return (
    <div className="dropdown-filter">
      <select onChange={handleChange}>
        <option value="">All Roles</option>
        <option value="Junior Software Developer">
          Junior Software Developer
        </option>
        <option value="Software Developer">Software Developer</option>
        <option value="Senior Software Developer">
          Senior Software Developer
        </option>
        <option value="Project Manager">Project Manager</option>
        <option value="Tester">Tester</option>
        <option value="Hard Man">Hard Man</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
