import { useRoutes } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { AllPages } from "./routes/Routes";

function App() {
  const all_pages = useRoutes(AllPages());
  return (
    <AppContext.Provider
      value={{
        moduleFormId: 1,
        moduleFormCode: "",
      }}
    >
      {all_pages}
    </AppContext.Provider>
  );
}

export default App;
