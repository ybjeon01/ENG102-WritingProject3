import {useEffect, useRef} from 'react'

// reveal
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'

import './App.css'
import { SlideChangedMiddleware } from './utils';

import Context from './components/types/Context'
import Title from './components/Title'
import Intro from './components/Intro'
import Main1 from './components/Main1'
import Main2 from './components/Main2'
import Main3 from './components/Main3'

import Test from './components/Test'


function App() {
  let deck = useRef();
  let context = {slideChangedMiddleware: new SlideChangedMiddleware(deck)};

  useEffect(() => {
    deck.current = new Reveal({
      backgroundTransition: 'slide',
      transition: 'slide',
      slideNumber: true,
      disableLayout: true,
    });
    deck.current.initialize();

    context.slideChangedMiddleware.attach_listener();
    return context.slideChangedMiddleware.detach_listener;
  }); 

  return (
    <div className="App">
      <Context.Provider value={context}>
        <div className="reveal">
          <div className="slides">
            <Title indexv={0} indexh={0} />
            <Intro indexv={0} indexh={1} />
            <Main1 indexv={0} indexh={2} />
            <Main2 indexv={0} indexh={3} />
            <Main3 indexv={0} indexh={4} />
            <Test />
          </div>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App
