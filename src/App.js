import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/post/PostsView';

function App() {
  return (
    <div className="App">
      <h2>Counter App</h2>
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
