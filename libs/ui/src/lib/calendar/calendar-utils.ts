import { isEmpty } from 'lodash';
import {
  IAppointments,
  IAvailabilities,
  ICalendarRange,
} from './calendar-interfaces';

export const createAppointments = (
  calendarRange: ICalendarRange[],
  availabilities: IAvailabilities[],
  meetingDuration: number
): IAppointments[] => {
  let appointments: IAppointments[] = [];
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
          hour = getDateWithMinutes(
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

const getDateWithMinutes = (date: Date, minutes: number): string => {
  return new Date(date.getTime() + minutes * 60000).toLocaleTimeString();
};

const setAppointmentHour = (day: string, baseHour: string): Date => {
  return new Date(`${day} ${new Date().getUTCFullYear()} ${baseHour}`);
};

export const getNumOfRows = (
  appointments: IAppointments[],
  showMoreRows?: boolean
): number[] => {
  let rows: number[] = [0, 1, 2, 3];

  if (!isEmpty(appointments)) {
    const maxLength = getMaxNumOfRows(appointments);
    rows = Array.from(
      Array(maxLength < 4 ? 3 : showMoreRows ? maxLength : 3).keys()
    );
  }

  return rows;
};

export const getMaxNumOfRows = (appointments: IAppointments[]): number => {
  let maxRows: number = 4;
  const dailyAppts: number[] = [];
  appointments.forEach((appt) => dailyAppts.push(appt.meetings.length));
  maxRows = Math.max(...dailyAppts);

  return maxRows;
};

export const getDateRange = (
  startDate: Date,
  endDate: Date
): ICalendarRange[] => {
  const dates = [];
  const newStartDate = new Date(startDate);
  const newEndDate = new Date(endDate);

  while (newStartDate < newEndDate) {
    dates.push({
      month: newStartDate.toLocaleString('en-us', { month: 'short' }),
      day: newStartDate.toLocaleString('en-us', { weekday: 'short' }),
      number: newStartDate.getDate(),
    });
    newStartDate.setDate(newStartDate.getDate() + 1);
  }

  return dates;
};
