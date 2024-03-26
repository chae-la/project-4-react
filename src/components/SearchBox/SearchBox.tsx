import { FormEventHandler } from "react";
import "./SearchBox.scss";


type SearchBoxProps = {
    label: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({label, searchTerm, handleInput}: SearchBoxProps) => {
    // const capitalisedLabel = label[0].toUpperCase() + label.slice(1);

    return (
        <div className="search-box">
            {/* <label>{capitalisedLabel}</label> */}
            <input placeholder="Search Team" type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input"/>
        </div>
    )
}

export default SearchBox