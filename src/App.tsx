import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe
          id="timelineFrame"
          title="timelineFrame"
          src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1_B74NGR8TBTo0I0N8pgvAv5LwBgnZ-GXPWIoMjEN9bk&font=Default&lang=en&start_at_end=true&initial_zoom=0&height=650'
          width='100%'
          height='650'
          allowFullScreen={true}
        />
        <div className="right small">
          <a className='no-link-color' href="https://www.flaticon.com/free-icons/universe" title="universe icon">Favicon by Freepik - Flaticon</a>
        </div>
      </header>
    </div>
  );
}

export default App;
