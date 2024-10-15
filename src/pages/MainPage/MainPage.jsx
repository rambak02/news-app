import { Header } from "../../components/Header";
import { NewsList } from "../../components/NewsList";
import "./MainPage.css";


export function MainPage() {
  return (
    <div className="container">
      <Header />
      <NewsList />
    </div>
  );
}

