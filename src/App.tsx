import { useEffect, useState } from 'react';
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { Test } from './Test.jsx';

function App() {
  return (
    <main>
      <Test />
    </main>
  );
}

export default App;
