import { useState } from 'react';
import './index.css'; // Assuming you are using the modified CSS we discussed

function App() {
  const [boards, setBoards] = useState({
    todo: ['Sample Task 1', 'Sample Task 2'],
    inProgress: ['Sample Task 3'],
    done: ['Sample Task 4'],
  });

  return (
    <div>
      <h1>Kanban Board</h1>
      <div className="board">
        {/* To Do Column */}
        <div className="column">
          <div className="column-title">To Do</div>
          {boards.todo.map((task, index) => (
            <div key={index} className="card">
              {task}
            </div>
          ))}
        </div>

        {/* In Progress Column */}
        <div className="column">
          <div className="column-title">In Progress</div>
          {boards.inProgress.map((task, index) => (
            <div key={index} className="card">
              {task}
            </div>
          ))}
        </div>

        {/* Done Column */}
        <div className="column">
          <div className="column-title">Done</div>
          {boards.done.map((task, index) => (
            <div key={index} className="card">
              {task}
            </div>
          ))}
        </div>
      </div>

      <p className="read-the-docs">
        {/* Optional Footer */}
        Drag and drop feature coming soon!
      </p>
    </div>
  );
}

export default App;
