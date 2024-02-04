import 'materialize-css/dist/css/materialize.min.css'
import React,{  useEffect  } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect, useDispatch} from 'react-redux';
import * as actions from '../actions';
import Header from './Header'
import  fetchUser  from '../actions/index'; 
import  Landing from './Landing';



const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route  path="/surveys/new" component={SurveyNew} />

        </div>
      </BrowserRouter>
    </div>
  );
};


export default connect(null, actions)(App);