'use strict';

let Texts = () =>{
  let param = content.dataContent;
  let container =$('<section class="content-text container"></section>');
  let rows = $('<div class="row"></div>');
  let cols = $('<div class="col s8 offset-s2"></div>');
  let text = $('<div class="text"></div>')

  param.title.forEach((elem, position) =>{
    let titles = $('<h1  class="center-align  '+param.state[position]+'"></h1>');
    titles.text(elem);
    let descriptions = $('<h2 class="center-align '+param.state[position]+'"><small class="grey-text text-darken-1"></small></h2>');
    descriptions.text(param.description[position])
    text.append(titles);
    text.append(descriptions);
  });

  cols.append(text);
  rows.append(cols);
  container.append(rows);

  return container;
}

let Texto = () =>{
  let param = content.dataContent;
  let container =$('<section class="content-text container"></section>');
  let rows = $('<div class="row"></div>');
  let cols = $('<div class="col s8 offset-s2"></div>');
  let texts = $('<div class="text"></div>')
  let titles = $('<h1  class="center-align">'+param.title+'</h1>');
  let descriptions = $('<h2 class="center-align"><small class="grey-text text-darken-1">'+param.description+'</small></h2>');
  if(param.page="resendCode")
  titles.css("display","block");
  descriptions.css("display","block");
  console.log(titles);
  console.log(descriptions);

  texts.append(titles);
  texts.append(descriptions);
  cols.append(texts);
  rows.append(cols);
  container.append(rows);

  return container;
}
