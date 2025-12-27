import { useEffect, useState, useMemo } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [isBackendConfigured, setIsBackendConfigured] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Create client once and memoize it
  const client = useMemo(() => {
    try {
      return generateClient<Schema>();
    } catch (err) {
      console.error("Error initializing client:", err);
      setIsBackendConfigured(false);
      setError(err instanceof Error ? err.message : "Unknown error");
      return null;
    }
  }, []);

  useEffect(() => {
    if (!client) return;

    const subscription = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
      error: (err) => {
        console.error("Error fetching todos:", err);
        setError(err.message);
        setIsBackendConfigured(false);
      },
    });
    return () => subscription.unsubscribe();
  }, [client]);

  function createTodo() {
    if (!client) return;

    const content = window.prompt("Todo content");
    if (content) {
      client.models.Todo.create({ content });
    }
  }

  if (!isBackendConfigured) {
    return (
      <main>
        <h1>⚙️ AWS Amplify React+Vite Starter</h1>
        <div style={{ padding: "20px", maxWidth: "600px" }}>
          <h2>Backend Not Configured</h2>
          <p>
            To use this application with a live backend, you need to start the
            Amplify sandbox or deploy your backend.
          </p>
          <h3>Quick Start:</h3>
          <ol style={{ textAlign: "left" }}>
            <li>
              Open a terminal and run: <code>npx ampx sandbox</code>
            </li>
            <li>Wait for the sandbox to deploy (this may take a few minutes)</li>
            <li>Refresh this page</li>
          </ol>
          <p>
            <a href="https://docs.amplify.aws/react/start/quickstart/">
              📚 Read the full documentation
            </a>
          </p>
          {error && (
            <details style={{ marginTop: "20px", textAlign: "left" }}>
              <summary>Error Details</summary>
              <pre style={{ fontSize: "12px", overflow: "auto" }}>{error}</pre>
            </details>
          )}
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
