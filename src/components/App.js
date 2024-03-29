import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';


import PageTabs from './Pagetabs';
import ListView from './ListView';
import AddTask from './AddTask';
import GridView from "./GridView";

class App extends React.Component {
  state = { view: 'grid',  allTasks: [],
    sortedTasks:
        { todo: [], inProgress: [], review: [], done: []},
    errorText: ''
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
      axios.get(`http://my-json-server.typicode.com/bnissen24/project2DB/posts`)
          .then(response => {
              this.setState({ allTasks: response.data, sortedTasks: this.sortTasks(response.data) });
          }).catch (error => {
          this.setState({ errorMessage: error.message });
      });
  }

 sortTasks(tasks) {
    return {
      todo: tasks.filter(post => post.column === 'todo'),
      inProgress: tasks.filter(post => post.column === 'in-progress'),
      review: tasks.filter(post => post.column === 'review'),
      done: tasks.filter(post => post.column === 'done'),
    }
  }

  onUpdateTask(_task) {
    let allTasks = this.state.allTasks;
    const index = allTasks.findIndex(task => task.id === _task.id);
    allTasks[index] = _task;

    const sortedTasks = this.sortTasks(allTasks);
    this.setState({ allTasks, sortedTasks })


  }


  onAddTask = (task) => {

    let { allTasks } = this.state;

    task.column = 'todo';
    task.id = this.state.allTasks.length + 1;

    allTasks.push(task);
    let sortedTasks = this.sortTasks(allTasks);
    this.setState({ allTasks, sortedTasks, view: 'grid' });



  };




  onViewChange(view) {
    this.setState({ view });
  }
    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }


    render() {
    const { view } = this.state;

    switch (view) {
      case 'grid':
        case 'grid':
            return (this.wrapPage(
                <GridView tasks={this.state.sortedTasks} onUpdateTask={(task)=> this.onUpdateTask(task)} />
            ));

      case 'list':
        return (this.wrapPage(
          <ListView tasks={this.state.allTasks} />


        ));
      case 'add':
        return (this.wrapPage(
            <AddTask onSubmit={this.onAddTask.bind(this)} />
        ));
      default:
        return (this.wrapPage(
          <h2>Invalid Tab, choose another</h2>
        ));
    }

  }
}

export default App;

