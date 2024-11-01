import { useState } from 'react';

const CheckBox = () => {
  //   const itemList = [
  //     {
  //       id: 1,
  //       name: 'I accept terms and conditions',
  //       checked: false,
  //     },
  //     {
  //       id: 2,
  //       name: 'I dont accept terms and conditions',
  //       checked: false,
  //     },
  //   ];
  //   const [hasAccepted, setHasAccepted] = useState(itemList);

  //   const handleChanged = e => {
  //     const id = e.target.id;
  //     console.log(id);
  //     setHasAccepted(prev => {
  //       return prev.map(item => {
  //         return {
  //           id: item.id,
  //           name: item.name,
  //           checked: id == item.id ? !item.checked : item.checked,
  //         };
  //       });
  //     });
  //   };

  //   return (
  //     <div>
  //       {hasAccepted.map(item => (
  //         <label key={item.id}>
  //           <input
  //             type="checkbox"
  //             name={item.name}
  //             checked={item.checked}
  //             onChange={handleChanged}
  //           />
  //           <p>{item.name}</p>
  //         </label>
  //       ))}
  //       <button type="button" disabled={!hasAccepted}>
  //         Proceed
  //       </button>
  //     </div>
  //   );

  const osList = [
    {
      id: 1,
      name: 'Windows',
      checked: false,
    },
    {
      id: 2,
      name: 'Debian',
      checked: false,
    },
    {
      id: 3,
      name: 'Ubuntu',
      checked: false,
    },
    {
      id: 4,
      name: 'Mac',
      checked: false,
    },
    {
      id: 5,
      name: 'Android',
      checked: false,
    },
    {
      id: 6,
      name: 'iOS',
      checked: false,
    },
  ];

  const [state, setState] = useState(osList);

  const handler = event => {
    const id = event.target.id;
    setState(prev => {
      return prev.map(os => {
        return {
          id: os.id,
          name: os.name,
          checked: id == os.id ? !os.checked : os.checked,
        };
      });
    });
  };

  console.log(state);

  return (
    <>
      {state.map(os => (
        <label key={os.id}>
          <input
            id={os.id}
            type="checkbox"
            checked={os.checked}
            onChange={handler}
          />
          <p>{os.name}</p>
        </label>
      ))}
    </>
  );
};

export default CheckBox;
