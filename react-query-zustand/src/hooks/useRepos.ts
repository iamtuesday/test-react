import { Repository } from "../interfaces";
import baseApi from "../lib/baseApi";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

// const fetchRepos = async () => {
//   const { data } = await baseApi.get<Repository[]>("/users/iamtuesday/repos");
//   return data;
// };

// export const useFetchRepositories = () => {
//     return useQuery(["repositories"], fetchRepos)
// };


const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await baseApi.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
};

export const useFetchRepositories = (githubUser: string) => {
    return useQuery(["repositories", githubUser], fetchRepos)
};
