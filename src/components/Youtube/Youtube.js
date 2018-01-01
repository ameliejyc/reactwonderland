import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config.json';
import Search from './Search';
import {
  Section,
  Title,
  VideoSection,
  VideoItem,
  Button
} from '../index.styles';

const rootUrl = 'https://www.googleapis.com/youtube/v3/search?maxResults=5';

const ytSearch = options => {
  if (!options.key) {
    throw new Error('Youtube search needs api key!');
  }

  const params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video'
  };

  return axios.get(rootUrl, {
    params
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
    ytSearch({ key: API_KEY, term: term })
      .then(response => {
        console.log(response.data.items);
        this.setState({
          videos: response.data.items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const videoSearch = term => {
      this.videoSearch(term);
    };

    const handleClick = () => {
      videoSearch();
    };

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
