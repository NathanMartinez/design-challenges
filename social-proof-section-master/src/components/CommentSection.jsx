import React from "react";
import Comment from "./Comment";
import { Comments } from "../PageData/comments";

export default function CommentSection() {
  return (
    <div className="comment-section">
      {Comments.map((comment) => (
        <Comment
          key={comment.id}
          imageName={comment.imageName}
          name={comment.name}
          quote={comment.quote}
        />
      ))}
    </div>
  );
}
