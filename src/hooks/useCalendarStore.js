import { useSelector, useDispatch } from "react-redux";
import { onSetActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
	const { events, activeEvent } = useSelector((state) => state.calendar);
	const dispatch = useDispatch();

	const setActiveEvent = (calendarEvent) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	return {
		events,
		activeEvent,
		setActiveEvent,
	};
};
