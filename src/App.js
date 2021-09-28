import GridProvider from "./context/GridProvider";
import Main from "./router/Main/Main";

function App() {
  return (
    <GridProvider>
      <Main />
    </GridProvider>
  );
}

export default App;
