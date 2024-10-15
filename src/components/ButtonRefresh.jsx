import { observer } from "mobx-react";
import store from "../stores/newsStore";
import "../styles/ButtonRefresh.css"

export const ButtonRefresh = observer(() => {
  return (
    <button onClick={() => store.refreshStories()} className="buttonRefresh">
      Обновить
    </button>
  );
});
