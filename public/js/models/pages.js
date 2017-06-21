const getPages = (callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',_ => {
    if (xhr.status != 200) callback(new Error("Error al obtener datos"));
    callback(null,xhr.response);
  });

  xhr.open('GET','page.json');
  xhr.responseType = 'json';
  xhr.send();
}
