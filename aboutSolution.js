```javascript
//pages/aboutSolution.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div style={{ border: '1px solid red', padding: '16px' }}>
      <h1>Oops! Something went wrong!</h1>
      <p>Error: {error.message}</p>
    </div>
  );
}

export default function About() {
  try {
    //Simulate an error
    // throw new Error('This is an intentional error');
    return (
        <h1>About Page</h1>
    );
  } catch(error) {
    return (
        <MyErrorBoundary error={error} />
    )
  }
}
```