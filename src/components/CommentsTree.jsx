import React from "react";
import { observer } from "mobx-react";
import { CommentItem } from "./CommentItem"; // Убедитесь в правильности пути

export const CommentsTree = observer(({ comments }) => {
  return (
    <ul className="commentList">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
});
