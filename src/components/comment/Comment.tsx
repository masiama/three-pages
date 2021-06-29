import React from 'react';

import './Comment.scss';

export interface IComment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentProps {
  comment: IComment;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <div className="comment__meta">
        <div className="comment__name">{comment.name}</div>
        <div className="comment__email">{comment.email}</div>
      </div>
      <div className="comment__body">{comment.body}</div>
    </div>
  );
}

export default Comment;
