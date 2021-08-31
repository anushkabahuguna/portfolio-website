import Page from "./Page";
import "./App.css";
import { ThemeProvider } from "./contexts/theme.context";
import { initialState, reducer } from "./reducers/theme.reducer";

function App() {
  return (
    <div className="App">
      <ThemeProvider initialState={initialState} reducer={reducer}>
        <Page />
      </ThemeProvider>
    </div>
  );
}

export default App;
