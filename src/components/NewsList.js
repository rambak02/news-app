import "../styles/NewsList.css";
import { NewItem } from "./NewItem";

export function NewsList() {
  return (
    <ul className="newsList">
      {Array.from({ length: 2 }).map((__, index) => (
        <NewItem key={index} number={index} />
      ))}
    </ul>
  );
}
