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
  createdAt: string;
  day: number;
  dayOfTheWeek: number;
  duration: number;
  endAt: string;
  eventIds: string[];
  id: string;
  meridiem: string;
  month: number;
  motiveIds: string[];
  nextAvailabilityId?: string;
  previousAvailabilityId?: string;
  startAt: string;
  state: string;
  updatedAt: string;
  year: number;
  __v: number;
  _id: string;
}
