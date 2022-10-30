import { Filter } from './Filter';

export const Contacts = ({ onChange, filter, contacts, onDeleteBtnClick }) => {
  let normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      <Filter onChange={onChange} filter={filter} />
      <ul style={{ listStyle: 'inside', paddingLeft: '32px' }}>
        {filtredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <span>{contact.name}:</span> <span>{contact.number}</span>
              <button
                style={{ marginLeft: '10px' }}
                type="button"
                onClick={() => onDeleteBtnClick(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
