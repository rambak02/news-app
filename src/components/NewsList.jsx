import "../styles/NewsList.css";
import { NewItem } from "./NewsItem";
import { observer } from "mobx-react";
import store from "../stores/newsStore";

export const NewsList = observer(() => {
  if (store.loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <ul className="newsList">
      {store.stories.map((story) => (
        <NewItem key={story.id} story={story} />
      ))}
    </ul>
  );
});
