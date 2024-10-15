import React, { useState } from "react";
import { observer } from "mobx-react";
import store from "../stores/newsStore";

export const CommentItem = observer(({ comment }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = async () => {
    if (!showChildren) {
      if (comment.kids) {
        await store.fetchChildComments(comment.kids);
      }
    }
    setShowChildren(!showChildren);
  };

  return (
    <li className="commentItem">
      <div className="commentContent" onClick={handleClick}>
        <div
          className="commentText"
          dangerouslySetInnerHTML={{ __html: comment.text }}
        ></div>
      </div>
      {showChildren && store.childComments > 0 && (
        <ul className="childCommentList">
          {store.childComments.map((ch) => (
            <CommentItem key={ch.id} comment={ch} />
          ))}
        </ul>
      )}
    </li>
  );
});
