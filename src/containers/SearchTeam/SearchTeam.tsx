import { ChangeEvent, FormEvent, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import Card from "../../components/Card/Card";
import DropdownFilter from "../../components/DropdownFilter/DropdownFilter";
import team from "../../data/team";

type SearchTeamProps = {
  names: string[];
  roles: string[];
};

const SearchTeam = ({ names, roles }: SearchTeamProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [roleFilter, setRoleFilter] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };
  const filteredTeam = names.filter((name) =>
    name.toLowerCase().includes(searchInput)
  );

  const handleFilterRole = (event: ChangeEvent<HTMLSelectElement>) => {
    const inputs = event.currentTarget.value;
    setRoleFilter(inputs);
  };

  const filterRole = team.filter((member) => {
    return (
      member.name.toLowerCase().includes(searchInput) &&
      (roleFilter === "" ||
        member.role.toLowerCase() === roleFilter.toLowerCase())
    );
  });

  return (
    <div className="SearchTeam">
      <SearchBox
        label="names"
        searchTerm={searchInput}
        handleInput={handleInput}
      />
      <DropdownFilter handleChange={handleFilterRole} />

      <div>
        {filterRole.map((employee) => (
          <Card id={employee.id} name={employee.name} role={employee.role} />
        ))}
      </div>
    </div>
  );
};

export default SearchTeam;
