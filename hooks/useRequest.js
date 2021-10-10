import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "http://localhost:8080/";

export const useGetDuodigito = (shouldFetch, path, params) => {
  if (!path) {
    throw new Error("O caminho para a requisição é obrigatório");
  }

  const url = baseUrl + path + `?numero=${params.numero}`;

  const { data, error } = useSWR(shouldFetch ? url : null, fetcher);

  return { data, error };
};
