class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = { done: props.done,  
                    text: props.text }

    this.handleClick = this.handleClick.bind(this); // To Change the state of the Checkbox
    this.handleChange = this.handleChange.bind(this);   // To Change the Text of the Input
    this.handleSubmit = this.handleSubmit.bind(this);   // Saves changes in the Input
  }

  // handleClick(event) {             To Change the state of the Checkbox
  //   this.setState(state => ({
  //     done: !state.done
  //   }));
  // }

  handleClick(event) {            // To Change the state of the Checkbox as well as the update (Amended from the one above..)
    this.setState(
      state => ({
        done: !state.done
      }),
      function(event) {
        this.handleSubmit(event)
      }
    );
  }

  handleChange(event) {           // To Change the Text of the Input
    let text = event.target.value; 

    this.setState(state => ({
      text: text
    }));
  }


  handleSubmit(event) {           // Saves changes in the Input

    // this.setState(state => ({
     console.log("This is where the submit will happen");
    // }));
  }

  render() {  // onBlur = when you click away from the input
    
    return <div className="todo">
        <span>
          <input type="checkbox" checked={this.state.done} 
                                 onClick={this.handleClick} /> 
          <input type="text" value={this.state.text} 
                             onChange={this.handleChange} 
                             onBlur={this.handleSubmit}/>
        </span>
      </div>;
  }
}

class TodoList extends React.Component {   // Displays TodoList
  constructor(props) { 
    super(props);

    this.state = { todos: [
                            {
                              _id: 'a',
                              text: 'Item 1',
                              done: true
                            },

                            {
                              _id: 'b',
                              text: 'Item 2',
                              done: false
                            },

                            {
                              _id: 'c',
                              text: 'Item 3',
                              done: false
                            },

                            {
                              _id: 'd',
                              text: 'Item 4',
                              done: false
                            },
                          ] 
                  };
      this.newTodo = this.newTodo.bind(this);  // For creation of new Todo
    }

    newTodo(event) {
      event.preventDefault();

      todos = this.state.todos;
      todos.push({ _id: ""  });

      this.setState(state => ({
        todos: todos
      }));
    }

    render(){
      const todolist = this.state.todos.map((todo) =>
        <Todo key={todo._id.toString()} text={todo.text} done={todo.done} />
      );

      return <React.Fragment > 
                <h1>React Shopping List App</h1>
                {todolist}
                <a href="#" onClick={this.newTodo}>Add Item</a> {/* This links to a new Item */}
            </React.Fragment>
    }
}


ReactDOM.render(
  <TodoList />,
  document.getElementById('root'));