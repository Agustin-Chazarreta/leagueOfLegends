import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllChampions from "./pages/Champions";
import Home from "./components/Home";
import Layout from "./components/Layout";
import MemoryGame from "./pages/MiniGame";
import Rotation from "./pages/Rotation";
import News from "./pages/News";
import { useState, useEffect } from "react";
import styled from "styled-components";
function App() {
  const [champions, setChampions] = useState([]);
  const [championsFilter, setChampionsFilter] = useState([]);

  const BASE_URL =
    "https://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US/";
  useEffect(() => {
    fetch(`${BASE_URL}champion.json`)
      .then((res) => res.json())
      .then((data) => {
        setChampions(data.data);
        setChampionsFilter(data.data);
      });
  }, []);

  return (
    <AppContainer>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/champions"
              element={
                <AllChampions
                  champions={champions}
                  setChampions={setChampions}
                  championsFilter={championsFilter}
                  setChampionsFilter={setChampionsFilter}
                />
              }
            ></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route
              path="/rotation"
              element={<Rotation champions={champions} />}
            ></Route>
            <Route path="/minigame" element={<MemoryGame />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  width: 100%;
`;
