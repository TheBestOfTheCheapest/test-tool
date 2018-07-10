import {combineReducers} from 'redux';
import solutionReducer from './SolutionReducers';
import {fetchTask} from './FetchTaskReducers';


const combainedReducers = combineReducers({
    solution: solutionReducer,
    fetchTask
});

export default combainedReducers;