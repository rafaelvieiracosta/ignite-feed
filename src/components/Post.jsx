import { Comment } from "./Comment.jsx";

import sytles from "./Post.module.css";

export function Post() {
  return (
    <article className={sytles.post}>
      <header>
        <div className={sytles.author}>
          <img
            className={sytles.authorAvatar}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className={sytles.authorInfo}>
            <strong>Jane Cooper</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time title="11 de Mais às 08:13" dateTime="2022-05-11 08:13:38">
          Publicado há 1h
        </time>
      </header>

      <div className={sytles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={sytles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
