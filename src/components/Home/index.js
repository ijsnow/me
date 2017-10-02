import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import LinkHeader from '../LinkHeader';
import Paragraph from '../Paragraph';

const Home = () => (
  <div className="Home">
    <div className="block">
      <h1>Isaac Snow</h1>
      <p>Full Stack Software Engineer</p>
      <p>
        Contact Me: <a href="mailto:isaacjsnow@gmail.com">isaacjsnow@gmail.com</a></p>
      <p>Resume: <Link to="/pdf/resume.pdf" target="_blank">.pdf</Link></p>
    </div>
    <section>
      <h1>Open Source Work</h1>
      <div className="list">
        <div>
          <LinkHeader href="https://storybooks.js.org/">
            contributed to react storybooks
          </LinkHeader>
          <Paragraph>Added the feature to see the preview dimensions</Paragraph>
          <Paragraph><a href="https://github.com/storybooks/storybook-ui/pull/70">PR</a></Paragraph>
        </div>
        <div>
          <LinkHeader href="https://github.com/ijsnow/studiojs">
            studio.js
          </LinkHeader>
          <Paragraph>a collection of tools to create your own recording studio in browser</Paragraph>
          <Paragraph>check out a <Link to="/studio">demo</Link></Paragraph>
          <Paragraph>
            <a href="https://www.npmjs.com/package/recorder-js">recorder-js</a>
            &nbsp;is an easy to use audio recorder
          </Paragraph>
          <Paragraph>
            <a href="https://www.npmjs.com/package/react-wave-stream">react-wave-stream</a>
            &nbsp;visualizes frequency data from audio streams
          </Paragraph>
        </div>
        <div>
          <LinkHeader href="https://github.com/ijsnow/react-simple-accordion">
            react-simple-accordion
          </LinkHeader>
          <Paragraph>a simple accordion built with react.js</Paragraph>
          <Paragraph>check out a <Link to="/accordion">demo</Link></Paragraph>
        </div>
        <div>
          <LinkHeader href="https://github.com/ijsnow/gittp">
            gittp
          </LinkHeader>
          <Paragraph>easily serve git repos over http</Paragraph>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
