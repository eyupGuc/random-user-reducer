import { useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const UseRandomReducer = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    const url = "https://randomuser.me/api/";
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results[0]);
      console.log(data.results[0]);

      setUser(data.results[0]);
      setError("");
    } catch (error) {
      console.log(error);
      setError("DATA CAN NOT BE FETCHED");
      setUser("")
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="w-50">
      <Row className="text-center  m-5">
        <Button variant="warning" onClick={getUser} disabled={loading}>
          GET USER
        </Button>
        {error && <h2>{error}</h2>}
        {user?.picture?.large && <img width="300px" src={user?.picture?.large} />}
        {user?.email && <p> Email: {user.email}</p>}
      </Row>
    </Container>
  );
};
