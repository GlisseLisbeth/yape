'use strict';

const Imgs = () => {
  let param = content.dataContent;
  let container =$('<section class="content-img container"></section>');
  let row = $('<div class="row"></div>');
  let col = $('<div class="col s12"></div>');
  let imgs = $('<div class="img"></div>');
  let imag = $('<img src="" alt="" class="">')

    imgs.attr("class","slider-img");
    param.imgpng.forEach((image, position) =>{
      imag= $('<img src="'+image+'" alt="'+param.title[position]+'" class="img-'+param.id+' '+param.state[position]+'">')
      imgs.append(imag);
    });


  col.append(imgs);
  row.append(col);
  container.append(row);

  return container;
}
const Img = () => {
  let param = content.dataContent;
  let container =$('<section class="content-img container"></section>');
  let row = $('<div class="row"></div>');
  let col = $('<div class="col s12"></div>');
  let imgs = $('<div class="img"></div>');
  let imag= $('<img src="'+param.imgpng+'" alt="'+param.title+'">')
  imgs.append(imag);

  col.append(imgs);
  row.append(col);
  container.append(row);

  return container;
}
