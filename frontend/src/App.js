import react, { useState, useEffect } from "react" ;
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Landing from "./landing/landing.js"; 
import Dashboard from "./dashboard/dashboard.js";
function App() {
	const [isLoggedIn , setIsLoggedIn] = useState(false);	
  return (
	<div>
		<Routes>
			<Route path = "/" element = { isLoggedIn ? <Dashboard/> : <Landing/> }/> 
		</Routes> 	
	</div>
  );
}

export default App;
