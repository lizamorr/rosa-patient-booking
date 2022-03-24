export interface IRadio {
  label: string;
  input: IRadioInput[];
}

interface IRadioInput {
  type: string;
  label: string;
  value: string;
  name: string;
  id: string;
}
