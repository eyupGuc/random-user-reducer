import { useReducer } from "react";
import { Container, Button, Row } from "react-bootstrap";
import { initialState, reducer } from "../reducer";

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const{loading,user,error}=state;

  const getUser = async () => {
    const url = "https://randomuser.me/api/";
    dispatch({ type: "START" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results[0]);
      dispatch({ type: "SUCCESS", payload: data.results[0] });
    } catch (error) {
      dispatch({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED" });
    }
  };
console.log(state)
  return (
    <Container className="w-50">
      <Row className="text-center  m-5">
        <Button variant="warning" onClick={getUser} disabled={loading}>
          GET USER
        </Button>
        {<h2>{error}</h2>}
        {user?.picture?.large && <img width="300px" src={user.picture.large} />}
        {user?.email && <p>Email:{user.email}</p>}
      </Row>
    </Container>
  );
};
