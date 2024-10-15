import { makeAutoObservable, runInAction } from "mobx";
class NewsStore {
  //состояние для списка новостей
  stories = [];
  loading = true;
  // состояние для отдельной новости
  news = null;
  comments = [];
  childComments = [];
  constructor() {
    makeAutoObservable(this);
    this.fetchStories();
    this.startAutoRefresh();
  }

  startAutoRefresh() {
    setInterval(() => {
      this.fetchStories();
    }, 60000);
  }

  async fetchStories() {
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);
      const storyIds = await response.json();

      const storyPromises = storyIds
        .slice(0, 100)
        .map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json()));

      this.stories = await Promise.all(storyPromises);
    } catch (error) {
      console.error("Ошибка при загрузке новостей:", error);
    } finally {
      this.loading = false;
    }
  }

  refreshStories() {
    this.fetchStories();
    this.loading = true;
  }

  async fetchNews(id) {
    this.loading = true;
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      const newsData = await response.json();
      runInAction(() => {
        this.news = newsData;
        this.loading = false;
      });
      this.fetchComments(newsData.kids || []);
    } catch (error) {
      console.error("Ошибка");
      this.loading = false;
    }
  }

  async fetchComments(commentIds) {
    try {
      const commentPromises = commentIds.map(async (id) => {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return await response.json();
      });
      const comments = await Promise.all(commentPromises);
      runInAction(() => {
        this.comments = comments;
      });
    } catch (error) {
      console.error("Ошибка при загрузке комментариев:", error);
    }
  }

  async fetchChildComments(commentIds) {
    try {
      const commentPromises = commentIds.map(async (id) => {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return await response.json();
      });
      const comments = await Promise.all(commentPromises);
      runInAction(() => {
        this.childComments = comments;
      });
    } catch (error) {
      console.error("Ошибка при загрузке комментариев:", error);
    }
  }
  refreshComments() {
    if (this.news) {
      this.fetchComments(this.news.kids || []);
    }
  }
}

const store = new NewsStore();
export default store;
