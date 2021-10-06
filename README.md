# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Day - 1

#### ?占쏙옙占 �? js ?占쏙옙?占쏙옙?占쏙옙 webpack ?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙 jsx 泥섎읆 ?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙 ?占쏙옙?占쏙옙

#### jsx?占쏙옙?占쏙옙?占쏙옙 <div></div>

```html
<div>Hi</div>
```

```javascript
React.createElement('div', null, 'Hi')
```

#### jsx?占쏙옙?占쏙옙 App ?占쏙옙?占쏙옙?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙占 �?

#### jsx ?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙??? 媛숈씠占 �? ?占쏙옙?占쏙옙?占쏙옙占 �?

```javascript
const App = function () {
  return <div> Hi </div>
}

;<App />
```

#### javascipt?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙占 �? 媛숇떎

```javascript
'use strict'

const App = function () {
  return /*#__PURE__*/ React.createElement('div', null, 'Hi')
}

/*#__PURE__*/
React.createElement(App, null)
```

#### 留덌옙??留됱뿉 ?占쏙옙?占쏙옙?占쏙옙 React 占 �? ?占쏙옙?占쏙옙?占쏙옙 ReactDOM?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙?占쏙옙.

```jsx
import ReactDOM from 'react-dom'

ReactDOM.render(<App />)
```

### Day - 2

#### ???占 �? ?占쏙옙?占쏙옙占 �?

```jsx
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, /* ???占�? */ document.querySelector('.container'))
```

#### 援 э옙?? API 肄섏넄

> https://console.cloud.google.com/home/dashboard?project=friendlychat-9446c

#### export 占 �??占쏙옙?占쏙옙嫄곕뒗 ?占쏙옙由꾩엳?占쏙옙 媛믪씠?占쏙옙 default ( #### ?占쏙옙湲곤옙?? 媛숋옙?? 臾몄옣??? ?占쏙옙?占쏙옙?占쏙옙. \*)

```javascript
// error
export {
    key: 'value'
}
```

#### jsx 占 �? 媛꾨왂?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙?占쏙옙 React 占 �? ?占쏙옙?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙耳쒖빞?占쏙옙?占쏙옙.

```jsx
import React from 'react'
;<input /> // React.createElement('input', null);
```

### Day - 3

#### ?占쏙옙?占쏙옙?占쏙옙 而댄룷?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙占 �??占쏙옙?占쏙옙 ?占쏙옙蹂댐옙?? ????占쏙옙?占쏙옙?占쏙옙占 �? ?占쏙옙 ?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙?占쏙옙.

#### import?占쏙옙 default ??? destructure ?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙占 �?

```jsx
import React, { Component } from 'react'
```

#### jsx?占쏙옙?占쏙옙 html ?占쏙옙?占쏙옙 ?占쏙옙踰ㅽ듃 ?占쏙옙?占쏙옙占 �? ?占쏙옙占 �?

> on + {EventName}

```jsx
<input onChange={console.log} onClick={console.log} />
```

#### 紐 ⑤뱺 而댄룷?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙占 �? ?占쏙옙占 �?, ?占쏙옙?占쏙옙占 �? 占 �??占쏙옙占 �? ?占쏙옙?占쏙옙占 �? ?占쏙옙?占쏙옙?占쏙옙?占쏙옙 render 占 �? 媛뺤젣?占쏙옙?占쏙옙.

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

#### ?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙 諛섎뱶?占쏙옙 constructor?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙?占쏙옙

```jsx
constructor(props) {
        super(props)
        this.state = { term: '' }
    }
```

#### ?占쏙옙?占쏙옙 占 �?寃쎌떆 諛섎뱶?占쏙옙 this.setState 占 �? ?占쏙옙?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙.

```jsx
 render() {
        return <input onChange={event => this.setState({ term: event.target.value })} />
    }
```

### Day - 4

#### ???占 �?遺꾩쓽 寃쎌슦 ?占쏙옙蹂댐옙?? ?占쏙옙占 �??占쏙옙?占쏙옙 ?占쏙옙?占쏙옙 占 �?占 �? 而댄룷?占쏙옙?占쏙옙占 �? ?占쏙옙占 �? 占 �??占쏙옙?占쏙옙 沅뚮━ 占 �? 占 �?占 �?占 �? ?占쏙옙?占쏙옙.

#### Prettier ?占쏙옙?占쏙옙

.pritterrc 異뷂옙??

```json
{}
```

package.json ?占쏙옙 ?占쏙옙?占쏙옙由쏀듃 異뷂옙??

```json
"format": "prettier \"src/**/*.{js,html,jsx}\" --write"
```

#### props ?占쏙옙湲곌린

```jsx
<VideoList videos={this.state.videos}></VideoList>
```

#### props 諛쏄린 ( ?占쏙옙?占쏙옙?占쏙옙 )

```jsx
const VideoList = (props) => {
  return <ul className="col-md-4 list-group">{props.videos.length}</ul>
}
```

#### react for 占 �?

- key 媛믪쓣 ?占쏙옙?占쏙옙?占쏙옙占 �? ?占쏙옙由 ъ튂?占쏙옙 議곗떖?占쏙옙?占쏙옙

```jsx
const videoItems = props.videos.map((video) => {
  return <VideoListItem key={video.etag} video={video} />
})

return <ul className="col-md-4 list-group">{videoItems}</ul>
```

### Day - 5

