import './App.css';
import AddTodo from './component/AddTodo';
import ListTodos from './component/ListTodos';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <ListTodos/>
    </div>
  );
}

export default App;
