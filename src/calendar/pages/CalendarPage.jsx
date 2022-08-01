import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar, CalendarEvent, CalendarModal } from "../";
import { addHours } from "date-fns";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUiStore } from "../../hooks";
import { useCalendarStore } from "../../hooks/useCalendarStore";

const eventStyleGetter = (event, start, end, isSelected) => {
	const style = {
		background: "#347CF7",
		borderRadius: "0px",
		opacity: 0.8,
		color: "white",
	};

	return {
		style,
	};
};

export const CalendarPage = () => {
	const { events, setActiveEvent } = useCalendarStore();
	const { openDateModal } = useUiStore();
	const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "week");

	const onDoubleClick = (event) => {
		console.log({ doubleClick: event });
		openDateModal();
	};

	const onSelect = (event) => {
		console.log({ click: event });
		setActiveEvent(event);
	};

	const onViewChanged = (event) => {
		localStorage.setItem("lastView", event);
	};

	return (
		<>
			<Navbar />
			<Calendar
				culture="es"
				localizer={localizer}
				events={events}
				defaultView={lastView}
				startAccessor="start"
				endAccessor="end"
				style={{ height: "calc(100vh - 80px)" }}
				messages={getMessagesES()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEvent,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
			/>
			<CalendarModal />
		</>
	);
};
