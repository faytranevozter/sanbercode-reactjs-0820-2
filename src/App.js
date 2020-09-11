import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './Tugas-15/ThemeContext';

import Navbar from './Tugas-15/Navbar';

import Homepage from './Homepage';
import Form from './Tugas-9/Form';
import Table from './Tugas-10/Table';
import LifeCycle from './Tugas-11/LifeCycle';
import Tugas12 from './Tugas-12/Tugas12';
import Tugas13 from './Tugas-13/Tugas13';
import Tugas14 from './Tugas-14/Tugas14';
import ThemeChanger from './Tugas-15/ThemeChanger';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <div className="box">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/materi-9" component={Form} />
              <Route exact path="/materi-10" component={Table} />
              <Route exact path="/materi-11" component={LifeCycle} />
              <Route exact path="/materi-12" component={Tugas12} />
              <Route exact path="/materi-13" component={Tugas13} />
              <Route exact path="/materi-14" component={Tugas14} />
              <Route exact path="/materi-15" component={ThemeChanger} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
