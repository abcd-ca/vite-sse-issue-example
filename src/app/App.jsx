import React, { useEffect } from 'react';
import styles from './App.module.css';

function App() {
  useEffect(() => {
    const sse = new EventSource('/api/streaming');

    const handleTick = ({ data }) => {
      console.log(`*** The clock has ticked! The count is now ${data}.`);
    };

    const handleSessionCount = ({ data }) => {
      console.log(`*** There are ${data} person(s) here right now!`);
    };

    const handleClose = () => {
      sse.close();
    };

    sse.addEventListener('tick', handleTick);
    sse.addEventListener('session-count', handleSessionCount);
    sse.addEventListener('close', handleClose);

    // sse.onmessage = e => getRealtimeData(JSON.parse(e.data))
    sse.onerror = () => {
      // error log here
      console.log(`*** onerror `);
      sse.close();
    };
    return () => {
      console.log(`*** cleanup `);
      sse.close();
      sse.removeEventListener('tick', handleTick);
      sse.removeEventListener('session-count', handleSessionCount);
      sse.removeEventListener('close', handleClose);
    };
  }, []);
  return (
    <div className={styles.App}>
      View Chrome DevTools Console for SSE demo output
    </div>
  );
}

export default App;
