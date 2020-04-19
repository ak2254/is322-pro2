import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';


import PageTabs from './Pagetabs';
import ListView from './ListView';
import AddTask from './AddTask';
import GridView from "./GridView";

class App extends React.Component {
  state = { view: 'grid',  tasks: [],
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
        this.setState({ tasks: response.data, sortedTasks: App.sortTasks(response.data) });
      }).catch (error => {
        this.setState({ errorMessage: error.message });
      });
  }

  static sortTasks(tasks) {
    return {
      todo: tasks.filter(post => post.column === 'todo'),
      inProgress: tasks.filter(post => post.column === 'in-progress'),
      review: tasks.filter(post => post.column === 'review'),
      done: tasks.filter(post => post.column === 'done'),
    }
  }
  onAddTask = (taskName) => {
    let t = this.state.tasks;
    t.push({
      title: taskName,
      id: this.state.tasks.length + 1,
      type: 'task',
      column: 'todo'
    });

    this.setState({ t });
  };
  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList });
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
        return (this.wrapPage(
            <GridView tasks={this.state.sortedTasks}  />
        ));

      case 'list':
        return (this.wrapPage(
          <ListView tasks={this.state.tasks} />


        ));
      case 'add':
        return (this.wrapPage(
            <AddTask onSubmit={this.onAddTask} />
        ));
      default:
        return (this.wrapPage(
          <h2>Invalid Tab, choose another</h2>
        ));
    }

  }
}

export default App;

