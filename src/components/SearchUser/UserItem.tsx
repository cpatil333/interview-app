import type { Users } from "../../types/userTypes";
import styles from "../../module/user.module.css";

type UsersProps = {
  users: Users[];
};

const UserItem = ({ users }: UsersProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user?.company?.bs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserItem;
