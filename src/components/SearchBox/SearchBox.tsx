import { FormEventHandler } from "react";
import "./SearchBox.scss";


type SearchBoxProps = {
    label: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({label, searchTerm, handleInput}: SearchBoxProps) => {
    return (
        <div className="search-box">      
            <input placeholder="Search Team" type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input"/>
        </div>
    )
}

export default SearchBox