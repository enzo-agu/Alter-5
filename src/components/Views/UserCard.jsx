
import Card from "react-bootstrap/Card";

const UserCard = ({user}) => {

  return (
    <>
      <Card style={{marginLeft:30, marginTop:30, width: "18rem" }}>
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>User profile</Card.Title>
          <Card.Text>
            {user.firstName} {user.lastName}
          </Card.Text>
          <Card.Text>{user.age}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.role}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserCard;
