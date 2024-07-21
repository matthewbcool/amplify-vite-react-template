import { useEffect, useState } from 'react';
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { Test } from './Test.jsx';

const client = generateClient<Schema>();

function deleteTodo(id: string) {
  client.models.Todo.delete({ id });
}

function App() {
  return (
    <main>
      <Test />
    </main>
  );
}

export default App;