#### jsx ?占쏙옙?占쏙옙 class????占쏙옙 諛섎뱶?占쏙옙 className?占쏙옙?占쏙옙占 �? ?占쏙옙?占쏙옙

#### decontructor 占 �? props 遺꾪빐

```jsx
const VideoDetail = ({ video }) => {}
```

#### iframe?占쏙옙 src 媛숋옙?? native ?占쏙옙?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙占 �??占쏙옙

```jsx
<iframe src={url} frameborder="0" className="embed-responsive-item"></iframe>
```

#### props?占쏙옙 null/undefined 占 �? 泥섎━

```jsx
if (!video) {
  return <div>Loading...</div>
}
```

#### embed?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙 醫뗰옙?? ratio 16:9 ( bootstrap ?占쏙옙?占쏙옙 )

```jsx
<div className="embed-responsive embed-responsive-16by9">
  <iframe src={url} className="embed-responsive-item"></iframe>
</div>
```

洹몄쇅

```scss
$embed-responsive-aspect-ratios: ((21 9), (16 9), (4 3), (1 1)) !default;
```

### Day - 6

#### ?占쏙옙?占쏙옙 ?占쏙옙踰ㅽ듃 諛쏄린 - props 占 �? 肄쒕갚 ?占쏙옙?占쏙옙 ?占쏙옙寃 ⑨옙???占쏙옙

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

#### debounce ?占쏙옙?占쏙옙?占쏙옙占 �?

```javascript
const videoSearch = _.debounce((term) => {
  this.videoSearch(term)
}, 300)
```

### Day - 7

#### Redux 占 �? ?占쏙옙占 �? flux ?占쏙옙?占쏙옙?占쏙옙?占쏙옙?占쏙옙??? ?占쏙옙瑜몄젏

- backbone??? collections 占 �? 占 �?占 �?占 �?, flux?占쏙옙 ?占쏙옙占 �? store?占쏙옙?占쏙옙 占 �?占 �?怨좎엳?占쏙옙?占쏙옙 諛섑빐 Redux?占쏙옙 state 占 �? 李몄“?占쏙옙?占쏙옙 ?占쏙옙 ?占쏙옙釉뚯젥?占쏙옙占 �? 吏묒쨷?占쏙옙?占쏙옙?占쏙옙.

#### Reducer ??? ?占쏙옙?占쏙옙由 э옙???占쏙옙?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙?占쏙옙占 �? 諛섑솚?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙

#### Reducer?占쏙옙 ?占쏙옙 ?占쏙옙?占쏙옙

1. 由 э옙???占쏙옙 留뚮뱾占 �?
2. ?占쏙옙占 �? ?占쏙옙寃고븯占 �?

### Day - 8

#### react-redux

由 ъ븸?占쏙옙??? 由 щ뜒?占쏙옙?占쏙옙 ????占쏙옙 ?占쏙옙?占쏙옙釉뚮윭占 �?

#### Container

由 ъ븸?占쏙옙 而댄룷?占쏙옙?占쏙옙濡쒖꽌, 由 щ뜒?占쏙옙?占쏙옙 ?占쏙옙?占쏙옙 占 �?由 щ릺?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙?占쏙옙?占쏙옙 吏곸젒?占쏙옙?占쏙옙 ?占쏙옙寃곗씠 占 �??占쏙옙

#### prettierrc ?占쏙옙?占쏙옙

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

#### Component 占 �? Container 占 �? 留뚮뱾占 �?

1. mapStateToProps ?占쏙옙?占쏙옙

```jsx
function mapStateToProps(state) {
  return {
    books: state.books,
  }
}
```

2. connect 占 �? 占 �??占쏙옙?占쏙옙占 �? ( currying 援 ъ“?占쏙옙?占쏙옙.)

```jsx
// connect?占쏙옙 currying?占쏙옙 ?占쏙옙?占쏙옙?占쏙옙?占쏙옙
export default connect(mapStateToProps)(BookList)
```

### Day - 9

#### 由 щ뜒?占쏙옙 ?占쏙옙?占쏙옙 ?占쏙옙寃고븯占 �?

1. ActionCreator 留뚮뱾占 �?

```javascript
// actions/index.js

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
```

2. ActionCreator?占쏙옙 Props 占 �? 諛붿씤?占쏙옙 ?占쏙옙占 �?

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

3. Reducer 留뚮뱾占 �?

- 由 э옙???占쏙옙 ?占쏙옙?占쏙옙?占쏙옙 ?占쏙옙??? state 占 �? 吏곸젒 占 �??占쏙옙?占쏙옙?占쏙옙占 �? ?占쏙옙?占쏙옙?占쏙옙.

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

4. ?占쏙옙?占쏙옙占 �? props 占 �? 占 �??占쏙옙?占쏙옙占 �?

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

#### bootstrap 을 사용한 search bar 템플릿

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

#### jsx문 안에서는 this가 현재 component가 아니므로, bind( this ) 해주어야 한다.

```jsx
this.onInputChange = this.onInputChange.bind(this)
```

#### form tag는 기본적으로 엔터키를 누르거나 내부의 type이 submit인 버튼이 있다면, 페이지를 리로드 한다. ( http://{url}/? )

#### form 의 submit 이벤트 핸들링 하기

```jsx
  onFormSubmit(event) {
    event.preventDefault()
  }

<form onSubmit={this.onFormSubmit} className="input-group">
```

#### open weather api e

https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=d677723bda88ec90e787664f56ed62cf
