'use strict';

const Forms = (dataPage, update) =>{
  let param = content.dataContent;
  let container =$('<section class="content-form container"></section>');
  let row = $('<div class="row"></div>');
  let col = $('<div class="col s12"></div>');
  let buttons = $('<a class="waves-effect btn-large yellow darken-1"></a>');
  //add input in registerNumber
  if(param.page == "registerNumber"){
    let input = $('<div class="input-field col s12"><img src="img/icons/phoneandnumber.png"><input id="input" name= "input" type="tel" class="validate" pattern="^[9]\d{8}$" maxlength="9" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></div>');
    let checkbox = $('<p><input type="checkbox" class="filled-in" id="filled-in-box" name="terms" /><label for="filled-in-box">Acepto los<span class="teal-text text-accent-3">Términos y condiciones</span></label></p>');
    col.append(input);
    col.append(checkbox);
    buttons.attr("class","waves-effect btn-large grey lighten-2");
    button.addClass('disabled');
    input.on('keyup', (e) =>{
    if(input.value.length == 0 && checked.prop("checked")){
            button.removeClass('disabled');
         }
    });
    checkbox.on('click', (e) =>{
    if(input.value.length == 0 && checked.prop("checked")){
            button.removeClass('disabled');
         }
    });
  }
  if(param.page == "enterCode"){
    let input = $('<div class="input-field col s12"><img src="img/icons/message.png"><input id="input" name= "input" type="number" class="validate" pattern="\d{8}$" maxlength="9" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></div>');
    let controler = $('<span>Reintentar en </span><img src="img/icons/clock.png" alt="clock" class="inline-block clock">');
    let temp = $('<small id="temp">'+ 21 +'</small>');
    buttons.attr("display","none");
    
    function displayTemp() {
    let t = temp.text();
    let x = setInterval( function() {
        t--;
        temp.text(t);
        if(t==0) {
          clearInterval(x);
          };
        },1000);
      }

    col.append(input);
    col.append(checkbox);
    buttons.attr("class","waves-effect btn-large grey lighten-2");
    button.addClass('disabled');
    input.on('keyup', (e) =>{
    if(input.value.length == 0 && checked.prop("checked")){
            button.removeClass('disabled');
         }
    });
    checkbox.on('click', (e) =>{
    if(input.value.length == 0 && checked.prop("checked")){
            button.removeClass('disabled');
         }
    });
  }
  buttons.text(param.button);
  //event click for all
  buttons.on('click', (e) =>{

    e.preventDefault();
    if(param.page == "index")
    {
      content.selectedContent += 1;
      content.dataContent = dataPage[content.selectedContent];
      content.nameContent = dataPage[content.selectedContent].page;
      const root = $("#root");
      render(root, dataPage);
    }
    else if(param.page == "registernumber")
    {
          localStorage.setItem("phone",input.value());
          localStorage.setItem("terms",checked.prop("checked"));
          $.post('api/registerNumber',{phone:localStorage.getItem("phone"), terms:localStorage.getItem("terms")}, function(resp){
            if(resp.data = "null"){
              if (resp.success == "false") {
                alert("Error"+resp.message);
              }
              else {
                state.user = {"phone":resp.data.phone, "code":resp.data.code}
                content.selectedContent += 1;
                content.dataContent = dataPage[content.selectedContent];
                content.nameContent = dataPage[content.selectedContent].page;
                const root = $("#root");
                render(root, dataPage);
                 localStorage.removeItem("phone");
                localStorage.removeItem("terms");
                update();
              }
            }
          }, 'json' )
      }

  });

  col.append(buttons);
  row.append(col);
  container.append(row);

  return container;
}


