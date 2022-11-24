import { useState } from "react";

export const UseRandomReducer = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    const url = "https://randomuser.me/api/";
    try {
      const res = await fetch(url);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" color="red">
    
      <button onClick={getUser}>Get User</button>

    </div>
  );
};
