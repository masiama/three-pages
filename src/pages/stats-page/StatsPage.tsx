import { useEffect, useState } from 'react';

import './StatsPage.scss';
import Comment, { IComment } from '../../components/comment/Comment';
import reportWebVitals from '../../reportWebVitals';

function StatsPage() {
  const [comments, setComments] = useState<Array<IComment>>();
  const [performance, setPerformace] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const commentsFetchStart = window.performance.now();
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(comments => {
        const commentsFetch = window.performance.now() - commentsFetchStart;
        setPerformace(performance => ({ ...performance, commentsFetch }))
        setComments(comments);
      });
  }, []);

  useEffect(() => {
    reportWebVitals(data => {
      setPerformace(performance => ({ ...performance, [data.name]: data.value }))
    });
  }, []);

  return (
    <section className="stats">
      <div className="stats__data">
        {Object.keys(performance).map(name => <div className="stats__item" key={name}>
          <div className="stats__name">{name}</div>
          <div className="stats__value">{performance[name]}ms</div>
        </div>)}
      </div>

      <div className="data">
        {!comments ? <div className="data__loading">Loading...</div> : <div className="data__content">
          {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>}
      </div>
    </section>
  );
}

export default StatsPage;
