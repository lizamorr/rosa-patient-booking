export interface ISelect {
  selectLabel: string;
  placeholder: string;
  options: ISelectOptions[];
}

export interface ISelectOptions {
  value: string;
  label: string;
  meetingDuration: number;
}
