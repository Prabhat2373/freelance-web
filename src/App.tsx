import { useRoutes } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { AllPages } from "./routes/Routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const all_pages = useRoutes(AllPages());
  const { user, role } = useSelector((state: RootState) => state.user);
  console.log("user", user);
  console.log("role", role);

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
