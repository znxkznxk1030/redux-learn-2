# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Day - 1

#### ?ï¿½ï¿½ï¿ ?? js ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ webpack ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ jsx ì²˜ëŸ¼ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½

#### jsx?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ <div></div>

```html
<div>Hi</div>
```

```javascript
React.createElement('div', null, 'Hi')
```

#### jsx?ï¿½ï¿½?ï¿½ï¿½ App ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ï¿ ??

#### jsx ?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½??? ê°™ì´ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ï¿ ??

```javascript
const App = function () {
  return <div> Hi </div>
}

;<App />
```

#### javascipt?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ê°™ë‹¤

```javascript
'use strict'

const App = function () {
  return /*#__PURE__*/ React.createElement('div', null, 'Hi')
}

/*#__PURE__*/
React.createElement(App, null)
```

#### ë§ˆï¿½??ë§‰ì— ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ React ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ReactDOM?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½.

```jsx
import ReactDOM from 'react-dom'

ReactDOM.render(<App />)
```

### Day - 2

#### ???ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½ï¿ ??

```jsx
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, /* ???ï¿?? */ document.querySelector('.container'))
```

#### êµ ¬ï¿½?? API ì½˜ì†”

> https://console.cloud.google.com/home/dashboard?project=friendlychat-9446c

#### export ï¿ ???ï¿½ï¿½?ï¿½ï¿½ê±°ëŠ” ?ï¿½ï¿½ë¦„ìˆ?ï¿½ï¿½ ê°’ì´?ï¿½ï¿½ default ( #### ?ï¿½ï¿½ê¸°ï¿½?? ê°™ï¿½?? ë¬¸ì¥??? ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½. \*)

```javascript
// error
export {
    key: 'value'
}
```

#### jsx ï¿ ?? ê°„ëµ?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ React ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ì¼œì•¼?ï¿½ï¿½?ï¿½ï¿½.

```jsx
import React from 'react'
;<input /> // React.createElement('input', null);
```

### Day - 3

#### ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ì»´í¬?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ï¿ ???ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ë³´ï¿½?? ????ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½ ?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½.

#### import?ï¿½ï¿½ default ??? destructure ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ï¿ ??

```jsx
import React, { Component } from 'react'
```

#### jsx?ï¿½ï¿½?ï¿½ï¿½ html ?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ë²¤íŠ¸ ?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½ï¿ ??

> on + {EventName}

```jsx
<input onChange={console.log} onClick={console.log} />
```

#### ëª ¨ë“  ì»´í¬?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½ï¿ ??, ?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ï¿ ???ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ render ï¿ ?? ê°•ì œ?ï¿½ï¿½?ï¿½ï¿½.

```jsx
render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                <br />
                Value of the input: {this.state.term}
            </div>
        )
    }
```

#### ?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ë°˜ë“œ?ï¿½ï¿½ constructor?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½

```jsx
constructor(props) {
        super(props)
        this.state = { term: '' }
    }
```

#### ?ï¿½ï¿½?ï¿½ï¿½ ï¿ ??ê²½ì‹œ ë°˜ë“œ?ï¿½ï¿½ this.setState ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½.

```jsx
 render() {
        return <input onChange={event => this.setState({ term: event.target.value })} />
    }
```

### Day - 4

#### ???ï¿ ??ë¶„ì˜ ê²½ìš° ?ï¿½ï¿½ë³´ï¿½?? ?ï¿½ï¿½ï¿ ???ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ ï¿ ??ï¿ ?? ì»´í¬?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½ï¿ ?? ï¿ ???ï¿½ï¿½?ï¿½ï¿½ ê¶Œë¦¬ ï¿ ?? ï¿ ??ï¿ ??ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½.

#### Prettier ?ï¿½ï¿½?ï¿½ï¿½

.pritterrc ì¶”ï¿½??

```json
{}
```

package.json ?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ë¦½íŠ¸ ì¶”ï¿½??

```json
"format": "prettier \"src/**/*.{js,html,jsx}\" --write"
```

#### props ?ï¿½ï¿½ê¸°ê¸°

```jsx
<VideoList videos={this.state.videos}></VideoList>
```

#### props ë°›ê¸° ( ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ )

```jsx
const VideoList = (props) => {
  return <ul className="col-md-4 list-group">{props.videos.length}</ul>
}
```

#### react for ï¿ ??

- key ê°’ì„ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½ë¦ ¬ì¹˜?ï¿½ï¿½ ì¡°ì‹¬?ï¿½ï¿½?ï¿½ï¿½

```jsx
const videoItems = props.videos.map((video) => {
  return <VideoListItem key={video.etag} video={video} />
})

return <ul className="col-md-4 list-group">{videoItems}</ul>
```

### Day - 5

#### jsx ?ï¿½ï¿½?ï¿½ï¿½ class????ï¿½ï¿½ ë°˜ë“œ?ï¿½ï¿½ className?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½

#### decontructor ï¿ ?? props ë¶„í•´

```jsx
const VideoDetail = ({ video }) => {}
```

#### iframe?ï¿½ï¿½ src ê°™ï¿½?? native ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ï¿ ???ï¿½ï¿½

```jsx
<iframe src={url} frameborder="0" className="embed-responsive-item"></iframe>
```

#### props?ï¿½ï¿½ null/undefined ï¿ ?? ì²˜ë¦¬

```jsx
if (!video) {
  return <div>Loading...</div>
}
```

#### embed?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ì¢‹ï¿½?? ratio 16:9 ( bootstrap ?ï¿½ï¿½?ï¿½ï¿½ )

