import { createStore, combineReducers} from "redux";
import studentReducer from "../ducks/studentReducer";
import teacherReducer from "../ducks/teacherReducer";

const rootReducer = combineReducers({
    studentReducer,
    teacherReducer
 });
 export default createStore(rootReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())