import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Dashboard } from "./pages/dashboard";


export const App: FC = () => {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Main}/>
				<Route exact path={"/dashboard/"} component={Dashboard}/>
			</Switch>
		</BrowserRouter>
	)
};