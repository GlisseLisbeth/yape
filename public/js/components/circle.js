'use strict';

const Circle = () =>{
  let param = content.dataContent;
  let container =$('<section class="content-circle container"></section>');
  let row = $('<div class="row"></div>');
  let col = $('<div class="col s4 offset-s4"></div>');

  let circleGroup = $('<div class="slider-circle"></div>');
  let circle = $('<ul></ul>');

  param.imgpng.forEach((elem, position) =>{
      let circleImg = $('<li class="img-'+(position+1)+' '+param.state[position]+'"></li>');
      circle.append(circleImg);
  });
  circleGroup.append(circle);
  col.append(circleGroup);
  row.append(col);
  container.append(row);

  return container;
}
