import "../styles/NewItem.css";
export function NewItem({ number }) {
  return (
    <li className="newItem">
      <div className="newsHeader">
        <h2 className="newsTitle">Название новости {number + 1}</h2>
        <span className="newsRating">Рейтинг: 4.{number + 1}</span>
      </div>
      <div className="newsMeta">
        <span className="newsAuthor">Автор: Ник автора</span>
        <span className="newsDate">Дата публикации: 01.01.2023</span>
      </div>
      <p className="newsContent">Краткое содержание новости...</p>
    </li>
  );
}
