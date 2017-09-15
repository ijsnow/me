import React from 'react';

import SimpleAccordion from 'react-simple-accordion';

import './styles.css'

const groups = [
  {
    title: 'Some things I like to do',
    list: [
      'Learn',
      'Build things',
      'Rock Climb',
      'Ski',
      'Travel'
    ]
  },
  {
    title: 'Some things I like',
    list: [
      'Puns',
      'Books',
      'Weird Rural Towns(like Jasper, Arkansas)'
    ]
  },
];

const Accordion = () => (
  <div className="Accordion">
    <h1>
      <a href="https://github.com/ijsnow/react-simple-accordion">
        react-simple-accordion
      </a>
      &nbsp;demo
    </h1>
    <SimpleAccordion
      list={groups}
      triggerClassName="trigger"
    >
      {({props: {title, list}, isOpen}) => ({
        header: () => (
          <h2>
            {`${isOpen ? 'Close' : 'Expand'} - ${title}`}
          </h2>
        ),
        body: () => (
          <ul className="list">
            {list.map(thing => <li>{thing}</li>)}
          </ul>
        ),
      })}
    </SimpleAccordion>
  </div>
);

export default Accordion;