fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/inquire`, {
    method: "GET",
    headers: {
       "Content-Type": "application/json" 
      },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })

