import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LeaderBoard from './LeaderBoard';

const apiData = [
  {"username":"diomed","img":"https://avatars3.githubusercontent.com/u/72777?v=3","alltime":4627,"recent":582,"lastUpdate":"2017-06-12T16:00:57.068Z"},{"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":5104,"recent":527,"lastUpdate":"2017-06-17T08:41:28.338Z"},{"username":"Manish-Giri","img":"https://avatars1.githubusercontent.com/u/11348778?v=3","alltime":5628,"recent":477,"lastUpdate":"2017-06-12T17:08:46.042Z"}
  ]

it('renders without crashing', () => {
  shallow(<LeaderBoard apiData={apiData} />);
})

