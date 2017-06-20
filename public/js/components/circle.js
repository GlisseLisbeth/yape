const Circle = () =>{
  const container =$('<section class="content-circle container"></section>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s4 offset-s4"></div>');
  
  const circleGroup = $('<div class="slider-circle"></div>');
  const circle = $('<ul></ul>');
  const circleImg1 = $('<li class="img-1 active"></li>');
  const circleImg2 = $('<li class="img-2 "></li>');
  const circleImg3 = $('<li class="img-3 "></li>');
    
  circle.append(circleImg1);
  circle.append(circleImg2);
  circle.append(circleImg3);
  circleGroup.append(circle);
  col.append(circleGroup);
  
  row.append(col);
  container.append(row);
  
  return container;
}