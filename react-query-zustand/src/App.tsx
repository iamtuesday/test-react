import "./App.css";
import { RepositoryCard } from "./components/molecules";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepositories";

const App = () => {
  const { data, isLoading } = useFetchRepositories("iamtuesday");
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      {data?.map((repository) => {
        return (
          <RepositoryCard
            key={repository.id}
            repository={repository}
            isFavorite={favoriteReposIds.includes(repository.id)}
          />
        );
      })}
    </section>
  );
};

export default App;
