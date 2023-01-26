import { createStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducer";

export const store = createStore(taskReducer);