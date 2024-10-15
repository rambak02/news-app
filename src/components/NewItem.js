import { formatUnixDate } from "../helpers/formatter";
import "../styles/NewItem.css";
export const NewItem = ({ story }) => {
  return (
    <li className="newItem">
      <div className="newsHeader">
        <h2 className="newsTitle"> {story.title}</h2>
        <span className="newsRating">Рейтинг: {story.score}</span>
      </div>
      <div className="newsMeta">
        <span className="newsAuthor">Автор: {story.by}</span>
        <span className="newsDate">Дата публикации: {formatUnixDate(story.time)}
        </span>
      </div>
    </li>
  );
};
