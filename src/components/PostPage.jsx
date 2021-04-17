import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getCommentOnPost, getPostDetails, getUserDetails } from "./request";

const PostPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getPostDetails(id)
      .then((res) => {
        setPost(res.data);
        getUserDetails(res.data.id)
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    getCommentOnPost(id)
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="p-root">
      <span className="u-back">
        <button onClick={(e) => history.goBack()}>←</button>
      </span>
      <h1 className="p-title">{post.title}</h1>
      <h3 className="p-uname">{user?.username}</h3>

      <p className="comments">Comments: </p>
      <div className="p-comment">
        {comment.map((el) => {
          return (
            <div className="p-el">
              <h4>{el.name}</h4>
              <p>{el.body}</p>
              <h5>{el.email}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostPage;
