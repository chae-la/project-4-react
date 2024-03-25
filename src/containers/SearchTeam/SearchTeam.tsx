import { FormEvent, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import Card from "../../components/Card/Card";

type SearchTeamProps = {
  names: string[];
  roles: string[];
};

const SearchTeam = ({ names, roles }: SearchTeamProps) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };
  const filteredTeam = names.filter((name) =>
    name.toLowerCase().includes(searchInput)
  );

  return (
    <div className="SearchTeam">
      <SearchBox
        label="names"
        searchTerm={searchInput}
        handleInput={handleInput}
      />
      <div>
        {filteredTeam.map((name, index) => (
          <Card key={index} name={name} role={roles[index]} />
        ))}
      </div>
    </div>
  ); 
};

export default SearchTeam;
