import { nanoid } from 'nanoid';

export const deleteNumber = phoneId => {
  return {
    type: 'delete number',
    payload: phoneId,
  };
};

export const addContact = newContact => {
  return {
    type: 'add contact',
    payload: {
      id: nanoid(),
      newContact,
    },
  };
};
