import React, { useEffect, useState } from 'react';

import './DataPage.scss';
import Comment, { IComment } from '../../components/comment/Comment';

function DataPage() {
  const [comments, setComments] = useState<Array<IComment>>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(setComments);
  }, []);

  return (
    <section className="data">
      {!comments ? (
        <div className="data__loading">Loading...</div>
      ) : (
        <div className="data__content">
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </section>
  );
}

export default DataPage;
