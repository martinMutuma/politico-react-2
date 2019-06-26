import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import { createStore } from "redux";
import myReducers from "./redux/reducers";
configure({ adapter: new Adapter() });

const initialState = {
  candidates: []
};
const store = createStore(myReducers, initialState);

global.store = store;
