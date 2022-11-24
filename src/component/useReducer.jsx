import { Container, Button,Row } from "react-bootstrap"


export const UseReducer=()=>{
  
  return(
  
  <Container className="w-50">
      <Row className="text-center  m-5">
        <Button variant="warning" >
          GET USER
        </Button>
        { <h2>error</h2>}
        { <img width="300px" src="" />}
        { <p> Email: </p>}
      </Row>
    </Container>
  )
}