type episodeArray = {
  id: string;
  name: string;
};

export interface SelectedValueTypes {
  id: string;
  image: string;
  episode: episodeArray[];
  name: string;
  __typename: string;
}
