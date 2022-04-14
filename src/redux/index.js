import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { modalReducer } from "./modal/reducer";
import { avtoRegRefucer } from "./auto_regis/reducer";
import { sidebarReducer } from "./sidebar/reducer";
import { headerReducer } from "./header/reducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  avtoReg: avtoRegRefucer,
  sideBar: sidebarReducer,
  header: headerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
