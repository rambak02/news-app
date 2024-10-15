import  "./NewsPage.css"
import { observer } from "mobx-react";
import { useEffect } from "react";
import store from "../../stores/newsStore"
import { Link, useParams } from "react-router-dom";
import { CommentsTree } from "../../components/CommentsTree";
import { formatUnixDate } from "../../helpers/formatter";

export const NewsPage = observer(() => {
  const { newsId } = useParams(); 

  useEffect(() => {
    store.fetchNews(newsId); // Загружаем новость при монтировании компонента
  }, [newsId]);

  if (store.loading || !store.news) {
    return <div>Загрузка...</div>;
  }

  const { title, url, by, time, descendants } = store.news;

  return (
    <div className="newsDetail">
      <div className="newsHeader">
        <h1 className="newsTitle">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <div className="newsMeta">
          <span className="newsAuthor">Автор: {by}</span>
          <span className="newsDate">
            Дата: {formatUnixDate(time)}
          </span>
        </div>
      </div>

      <div className="newsRating">Комментариев: {descendants}</div>

      <div className="commentsSection">
        <h2>Комментарии:</h2>
        <CommentsTree comments={store.comments} />
        <button
          className="refreshButton"
          onClick={() => store.refreshComments()}
        >
          Обновить комментарии
        </button>
      </div>

      <Link to="/" className="backButton">
        Вернуться к списку новостей
      </Link>
    </div>
  );
});
