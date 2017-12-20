import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config.env';
import Search from './Search';
import {
  Section,
  Title,
  VideoSection,
  VideoItem,
  Button
} from '../index.styles';

const rootUrl = 'https://www.googleapis.com/youtube/v3/search?maxResults=5';

const YTSearch = (options, callback) => {
  if (!options.key) {
    throw new Error('Youtube search needs api key!');
  }

  const params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video'
  };

  axios
    .get(rootUrl, {
      params
    })
    .then(function(response) {
      if (callback) callback(response.data.items);
    })
    .catch(function(error) {
      console.log(error);
    });
};

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log(API_KEY);
      this.setState({
        videos: videos
      });
    });
  }

  render() {
    const videoSearch = term => {
      this.videoSearch(term);
    };

    const handleClick = () => {
      videoSearch();
    };

    // console.log(API_KEY);

    return (
      <Section id="youtube">
        <Title>Search Youtube</Title>
        <VideoSection>
          {this.state.videos.map(video => <VideoItem>{video}</VideoItem>)}
        </VideoSection>
        <Search onSearchTermChange={videoSearch} />
        <Button onClick={handleClick}>Search</Button>
      </Section>
    );
  }
}

export default Youtube;
