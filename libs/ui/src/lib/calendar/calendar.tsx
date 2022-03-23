import React, { useEffect } from 'react';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import './calendar.scss';
import {
  createAppointments,
  getDateRange,
  getMaxNumOfRows,
  getNumOfRows,
} from './calendar-utils';
import {
  Appointments,
  Availabilities,
  CalendarRange,
} from './calendar-interfaces';

interface CalendarProps {
  availabilities: Availabilities[];
  meetingDuration: number;
  selectedOption: string;
  appointmentDate: Appointments;
  hasRequiredError: boolean;
  onSetStartDate: (startDate: Date) => void;
  onSetEndDate: (endDate: Date) => void;
  onSetHasRequiredError: (hasError: boolean) => void;
  onSetAppointmentDate: (appointmentDate: Appointments) => void;
}

export function Calendar(props: CalendarProps) {
  const { availabilities, hasRequiredError } = props;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rows, setRows] = useState<number[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<Appointments[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [calendarRange, setCalendarRange] = useState<CalendarRange[]>([]);
  const [endDate, setEndDate] = useState<Date>(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 6
    )
  );

  useEffect(() => {
    const getAppointments = () => {
      const appointments: Appointments[] = createAppointments(
        calendarRange,
        availabilities,
        props.meetingDuration
      );
      setAppointments(appointments);
      setRows(getNumOfRows(appointments));
      setShowMore(getMaxNumOfRows(appointments) > 3);
      setCalendarRange(getDateRange(startDate, endDate));
    };
    getAppointments();
  }, [availabilities]);

  const handleShowMore = () => {
    if (getNumOfRows(appointments).length != getMaxNumOfRows(appointments)) {
      setRows(getNumOfRows(appointments, true));
      setShowMore(false);
    }
  };

  const handleNextDate = () => {
    const newStartDate = new Date(endDate);
    newStartDate.setDate(newStartDate.getDate());
    const newEndDate = new Date(newStartDate);
    newEndDate.setDate(newEndDate.getDate() + 6);

    updateCalendarState(newStartDate, newEndDate, true);
  };

  const handlePreviousDate = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() - 6);
    const newEndDate = new Date(startDate);
    newEndDate.setDate(newEndDate.getDate());

    updateCalendarState(newStartDate, newEndDate, false);
  };

  const updateCalendarState = (
    newStartDate: Date,
    newEndDate: Date,
    isNext: boolean
  ) => {
    props.onSetStartDate(newStartDate);
    props.onSetEndDate(newEndDate);
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    setCalendarRange(getDateRange(newStartDate, newEndDate));
    setCurrentPage(isNext ? currentPage + 1 : currentPage - 1);
  };

  const handleAppointmentSelection = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedDate = event.currentTarget.id;
    const selectedTime = event.currentTarget.textContent;
    const { appointmentDate, onSetAppointmentDate } = props;

    if (appointmentDate) {
      appointmentDate.meetings.forEach(
        (appointment) => (appointment.selected = false)
      );
    }

    if (props.hasRequiredError) {
      props.onSetHasRequiredError(false);
    }

    let updatedAppointments: Appointments[] = appointments;
    let updatedAppointmentDate = appointmentDate;
    let apptIndex = 0;
    appointments?.forEach((appointment, index) => {
      apptIndex = appointment.meetings.findIndex(
        (meeting) => meeting.time === selectedTime
      );
      if (apptIndex !== -1 && appointment.day === selectedDate) {
        appointment.meetings[apptIndex].selected = true;
        updatedAppointments[index] = appointment;
        updatedAppointmentDate = appointment;
      }
    });

    setAppointments([...updatedAppointments]);
    onSetAppointmentDate(updatedAppointmentDate);
  };

  return (
    <div className="calendar">
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th className="arrow-icon__container">
              <i
                className={`arrow-icon fa-solid fa-chevron-left ${
                  currentPage === 0 ? 'disabled' : ''
                }`}
                onClick={handlePreviousDate}
              ></i>
            </th>
            {!isEmpty(calendarRange) &&
              calendarRange.map((date, index: number) => (
                <th key={index}>
                  <div className="calendar__header-container">
                    <span className="calendar__header-day">
                      {date.day.slice(0, 2)}
                    </span>
                    {date.month} {''}
                    {date.number}
                  </div>
                </th>
              ))}
            <th className="arrow-icon__container">
              <i
                onClick={handleNextDate}
                className="arrow-icon fa-solid fa-chevron-right"
              ></i>
            </th>
          </tr>
        </thead>
        <tbody className={hasRequiredError ? 'calendar__body--outlined' : ''}>
          {!isEmpty(rows) &&
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td />
                {isEmpty(availabilities)
                  ? calendarRange.map((day, i) => (
                      <td key={i}>
                        <div className="calendar__body-cell"></div>
                      </td>
                    ))
                  : appointments &&
                    appointments.map((appointment, apptIndex) => (
                      <td key={apptIndex}>
                        <div
                          id={appointment.day}
                          onClick={
                            appointment.meetings[rowIndex]?.time
                              ? handleAppointmentSelection
                              : undefined
                          }
                          className={`calendar__body-cell ${
                            appointment.meetings[rowIndex]?.selected
                              ? 'selected'
                              : 'unselected'
                          } ${
                            appointment.meetings[rowIndex]
                              ? 'appointment'
                              : 'no-appointment'
                          }`}
                        >
                          <span
                            id={appointment.day}
                            className={
                              !appointment.meetings[rowIndex]
                                ? 'empty-line'
                                : ''
                            }
                          >
                            {appointment.meetings[rowIndex]?.time}
                          </span>
                        </div>
                      </td>
                    ))}
                <td />
              </tr>
            ))}
        </tbody>
      </table>
      {showMore && (
        <button
          type="button"
          onClick={handleShowMore}
          className="calendar__show-more"
        >
          Show more availabilities
        </button>
      )}
    </div>
  );
}

export default Calendar;
