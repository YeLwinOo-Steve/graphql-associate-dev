import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

const TRACKS = gql`
  query TracksForHome {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`; 

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading, data, error} = useQuery(TRACKS);
  return (
    <Layout grid>
      {
        <QueryResult loading={loading} error={error} data={data}>
          {data?.tracksForHome?.map(track => (
            <TrackCard key={track.id} track={track}></TrackCard>
          ))}
        </QueryResult>
      }
    </Layout>
  );
};

export default Tracks;
