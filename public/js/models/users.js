const getUsers = (callback) => {
  const request = $.get('api/');

  request.then(function(data) {
    console.log(data.length + ' elementos');
    return data;
  }).then(function(data) {
    const newPromiseValue = data[0];
    console.log('Primer elemento: ', newPromiseValue);
    return newPromiseValue;
  }).then(function(data) {
    const newPromiseValue = data.id;
    console.log('ID del primer elemento: ', newPromiseValue);
  });
}