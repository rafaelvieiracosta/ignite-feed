import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jane Cooper",
      role: "Dev Front-End",
    },
    publishedAt: new Date("2022-05-11 08:13:38"),
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Cooper Jane",
      role: "Dev Front-End",
    },
    publishedAt: new Date("2022-05-28 08:13:38"),
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
