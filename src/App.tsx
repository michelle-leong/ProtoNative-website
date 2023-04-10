import React from 'react';
import { createRoot } from 'react-dom/client';

const App = (): JSX.Element => {
  return <div>hello</div>;
};

createRoot(document.getElementById('root')).render(<App />);
