import Layout from "./Layout";
import ErrorBoundary from './components/ErrorBoundary'
import Router from "./Router";



function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Router/>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
