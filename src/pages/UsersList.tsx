import { useEffect, useState } from "react";

interface User {
  id: number;
  name?: string;
  email?: string;
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error?.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <h1>All Users</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="txt_danger">{error}</div>
      ) : (
        users?.map((user, index) => (
          <div key={user?.id}>
            {index + 1}. {user?.name}
            <div>email : {user?.email}</div>
          </div>
        ))
      )}
    </div>
  );
}
