import Page from "./Page";
import { useStore } from "./contexts/theme.context";
import "./App.css";

function App() {
  const { isDarkTheme } = useStore();
  const style = {
    backgroundColor: isDarkTheme ? "#0a192f" : "#E3F2FD",
  };
  return (
    <div className="App" style={style}>
      <Page />
    </div>
  );
}

export default App;
