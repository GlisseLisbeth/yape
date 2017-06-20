'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Image());
  wrapper.append(Texts());
  wrapper.append(Circle());
  root.append(wrapper);
}

/*
const state = {
  screen: null,
}
*/

$( _ => {   
  const root = $("#root");
  render(root);
  
});

