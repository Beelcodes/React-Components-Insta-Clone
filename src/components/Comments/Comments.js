import React, { useState } from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, addCommentToPost, postId } = props;
  const [newComment, setNewComment] = useState("");
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
      <div className="comment-form">
        <input
          type="text"
          placeholder="Type here to add a comment!"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addCommentToPost(postId, newComment);
              setNewComment("");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Comments;
