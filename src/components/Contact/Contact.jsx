import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteNumber } from 'redux/actions';

export const Contact = ({ name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = dispatch(deleteNumber);

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={handleDelete}></button>
    </>
  );
};

Contact.PropType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
