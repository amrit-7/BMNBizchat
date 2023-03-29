import { Table } from "react-bootstrap";
import { UserList } from "../../Utils/users";
export const UserTable = () => {
  return (
    <Table bgcolor="" className="mt-4" striped hover bordered>
      <thead>
        <th>
          <i className="fa-solid fa-user"></i> Name
        </th>
        <th>
          <i className="fa-solid fa-phone"></i> Contact
        </th>
        <th>
          <i className="fa-solid fa-envelope"></i> Email
        </th>
        <th>
          <i className="fa-solid fa-tag"></i> Tags
        </th>
        <th>
          <i className="fa-solid fa-pencil"></i> Created On
        </th>
      </thead>
      <tbody>
        {UserList.map((user) => {
          const { name, id, phone, email, createdOn, tags, image } = user;
          return (
            <tr key={id}>
              <td>
                <input type="checkbox" className="form-check-input me-2" />
                <img
                  src={image}
                  width="35"
                  height="35"
                  className="rounded-circle me-2"
                  alt="profile"
                />
                {name}
              </td>
              <td>
                <i className="fa-solid fa-paper-plane fa-lg me-3"></i>
                {phone}
              </td>
              <td>{email}</td>
              <td>{tags}</td>
              <td>{createdOn}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
