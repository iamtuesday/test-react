import { FC } from "react";
import { Repository } from "../../interfaces";
import { Button } from "../atoms";
import { useFavoriteReposStore } from "../../store/favoriteRepositories";


interface RepositoryProps {
  repository: Repository;
  isFavorite: boolean
}


export const RepositoryCard: FC<RepositoryProps> = ({ repository, isFavorite }) => {
  
const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo)

  const toggleFavorite = () => {
    if(isFavorite){
      removeFavoriteRepo(repository.id)
      return;
    }
    addFavoriteRepo(repository.id)
  }
  return (
    <div>
      <h2>{repository.name}</h2>
      <Button variant="primary" onClick={toggleFavorite}>{
        isFavorite ? "Dislike" : "♥"
      }</Button>
    </div>
  );
};
