import { useState } from "react";

const UseRandomReducer = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = () => {
    const url = "https://randomuser.me/api/";
    try {
    } catch (error) {
      console.log(error);
    }
  };
};
