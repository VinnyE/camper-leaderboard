const fetchData = url => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

     throw new Error('Something went wrong in the network response.');
  }).catch(error => {
    console.warn(error)
  })
}

export default fetchData;