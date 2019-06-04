import { Action, Dispatch, Episode, State } from './interface';

export const fetchData = async (dispatch: Dispatch) => {
  const url = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(url);
  const dataJson = await data.json();
  const cleanData = dataJson._embedded.episodes.filter((e: Episode) => e.image)

  return dispatch({
    type: "FETCH_DATA",
    payload: cleanData
  });
};

export const toggleFavAction = (state: State, dispatch: Dispatch, episode: Episode): any => {
  const episodeInFav: boolean = state.favorites.includes(episode);

  let dispatchObj: Action = {
    type: 'ADD_FAV',
    payload: episode
  }

  if (episodeInFav) {
    const favsWithoutEpisode = state.favorites.filter((ep: Episode) => ep.id !== episode.id)

    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favsWithoutEpisode
    }
  }

  return dispatch(dispatchObj);
};
