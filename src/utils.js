class SlideChangedMiddleware {
  constructor(deck) {
    this.deck = deck;
    this.context = {};
  }

  register(indexv, indexh, callback) {
    this.context[JSON.stringify([indexv, indexh])] = callback;
  }

  attach_listener() {
    this.deck.current.on("slidechanged", this.handler);
  }

  detach_listener() {
    this.deck.current.off("slidechanged", this.handler);
  }

  handler = (e) => {
    try {
      let callback = this.context[JSON.stringify([e.indexv, e.indexh])];
      callback();
    }
    catch(err) {
      // console.log('middleware err: ', err);
    }
  } 
}

export {SlideChangedMiddleware}