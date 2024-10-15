import { makeAutoObservable } from "mobx";

class NewsStore {
  stories = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
    this.fetchStories();
  }

  async fetchStories() {
    try {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/newstories.json"
      );
      const storyIds = await response.json();
     
      const storyPromises = storyIds
        .slice(0, 100)
        .map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (res) => res.json()
          )
        );

      this.stories = await Promise.all(storyPromises);
    } catch (error) {
      console.error("Ошибка при загрузке новостей:", error);
    } finally {
      this.loading = false;
    }
  }
}

const store = new NewsStore();
export default store;
