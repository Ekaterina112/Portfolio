import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Vacancy from "./vacansy/Vacancy";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import RunningLine from "./runningLine/RunningLine";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <RunningLine/>
            <Skills/>
            <Projects/>
            <Vacancy/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
