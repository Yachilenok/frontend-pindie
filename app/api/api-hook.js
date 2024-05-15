"use client";

import { useState, useEffect } from "react";
import { getNormalizedGamesDataByCategory, isResponseOk } from "./api-utils";
import { BASE_URL } from "./config";

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category);
      setData(data);
    }
    fetchData();
  }, []);
  const response = fetch(BASE_URL);
  if (!isResponseOk(BASE_URL)) {
    console.error("Не удалось получить данные");
    return [];
  }
  return response.data;
};
