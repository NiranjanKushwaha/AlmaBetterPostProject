import React, { useEffect, useState } from "react";
import { getCommentOnPost, getPostDetails, getUserDetails } from "./request";
import { Link, useHistory, useParams } from "react-router-dom";

const PostItem = ({ pid, uid, title }) => {
  const [userName, setUserName] = useState("");
  const history = useHistory();
  useEffect(() => {
    getUserDetails(uid)
      .then((res) => {
        setUserName(res.data.username);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "1rem 1rem",
        padding: "0 1rem",
        borderRadius: "0.5rem",
        background: "#bdc3c7",
      }}
    >
      <Link style={{ textDecoration: "none" }} to={`/post/${pid}`}>
        <h3 className="home-title">{title}</h3>
      </Link>
      <Link
        to={`/user/${uid}`}
        style={{ textDecoration: "none", width: "fit-content" }}
      >
        <h4 className="userName">{userName}</h4>
      </Link>
    </div>
  );
};

export default PostItem;
