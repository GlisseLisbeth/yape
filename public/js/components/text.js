const Texts = () =>{
  const container =$('<section class="content-text container"></section>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s8 offset-s2></div>');
  
  const text = $('<div class="text"></div>')
  const title = $('<h1>Paga a tus amigos</h1>');
  const description = $('<h3><small>Paga a quien quieras, desde donde quieras sin usar efectivo.<small></h3>');
  
  text.append(title);
  text.append(description);
  col.append(text);
  
  row.append(col);
  container.append(row);
  
  return container;
}