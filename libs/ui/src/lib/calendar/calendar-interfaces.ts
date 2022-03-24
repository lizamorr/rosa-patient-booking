export interface IAppointments {
  day: string;
  meetings: { day: string; time: string; selected: boolean }[];
}

export interface ICalendarRange {
  month: string;
  day: string;
  number: number;
}

export interface IAvailabilities {
  appointmentSlotId: string;
  calendarId: string;
  createdAt: Date;
  day: number;
  dayOfTheWeek: number;
  duration: number;
  endAt: Date;
  eventIds: [];
  id: string;
  meridiem: string;
  month: number;
  motiveIds: [string];
  nextAvailabilityId: null;
  previousAvailabilityId: null;
  startAt: Date;
  state: string;
  updatedAt: Date;
  year: number;
  __v: number;
  _id: string;
}
