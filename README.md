# React-isomorphic-tutorial

[React Tutorial](http://facebook.github.io/react/docs/tutorial.html) with server side rendering and client hook. Original tutorial just describes client rendering. I implemented the sample app by isomorphic approach.

## How to run this app?
Install dependencies:

```bash
$ npm install
```

Create bundle from JSX:

```bash
$ grunt build
```

Start the server:

```bash
$ node app.js
```

Access [http://localhost:3000/chat](http://localhost:3000/chat) on your browser.

If you want to update `public/bundle/index.js` incrementally...

```
$ grunt watch
```

## Implementation note
- Revamped [express-react-views](https://github.com/reactjs/express-react-views) to hook partial template on client rendering
- `views/**/*.jsx` are converted to a single bundle `public/build/index.js` by [browserify](http://browserify.org) and [grunt-react](https://github.com/ericclemmons/grunt-react)
