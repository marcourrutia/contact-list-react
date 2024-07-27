const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      contact: [],
      photo: [],
    },
    actions: {
      getContact: () => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/contactMarco/contacts",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({
              contact: data.contacts,
            });
          })
          .catch((error) => alert(error));
      },      
    },
  };
};

export default getState;
