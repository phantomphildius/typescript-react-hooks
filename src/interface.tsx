export type Dispatch = React.Dispatch<Action>

export interface State {
  episodes: Array<Episode>
  favorites: Array<Episode>
}

export interface Action {
  type: string
  payload: any
}

export interface Episode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string, original: string }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}

export interface EpisodeProps {
  episodes: Array<Episode>,
  toggleFavAction: (state: State, dispatch: Dispatch, episode: Episode) => Action,
  store: { state: State, dispatch: Dispatch },
  favorites: Array<Episode>
}
