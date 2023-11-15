export const inputRestriction = (e) => {

  if(e.target.id === "UserDisplayName"){
      const result = e.target.value.replace(/[^a-z0-9]/gi, '');
      setDisplayName(result);
  } else if (e.target.id === "UserEmail"){
      const result = e.target.value.replace(/[^a-z0-9@.]/gi, '');
      setEmail(result);
  } else if(e.target.id === "UserPassword") {
      const result = e.target.value.replace(/[^a-z0-9*&^%$#@!?]/gi, '');
      setPassword(result);
  }
  setMessage(result);
};