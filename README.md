# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Day - 1

#### ?��� ?? js ?��?��?�� webpack ?��?��?�� ?��?�� jsx 처럼 ?��?��?�� ?�� ?��?��

#### jsx?��?��?�� <div></div>

```html
<div>Hi</div>
```

```javascript
React.createElement('div', null, 'Hi')
```

#### jsx?��?�� App ?��?��?��?��?�� ?��?��� ??

#### jsx ?��?�� ?��?��??? 같이� ?? ?��?��?��� ??

```javascript
const App = function () {
  return <div> Hi </div>
}

;<App />
```

#### javascipt?��?�� ?��?��� ?? 같다

```javascript
'use strict'

const App = function () {
  return /*#__PURE__*/ React.createElement('div', null, 'Hi')
}

/*#__PURE__*/
React.createElement(App, null)
```

#### 마�??막에 ?��?��?�� React � ?? ?��?��?�� ReactDOM?�� ?��?��?��?��.

```jsx
import ReactDOM from 'react-dom'

ReactDOM.render(<App />)
```

### Day - 2

#### ???� ?? ?��?��� ??

```jsx
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, /* ???�?? */ document.querySelector('.container'))
```

#### � ��?? API 콘솔

> https://console.cloud.google.com/home/dashboard?project=friendlychat-9446c

#### export � ???��?��거는 ?��름있?�� 값이?�� default ( #### ?��기�?? 같�?? 문장??? ?��?��?��. \*)

```javascript
// error
export {
    key: 'value'
}
```

#### jsx � ?? 간략?�� ?��?��?��?�� React � ?? ?��?��?��?�� ?��켜야?��?��.

```jsx
import React from 'react'
;<input /> // React.createElement('input', null);
```

### Day - 3

#### ?��?��?�� 컴포?��?��?�� ?��� ???��?�� ?��보�?? ????��?��?��� ?? ?�� ?�� ?��?��?��?��.

#### import?�� default ??? destructure ?��?��?�� ?��� ??

```jsx
import React, { Component } from 'react'
```

#### jsx?��?�� html ?��?�� ?��벤트 ?��?��� ?? ?��� ??

> on + {EventName}

```jsx
<input onChange={console.log} onClick={console.log} />
```

#### � �든 컴포?��?��?�� ?��?��� ?? ?��� ??, ?��?��� ?? � ???��� ?? ?��?��� ?? ?��?��?��?�� render � ?? 강제?��?��.

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

#### ?��?�� ?��?��?�� 반드?�� constructor?��?��?�� ?��?��?��?��

```jsx
constructor(props) {
        super(props)
        this.state = { term: '' }
    }
```

#### ?��?�� � ??경시 반드?�� this.setState � ?? ?��?��?��?�� ?��?��.

```jsx
 render() {
        return <input onChange={event => this.setState({ term: event.target.value })} />
    }
```

### Day - 4

#### ???� ??분의 경우 ?��보�?? ?��� ???��?�� ?��?�� � ??� ?? 컴포?��?��� ?? ?��� ?? � ???��?�� 권리 � ?? � ??� ??� ?? ?��?��.

#### Prettier ?��?��

.pritterrc 추�??

```json
{}
```

package.json ?�� ?��?��립트 추�??

```json
"format": "prettier \"src/**/*.{js,html,jsx}\" --write"
```

#### props ?��기기

```jsx
<VideoList videos={this.state.videos}></VideoList>
```

#### props 받기 ( ?��?��?�� )

```jsx
const VideoList = (props) => {
  return <ul className="col-md-4 list-group">{props.videos.length}</ul>
}
```

#### react for � ??

- key 값을 ?��?��?��� ?? ?��� �치?�� 조심?��?��

```jsx
const videoItems = props.videos.map((video) => {
  return <VideoListItem key={video.etag} video={video} />
})

return <ul className="col-md-4 list-group">{videoItems}</ul>
```

### Day - 5

#### jsx ?��?�� class????�� 반드?�� className?��?��� ?? ?��?��

#### decontructor � ?? props 분해

```jsx
const VideoDetail = ({ video }) => {}
```

#### iframe?�� src 같�?? native ?��?��?��?�� ?��?��� ???��

```jsx
<iframe src={url} frameborder="0" className="embed-responsive-item"></iframe>
```

#### props?�� null/undefined � ?? 처리

```jsx
if (!video) {
  return <div>Loading...</div>
}
```

#### embed?�� ?��?��?�� 좋�?? ratio 16:9 ( bootstrap ?��?�� )

```jsx
<div className="embed-responsive embed-responsive-16by9">
  <iframe src={url} className="embed-responsive-item"></iframe>
</div>
```

그외

```scss
$embed-responsive-aspect-ratios: ((21 9), (16 9), (4 3), (1 1)) !default;
```

### Day - 6

#### ?��?�� ?��벤트 받기 - props � ?? 콜백 ?��?�� ?��� ��???��

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

#### debounce ?��?��?��� ??

```javascript
const videoSearch = _.debounce((term) => {
  this.videoSearch(term)
}, 300)
```

### Day - 7

#### Redux � ?? ?��� ?? flux ?��?��?��?��?��??? ?��른점

- backbone??? collections � ?? � ??� ??� ??, flux?�� ?��� ?? store?��?�� � ??� ??고있?��?�� 반해 Redux?�� state � ?? 참조?��?�� ?�� ?��브젝?��� ?? 집중?��?��?��.

#### Reducer ??? ?��?��� ��???��?�� ?��?��?��?��� ?? 반환?��?�� ?��?��

#### Reducer?�� ?�� ?��?��

1. � ��???�� 만들� ??
2. ?��� ?? ?��결하� ??

### Day - 8

#### react-redux

� �액?��??? � �덕?��?�� ????�� ?��?��브러� ??

#### Container

� �액?�� 컴포?��?��로서, � �덕?��?�� ?��?�� � ??� �되?�� ?��?��?��?��?�� 직접?��?�� ?��결이 � ???��

#### prettierrc ?��?��

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

#### Component � ?? Container � ?? 만들� ??

1. mapStateToProps ?��?��

```jsx
function mapStateToProps(state) {
  return {
    books: state.books,
  }
}
```

2. connect � ?? � ???��?��� ?? ( currying � �조?��?��.)

```jsx
// connect?�� currying?�� ?��?��?��?��
export default connect(mapStateToProps)(BookList)
```

### Day - 9

#### � �덕?�� ?��?�� ?��결하� ??

1. ActionCreator 만들� ??

```javascript
// actions/index.js

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
```

2. ActionCreator?�� Props � ?? 바인?�� ?��� ??

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

3. Reducer 만들� ??

- � ��???�� ?��?��?�� ?��??? state � ?? 직접 � ???��?��?��� ?? ?��?��?��.

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

4. ?��?��� ?? props � ?? � ???��?��� ??

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

#### bootstrap �� ����� search bar ���ø�

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

#### jsx�� �ȿ����� this�� ���� component�� �ƴϹǷ�, bind( this ) ���־�� �Ѵ�.

```jsx
this.onInputChange = this.onInputChange.bind(this)
```
