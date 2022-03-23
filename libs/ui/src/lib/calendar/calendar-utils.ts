import { isEmpty } from 'lodash';
import {
  Appointments,
  Availabilities,
  CalendarRange,
} from './calendar-interfaces';

export const createAppointments = (
  calendarRange: CalendarRange[],
  availabilities: Availabilities[],
  meetingDuration: number
) => {
  let appointments: Appointments[] = [];
  calendarRange.forEach((date) => {
    availabilities.forEach((availability) => {
      const { duration } = availability;

      if (date.number === availability.day && duration > meetingDuration) {
        const numOfMeetings = Math.floor(duration / meetingDuration);
        const meetings = [];
        let baseHour = '';
        let hour = '';
        const startHour = availability.startAt
          .toString()
          .split('T')[1]
          .split('.')[0];
        baseHour = startHour;

        for (let index = 0; index < numOfMeetings; index++) {
          hour = addMinutes(
            setAppointmentHour(date.day, baseHour),
            index === 0 ? 60 : meetingDuration
          );
          baseHour = hour;
          meetings.push({
            day: date.day,
            time: hour.split(':').slice(0, 2).join(':'),
            selected: false,
          });
        }
        const index = appointments.findIndex((appt) => appt.day === date.day);
        index !== -1
          ? appointments[index].meetings.concat(meetings)
          : appointments.push({ day: date.day, meetings });
      }
    });
    !appointments.find((appt) => appt.day === date.day) &&
      appointments.push({
        day: date.day,
        meetings: [],
      });
  });

  return appointments;
};

export const addMinutes = (date: Date, minutes: number) => {
  return new Date(date.getTime() + minutes * 60000).toLocaleTimeString();
};

export const setAppointmentHour = (day: string, baseHour: string) => {
  return new Date(`${day} ${new Date().getUTCFullYear()} ${baseHour}`);
};

export const getNumOfRows = (
  appointments: Appointments[],
  showMoreRows?: boolean
) => {
  let rows: number[] = [0, 1, 2, 3];

  if (!isEmpty(appointments)) {
    const maxLength = getMaxNumOfRows(appointments);
    rows = Array.from(
      Array(maxLength < 4 ? 3 : showMoreRows ? maxLength : 3).keys()
    );
  }

  return rows;
};

export const getMaxNumOfRows = (appointments: Appointments[]) => {
  let maxRows: number = 4;
  const dailyAppts: number[] = [];
  appointments.forEach((appt) => dailyAppts.push(appt.meetings.length));
  maxRows = Math.max(...dailyAppts);

  return maxRows;
};

export const getDateRange = (startDate: Date, endDate: Date) => {
  const dates = [];
  while (startDate <= endDate) {
    dates.push({
      month: startDate.toLocaleString('en-us', { month: 'short' }),
      day: startDate.toLocaleString('en-us', { weekday: 'short' }),
      number: startDate.getDate(),
    });
  }

  return dates;
};
