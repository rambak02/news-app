import { Link } from "react-router-dom";
import { formatUnixDate } from "../helpers/formatter";
import "../styles/NewItem.css";
export const NewItem = ({ story }) => {
  const newsLink = "/news/" + story.id
  return (
    <li className="newItem">
      <Link to={newsLink}>
      <div className="newsHeader">
        <h2 className="newsTitle"> {story.title}</h2>
        <span className="newsRating">Рейтинг: {story.score}</span>
      </div>
      <div className="newsMeta">
        <span className="newsAuthor">Автор: {story.by}</span>
        <span className="newsDate">Дата публикации: {formatUnixDate(story.time)}
        </span>
      </div>
      </Link>
    </li>
   
  );
};
