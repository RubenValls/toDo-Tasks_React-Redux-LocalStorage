import './App.css';
import AllTasks from './components/allTasks';
import Footer from './components/footer';
import Header from './components/header';
import NewTask from './components/newTask';
import ShowTasksHeader from './components/showTasksHeader';

function App() {
  return (
    <div className="App">
      <Header/>
      <NewTask/>
      <ShowTasksHeader/>
      <AllTasks/>
      <Footer/>
    </div>
  );
}

export default App;
