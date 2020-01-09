import React from 'react';
import { Route, Switch } from "react-router-dom";
import TemplatesBar from './TemplatesBar/TemplatesBar';
import TextForms from './FormText/TextForms';

const Main = (props) => {
    return (
        <Switch>
            <Route exact path='/'
                render={() => <TemplatesBar urls = {props.templatesPage.urls} />} />
            <Route path='/text'
                render={() => <TextForms />} />
        </Switch>
    )
}

export default Main;