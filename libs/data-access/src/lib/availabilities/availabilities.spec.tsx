import { getAvailabilities } from './availabilities';

describe('Availabilities', () => {
  const url = 'https://staging-api.rosa.be/api/availabilities';
  const params = {
    from: new Date('2022-03-23T23:00:00.000Z'),
    to: new Date('2022-03-25T22:59:59.999Z'),
    motive_id: '61eea367ddf6c500149ae2cc',
    is_new_patient: true,
    calendar_ids: '61379ba159d4940022b6c928',
    state: 'open',
  };
  it('should return successfully', async () => {
    const availabilities = await getAvailabilities(url, params);
    expect(availabilities).toMatchObject([
      {
        __v: 0,
        _id: '62347ff3b433476d7d16bac1',
        appointmentSlotId: '62347ff3b433476d7d16babb',
        calendarId: '61379ba159d4940022b6c928',
        createdAt: '2022-03-18T12:49:55.665Z',
        day: 24,
        dayOfTheWeek: 4,
        endAt: '2022-03-24T15:30:00.000Z',
        eventIds: [],
        id: '62347ff3b433476d7d16bac1',
        meridiem: 'am',
        month: 2,
        motiveIds: [
          '61379ba159d4940022b6c929',
          '61eea350ddf6c500149ae2cb',
          '61eea367ddf6c500149ae2cc',
        ],
        nextAvailabilityId: null,
        previousAvailabilityId: null,
        state: 'open',
        updatedAt: '2022-03-18T12:49:55.665Z',
        year: 2022,
      },
      {
        __v: 0,
        _id: '62399aa1a845d7aa3f965106',
        appointmentSlotId: '62348018b433476d7d16bb07',
        calendarId: '61379ba159d4940022b6c928',
        createdAt: '2022-03-22T09:45:05.999Z',
        day: 25,
        dayOfTheWeek: 5,
        endAt: '2022-03-25T10:30:00.000Z',
        eventIds: [],
        id: '62399aa1a845d7aa3f965106',
        meridiem: 'am',
        month: 2,
        motiveIds: [
          '61379ba159d4940022b6c929',
          '61eea350ddf6c500149ae2cb',
          '61eea367ddf6c500149ae2cc',
        ],
        previousAvailabilityId: '62348018b433476d7d16bb0d',
        startAt: '2022-03-25T08:15:00.000Z',
        state: 'open',
        updatedAt: '2022-03-22T09:45:05.999Z',
        year: 2022,
      },
    ]);
  });
});
