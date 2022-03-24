import React, { useEffect, useState } from 'react';
import './app.scss';
import {
  getAvailabilities,
  IAvailabilities,
  IAvailabilitiesRequest,
} from '@rosa-patient-booking/data-access';
import {
  Button,
  Calendar,
  Select,
  RadioGroup,
  Card,
} from '@rosa-patient-booking/ui';
import { isEmpty } from 'lodash';
import { button, card, radio, select, url } from './app-data';

const App = () => {
  const [availabilities, setAvailabilities] = useState<IAvailabilities[]>([]);
  const [isNewPatient, setIsNewPatient] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<any>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 6
    )
  );
  const [meetingDuration, setMeetingDuration] = useState<number>(0);
  const [hasRequiredError, setHasRequiredError] = useState<boolean>(false);

  useEffect(() => {
    if (!isEmpty(selectedOption) && !isEmpty(isNewPatient)) {
      let availabilitiesParams: IAvailabilitiesRequest = {
        from: startDate,
        to: endDate,
        motive_id: selectedOption,
        is_new_patient: isNewPatient === 'yes',
        calendar_ids: '61379ba159d4940022b6c928',
        state: 'open',
      };
      const fetchAvailabilties = async () => {
        const availabilities = await getAvailabilities(
          url,
          availabilitiesParams
        );
        setAvailabilities(availabilities);
      };

      fetchAvailabilties().catch((error) => alert(error));
    }
  }, [selectedOption, isNewPatient, startDate, endDate]);

  const handleSelectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedOption(e.target.value);
    const appointmentType = select.options.find(
      (meeting: any) => meeting.value == e.target.value
    );
    setMeetingDuration(appointmentType ? appointmentType.meetingDuration : 0);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsNewPatient(e.target.value);
  };

  const handleBookAppointment = (event: React.FormEvent): void => {
    if (isEmpty(appointmentDate)) {
      event?.preventDefault();
      setHasRequiredError(true);
    }
  };

  return (
    <div className="background">
      <Card
        cardHeader={card.header}
        cardContent={
          <form>
            <RadioGroup
              radioLabel={radio.label}
              radioInput={radio.input}
              onRadioChange={handleRadioChange}
              radioAnswer={isNewPatient}
            />
            {isNewPatient && (
              <Select
                selectLabel={select.selectLabel}
                selectedOption={selectedOption}
                options={select.options}
                placeholder={select.placeholder}
                onSelectionChange={handleSelectionChange}
              />
            )}
            <Calendar
              selectedOption={selectedOption}
              meetingDuration={meetingDuration}
              availabilities={availabilities}
              appointmentDate={appointmentDate}
              onSetAppointmentDate={setAppointmentDate}
              onSetEndDate={setEndDate}
              onSetStartDate={setStartDate}
              hasRequiredError={hasRequiredError}
              onSetHasRequiredError={setHasRequiredError}
            />
            <Button
              onClick={handleBookAppointment}
              buttonText={button.buttonText}
              hasRightArrow={button.hasRightArrow}
            />
          </form>
        }
      />
    </div>
  );
};

export default App;
