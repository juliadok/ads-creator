import React from 'react';
import { Route, Switch } from "react-router-dom";
import TemplatesBar from './TemplatesBar/TemplatesBar';
import TextForms from './FormText/TextForms';

const Main = () => {
    return (
        <Switch>
              <Route exact path='/'
                render={() => <TemplatesBar />} />
              <Route path='/text'
                render={() => <TextForms />} />
        </Switch>
    )
}

export default Main;