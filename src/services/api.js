const mockMessages = [
  {
    incoming: true,
    message: 'Hi Vladimir',
  },
  {
    incoming: true,
    message: 'Hi Mark',
  },
  {
    incoming: true,
    message: 'Any Luck with the program?',
  },
  {
    incoming: true,
    message: 'No bro',
  },
  {
    incoming: true,
    message: 'Aw I guess you will keep trying',
  },
  {
    incoming: true,
    message: 'Yeah! I guess.',
  },
  // rest of messages in the same format.
];

const getMockData = () => (
  new Promise(resolve => setTimeout(() =>
    resolve(mockMessages), 1000))
);

const api = {
  getMockData,
};

export default api;
