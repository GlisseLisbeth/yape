const Texts = () =>{
  const container =$('<section class="content-text container"></section>');
  const rows = $('<div class="row"></div>');
  const cols = $('<div class="col s8 offset-s2 m6 l3"></div>');
  
  const text = $('<div class="text"></div>')
  const title = $('<h1 class="center-align">Paga a tus amigos</h1>');
  const description = $('<h3 class="center-align"><small>Paga a quien quieras, desde donde quieras sin usar efectivo.</small></h3>');
  
  text.append(title);
  text.append(description);
  cols.append(text);
  
  rows.append(cols);
  container.append(rows);
  
  return container;
}