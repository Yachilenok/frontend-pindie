"use client";

import { useGetDataByCategory } from "../api/api-hook";
import { endpoints } from "@/app/api/config";
import { CardsListSection } from "../components/CardsListSection/CardListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Runner() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      {runnerGames ? (
        <CardsListSection id="runner" title="Ранеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
