import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { OpenAI } from './Components/OpenAI';
//import { useState, useCallback } from 'react';

//Syntax: Authorization: Bearer YOUR_API_KEY
//Syntax: organization: YOUR_API_KEY

export interface RequestParams {url: string, method: string}

class App extends React.Component <{},{data: unknown, requestParams: RequestParams}> {

  constructor(props: {}) {
    super(props);
    this.state = {
      data: null,
      requestParams: {url:"", method:"GET"},
    };
  }

  callApi = (requestParams: RequestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    this.setState({data, requestParams});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
        <OpenAI />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;