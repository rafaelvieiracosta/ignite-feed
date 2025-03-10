import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
