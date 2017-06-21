'use strict';

const render = (root, dataPage) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Image(content.dataContent,  _ => render(root)));

  if(content.nameContent == "index"){
    wrapper.append(Imgs());
    wrapper.append(Texts());
    wrapper.append(Circle());
  }
  else{
    wrapper.append(Img());
    wrapper.append(Texto());
  }
  wrapper.append(Forms(dataPage, _ => render(root)));

  root.append(wrapper);
}
const content = {
  dataContent: null,
  nameContent: null,
  selectedContent: 0
}

const state = {
  user: null
}

$( _ => {
  getPages((err,dataPage) => {
      if (err) console.log(err);
      content.dataContent = dataPage[content.selectedContent];
      content.nameContent = dataPage[content.selectedContent].page;
      const root = $("#root");
      render(root, dataPage);
  });
});
