import { Component } from 'react';
import './App.css';
import Sample511 from './Sample511';
import Sample522 from './Sample522';
import Sample5231 from './Sample5231';
import Sample532 from './Sample532';
import Sample533 from './Sample533';
import Sample621 from './Sample621';
import Sample631 from './Sample631';
import Sample641 from './Sample641';
import Sample731 from './Sample731';
import Sample733 from './Sample733';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <Sample731 color={this.state.color} />
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <Sample733 color={this.state.color} />
        </ErrorBoundary>
        <hr/>
        <Sample621 />
        <Sample631 />
        <Sample641 />
        <hr/>
        <Sample511 />
        <Sample522 />
        <Sample5231 />
        <Sample532 />
        <Sample533 ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
