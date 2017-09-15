import React, { Component } from 'react';

import WaveStream from 'react-wave-stream';
import Recorder from 'recorder-js';

import './styles.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      blob: null,
      isRecording: false,
      stream: null,
      analyserData: {data: [], lineTo: 0},
      didFailToGetStream: false,
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.download = this.download.bind(this);

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

    this.recorder = new Recorder(this.audioContext, {
      onAnalysed: data => this.setState({analyserData: data}),
    });

    navigator.mediaDevices.getUserMedia({audio: true})
      .then((stream) => {
        this.setState({stream});
        this.recorder.init(stream);
      })
      .catch(this.handleGetStreamFailure);
  }

  start() {
    this.setState({blob: null});

    this.recorder.start()
      .then(() => this.setState({isRecording: true}));
  }

  stop() {
    this.recorder.stop()
      .then(({blob}) => this.setState({
        isRecording: false,
        blob,
      }));
  }

  handleGetStreamFailure(error) {
    this.setState({
      didFailToGetStream: true
    });
  }

  download() {
    Recorder.download(this.state.blob, 'react-audio');

    this.setState({blob: null});
  }

  render() {
    const {
      isRecording,
      blob,
      didFailToGetStream,
    } = this.state;

    return (
      <div className="Studio">
        <div>
          <h1>Recording Studio</h1>

          {!didFailToGetStream ? (
            <div className="buttons">
              {isRecording ? (
                <button onClick={this.stop}>Stop Recording</button>
              ) : (
                <button onClick={this.start}>Start Recording</button>
              )}
              {blob && (
                <button
                  onClick={this.download}
                >
                  Download
                </button>
              )}
            </div>
          ) : (
            <div>
              <h3>Uh Oh!</h3>

              <p>
                There was an error getting the audio stream from your browser...
              </p>
              <p>
                Try restarting your browser. If that doesn't work, ensure you are using a modern browser such as chrome.
              </p>
            </div>
          )}
        </div>
        <div className="App-studio">
          <WaveStream
            {...this.state.analyserData}
            backgroundColor={'transparent'}
          />
        </div>
      </div>
    );
  }
}

export default App;