```jsx
<div className="embed-responsive embed-responsive-16by9">
  <iframe src={url} className="embed-responsive-item"></iframe>
</div>
```

ê·¸ì™¸

```scss
$embed-responsive-aspect-ratios: ((21 9), (16 9), (4 3), (1 1)) !default;
```

### Day - 6

#### ?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ë²¤íŠ¸ ë°›ê¸° - props ï¿ ?? ì½œë°± ?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ê² ¨ï¿½???ï¿½ï¿½

```jsx
// parent
<VideoList
onVideoSelect={video => this.setState({ selectedVideo: video })} />

// child - 1

<VideoListItem onVideoSelect={props.onVideoSelect} />;

// child - 2 ( emit )
<li onClick={() => onVideoSelect(video)} className="list-group-item">
```

```jsx
// parent
videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

 <SearchBar onSearchTermChange={term => this.videoSearch(term)} />

// child ( emit )
  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)

  }

<input
  value={this.state.term}
  onChange={(event) => this.onInputChange(event.target.value)}
/>

```

#### debounce ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ï¿ ??

```javascript
const videoSearch = _.debounce((term) => {
  this.videoSearch(term)
}, 300)
```

### Day - 7

#### Redux ï¿ ?? ?ï¿½ï¿½ï¿ ?? flux ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½??? ?ï¿½ï¿½ë¥¸ì 

- backbone??? collections ï¿ ?? ï¿ ??ï¿ ??ï¿ ??, flux?ï¿½ï¿½ ?ï¿½ï¿½ï¿ ?? store?ï¿½ï¿½?ï¿½ï¿½ ï¿ ??ï¿ ??ê³ ìˆ?ï¿½ï¿½?ï¿½ï¿½ ë°˜í•´ Redux?ï¿½ï¿½ state ï¿ ?? ì°¸ì¡°?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ ?ï¿½ï¿½ë¸Œì ?ï¿½ï¿½ï¿ ?? ì§‘ì¤‘?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½.

#### Reducer ??? ?ï¿½ï¿½?ï¿½ï¿½ë¦ ¬ï¿½???ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ë°˜í™˜?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½

#### Reducer?ï¿½ï¿½ ?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½

1. ë¦ ¬ï¿½???ï¿½ï¿½ ë§Œë“¤ï¿ ??
2. ?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½ê²°í•˜ï¿ ??

### Day - 8

#### react-redux

ë¦ ¬ì•¡?ï¿½ï¿½??? ë¦ ¬ë•?ï¿½ï¿½?ï¿½ï¿½ ????ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ë¸ŒëŸ¬ï¿ ??

#### Container

ë¦ ¬ì•¡?ï¿½ï¿½ ì»´í¬?ï¿½ï¿½?ï¿½ï¿½ë¡œì„œ, ë¦ ¬ë•?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ ï¿ ??ë¦ ¬ë˜?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ì§ì ‘?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ê²°ì´ ï¿ ???ï¿½ï¿½

#### prettierrc ?ï¿½ï¿½?ï¿½ï¿½

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

#### Component ï¿ ?? Container ï¿ ?? ë§Œë“¤ï¿ ??

1. mapStateToProps ?ï¿½ï¿½?ï¿½ï¿½

```jsx
function mapStateToProps(state) {
  return {
    books: state.books,
  }
}
```

2. connect ï¿ ?? ï¿ ???ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ( currying êµ ¬ì¡°?ï¿½ï¿½?ï¿½ï¿½.)

```jsx
// connect?ï¿½ï¿½ currying?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½
export default connect(mapStateToProps)(BookList)
```

### Day - 9

#### ë¦ ¬ë•?ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½ê²°í•˜ï¿ ??

1. ActionCreator ë§Œë“¤ï¿ ??

```javascript
// actions/index.js

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
```

2. ActionCreator?ï¿½ï¿½ Props ï¿ ?? ë°”ì¸?ï¿½ï¿½ ?ï¿½ï¿½ï¿ ??

```jsx
// containers/book-list.js
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectBook } from '../actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
```

3. Reducer ë§Œë“¤ï¿ ??

- ë¦ ¬ï¿½???ï¿½ï¿½ ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ ?ï¿½ï¿½??? state ï¿ ?? ì§ì ‘ ï¿ ???ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? ?ï¿½ï¿½?ï¿½ï¿½?ï¿½ï¿½.

```javascript
// reducers/activeBook.js
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state
}
```

```javascript
// reducers/index.js
import { combineReducers } from 'redux'

import BooksReducer from './reducer-books'
import ActiveBook from './reducer-active-book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
})

export default rootReducer
```

4. ?ï¿½ï¿½?ï¿½ï¿½ï¿ ?? props ï¿ ?? ï¿ ???ï¿½ï¿½?ï¿½ï¿½ï¿ ??

```jsx
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  }
}

export default connect(mapStateToProps)(BookDetail)
```

### Day - 10

#### bootstrap À» »ç¿ëÇÑ search bar ÅÛÇÃ¸´

```html
<form className="input-group">
  <input
    placeholder="Get a five-day forecast in your favorite cities"
    className="form-control"
    value="{this.state.term}"
    onChange="{this.onInputChange.bind(this)}"
  />
  <span className="input-group-btn">
    <button type="submit" className="btn btn-secondary">Submit</button>
  </span>
</form>
```

#### jsx¹® ¾È¿¡¼­´Â this°¡ ÇöÀç component°¡ ¾Æ´Ï¹Ç·Î, bind( this ) ÇØÁÖ¾î¾ß ÇÑ´Ù.

```jsx
this.onInputChange = this.onInputChange.bind(this)
```
