import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
	const authStatus = "aunthenticated";

	return (
		<Routes>
			{authStatus === "not-aunthenticated" ? (
				<Route path="/auth/*" element={<LoginPage />} />
			) : (
				<Route path="/*" element={<CalendarPage />} />
			)}

			<Route path="/*" element={<Navigate to="/auth/login" />} />
		</Routes>
	);
};
