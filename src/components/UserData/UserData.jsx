import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/ContextProvider";
import Button from "react-bootstrap/esm/Button";
import UserCard from "../Views/UserCard";

const UserData = ({ token, logOut }) => {
  const [userData, setUserData] = useState([]);

  const { userEmail } = useContext(AppContext);

  useEffect(() => {
    userEmail(userData.email);
    fetch(`https://dummyjson.com/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer/ ${token} /`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.users[1]);
      });
  }, [token, userEmail, userData.email]);

  return (
    <>
      <UserCard user={userData} />
      <Button style={{ marginTop: 30 }} variant="secondary" onClick={logOut}>
        Log out
      </Button>
    </>
  );
};

export default UserData;
