import { uiSlice, calendarSlice } from "./";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	reducer: {
		ui: uiSlice.reducer,
		calendar: calendarSlice.reducer,
	},
});
