import React from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [contactArr, setContactArr] = React.useState(contacts.slice(0, 5));

  React.useEffect(() => {}, [contactArr]);

  const setRandomContact = () => {
    let random = Math.floor(Math.random() * contacts.length);
    setContactArr(contactArr.concat(contacts[random]));
  };

  const sortAlphabetically = () => {
    let newArr = [...contactArr];
    let orderedArr = newArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setContactArr(orderedArr);
  };

  const sortByPopularity = () => {
    let newArr = [...contactArr];
    let orderedArr = newArr.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });

    setContactArr(orderedArr);
  };

  //Alternative sorting method by key

  // function sort(name){
  //      let newArr = [...contactArr];
  //   let orderedArr = newArr.sort((a, b) => {
  //     if (a.popularity < b.popularity) {
  //       return -1;
  //     }
  //     if (a.popularity > b.popularity) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   setContactArr(orderedArr);
  // }

  const deleteCeleb = (name) => {
    // Method 1. longer but simpler logic

    // let newArr = [...contactArr];

    // newArr = newArr.filter((celeb) => {
    //   return celeb.name !== name;
    // });

    // setContactArr(newArr);

    //Method 2. shorter, but a little harder to follow

    setContactArr(
      contactArr.filter((celeb) => {
        return celeb.name !== name;
      })
    );
  };

  return (
    <div>
      <h1>Iron Contacts</h1>
      {/* If you aren't passing any arguments, you don't need to add an arrow function or parenthese at the end of a function */}
      <button onClick={setRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactArr.map((contact) => {
          return (
            <tr>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ height: 90 }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                <button onClick={() => deleteCeleb(contact.name)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
