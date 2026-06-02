import { useState } from "react";
import type { Users } from "../../types/userTypes";
//import { userApi } from "../../api/userApi";
import UserItem from "./UserItem";
import useFetch from "../../hooks/useFetch";

const UserList = () => {
  const { data, loading, error } = useFetch("/users");
  // const [userData, setUserData] = useState<Users[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState<Users[]>([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText !== "") {
      const filter = data.filter((item) => {
        return (
          item.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          item.email
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          item.address.city
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          item.company.bs
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
        );
      });
      console.log(filter);
      setFilteredData(filter);
      return filter;
    }
  };

  const searchData = searchText !== "" ? filteredData : data;

  if (loading) return <p>Loading....</p>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <input
        type="text"
        name="searchText"
        placeholder="Search here...."
        onChange={(e) => {
          handleSearch();
          setSearchText(e.target.value.trim());
        }}
      />
      {searchText !== "" && filteredData.length === 0 ? (
        <p>No Data Found...</p>
      ) : (
        <UserItem users={searchData} />
      )}
    </div>
  );
};

export default UserList;
