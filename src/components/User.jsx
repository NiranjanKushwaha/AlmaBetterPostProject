import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUserDetails } from "./request";

const User = () => {
  const history = useHistory();
  const { uid } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserDetails(uid)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <span className="u-back">
        <button onClick={(e) => history.goBack()}>←</button>
      </span>
      <div className="u-parent">
        <h1>{user?.name}</h1>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>
          Website{" "}
          <a href={`http://${user.website}`} target="_blanck">
            {user?.website}
          </a>
        </p>
        <div className="u-company">
          <h2>Company</h2>
          <h3> Name: {user?.company?.name}</h3>
          <p>{user?.company?.catchPhrase}</p>
          <p>{user?.company?.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
