import React from "react";
import { User } from "../../types";
import { Table } from "react-bootstrap";
import Loading from "../Loading";

interface UserListProps {
  users: User[];
  loading: boolean;
}

export const UserList: React.FC<UserListProps> = ({ users, loading }) => {
  return (
    <>
      {!loading ? (
        <Table className="mt-5" responsive striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Loading />
      )}
    </>
  );
};
