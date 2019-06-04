import React from 'react'
import { Store } from "./Store";
import { EpisodeProps } from './interface';
import { toggleFavAction } from './Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function FavesPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: EpisodeProps = {
    episodes: state.favorites,
    favorites: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  )
}
