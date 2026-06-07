import { useState, type FormEvent } from "react";

type SearchBarProps = {
  onSearch: (city: string) => void;
};
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
