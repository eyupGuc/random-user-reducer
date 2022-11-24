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
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results[0].picture.large);
      setUser(data.results[0].picture.large);
    } catch (error) {
      console.log(error);
    }
    console.log(user);
  };

  return (
    <Container fluid>
      <Row className="text-center  m-5">
        <Button variant="warning" onClick={getUser} disabled={false}>
          GET USER
        </Button>
        {error && <h2>{error}</h2>}
        {user && <img src={user}/>}
      </Row>
    </Container>
  );
};
