import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ConfidentialScreen from "./screens/ConfidentialScreen";
import MainLayout from "./components/MainLayout";
import HomeScreen from "./screens/HomeScreen";
import LanguageScreen from "./screens/Languagescreen";
import NotFound from "./components/NotFound";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="confidential" element={<ConfidentialScreen />} />
              <Route path="language" element={<LanguageScreen />} />
              <Route index element={<HomeScreen />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
