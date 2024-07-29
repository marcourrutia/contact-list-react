const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      contact: [],
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
      customFetch: (url, method, info, onSuccess) => {
        const config = {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
        };
        if (method !== "DELETE") {
          config.body = JSON.stringify(info);
        }
        fetch(url, config)
          .then((data) => {
            if (onSuccess) {
              onSuccess(data);
            }
          })
          .catch((error) => {
            alert(error);
          });
      },
    },
  };
};

export default getState;
