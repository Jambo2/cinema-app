import { Router } from "express";

const router = Router();

router.get("/popular", async (req, res) => {
  try {
    const token = process.env.TMDB_ACCESS_TOKEN;

    if (!token) {
      return res.status(500).json({
        error: "TMDB_ACCESS_TOKEN не настроен на сервере",
      });
    }

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      console.error("TMDB вернул статус:", response.status);

      return res.status(response.status).json({
        error: "Не удалось получить популярные фильмы из TMDB",
      });
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Ошибка при запросе к TMDB:", error);

    res.status(500).json({
      error: "Внутренняя ошибка сервера",
    });
  }
});

export default router;
