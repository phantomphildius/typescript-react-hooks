import React from 'react'
import { Episode, EpisodeProps } from './interface';

export default function EpisodesList(props: EpisodeProps): Array<JSX.Element> {
  const { episodes, favorites, store: { state, dispatch }, toggleFavAction } = props;
  return episodes.map((episode: Episode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space' }}>
          <div>{episode.season} | {episode.number}</div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favorites.find((fav: Episode) => fav.id === episode.id) ? 'x' : 'fav'}
          </button>
        </section>
      </section>
    );
  })
}
