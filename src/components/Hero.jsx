import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mt-10 md:py-16 py-12  rounded-3xl border from-violet-950 via-zinc-950 to-black border-violet-900/40 bg-linear-to-br ">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm uppercase tracking-widest text-violet-400">
          КИНО, КОТОРОЕ ОСТАЁТСЯ С ТОБОЙ
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl leading-tight">
          Открой свой следующий любимый фильм
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 leading-relaxed">
          Исследуй новые миры, захватывающие истории и фильмы, к которым хочется
          возвращаться.
        </p>
        <div className=" flex mt-8 gap-4">
          <Link
            to="/films"
            className=" hover:bg-violet-500 transition-colors rounded-xl text-white bg-violet-600 px-6 py-3 font-semibold"
          >
            Смотреть фильм
          </Link>
          <button className=" border border-violet-500/50 bg-transparent hover:bg-violet-500/10 rounded-xl py-3 px-6">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
}
