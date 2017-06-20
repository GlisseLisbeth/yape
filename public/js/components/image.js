'use strict'
  
  
const Image = () => {
  const container =$('<section class="content-img container"></section>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12"></div>');
  
  const img = $('<div class="slider-img"></div>');
  const img1 = $('<img src="img/icons/icon-people.png" class="img-1 active">')
  const img2 = $('<img src="img/icons/happy-person.png" class="img-2">')
  const img3 = $('<img src="img/icons/party.png" class="img-3">')
  
  img.append(img1);
  img.append(img2);
  img.append(img3);
  col.append(img);
  
  row.append(col);
  container.append(row);
  
  return container;
}
  
  