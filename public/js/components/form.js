'use strict';

const Forms = (dataPage, update) =>{
  const param = content.dataContent;
  //add input in registerNumber
  if(param.page == "index"){
    const container =$('<section class="content-form-index container"></section>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col s12"></div>');
    const buttonsIndex = $('<button id="btnIndex" class="waves-effect btn-large yellow darken-1"></button>');
    buttonsIndex.text(param.btns);
    buttonsIndex.on('click', (e) =>{
      e.preventDefault();
      nextPage(content, dataPage, update);
    });
    col.append(buttonsIndex);
    row.append(col);
    container.append(row);

    return container;
  }
  if(param.page == "registerNumber"){
    const container =$('<section class="content-form-registerNumber container"></section>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col s12"></div>');
    const buttonsRegisterNumber = $('<button id="btnRegisterNumber" type ="submit" class="waves-effect btn-large yellow darken-1"></button>');
    const inputNumber = $('<div class="input-field col s12"><img src="img/icons/phoneandnumber.png"><input id="inputNumber" name= "inputNumber" type="tel" pattern="^[9][\d]{8}$" maxlength="9" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></div>');
    const checkbox = $('<p><input type="checkbox" class="filled-in" id="filled-in-box" name="terms" /><label for="filled-in-box">Acepto los<span class="teal-text text-accent-3">Términos y condiciones</span></label></p>');

    $('#btnRegisterNumber').attr("class","waves-effect btn-large grey lighten-2");
    $('#btnRegisterNumber').addClass('disabled');

    buttonsRegisterNumber.text(param.btns);

    inputNumber.on('keyup', (e) =>{
      e.preventDefault();
      validateNumber();
    });
    checkbox.on('click', (e) =>{
      e.preventDefault();
      $("input:checkbox").prop('checked');
      validateNumber();
    });
    buttonsRegisterNumber.on('click', (e) =>{
        e.preventDefault();
        localStorage.setItem("phone",inputNumber.value());
        localStorage.setItem("terms",true);
        $.post('param.url',{phone:localStorage.getItem("phone"), terms:localStorage.getItem("terms")}, function(resp){
          if(resp.data = "null"){
            if (resp.success == "false") {
              alert("Error"+resp.message);
            }
            else {
              state.user = {"phone":resp.data.phone, "code":resp.data.code}
              nextPage(content, dataPage, update);
               localStorage.removeItem("phone");
              localStorage.removeItem("terms");
              update();
            }
          }
        }, 'json' )
    });
    col.append(inputNumber);
    col.append(checkbox);
    col.append(buttonsRegisterNumber);
    row.append(col);
    container.append(row);

    return container;
  }

  if(param.page == "resendCode"){
    const container =$('<section class="content-form-resendCode container"></section>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col s12"></div>');
    const inputEnterCode = $('<div class="input-field col s12"><img src="img/icons/message.png"><input id="input" name= "input" type="number" class="validate" pattern="\d{8}$" maxlength="9" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"></div>');
    const controler = $('<span>Reintentar en </span><img src="img/icons/clock.png" alt="clock" class="inline-block clock">');
    const temp = $('<small id="temp">'+ 21 +'</small>');
    function contador(){
      const t = temp.text();
      const x = setInterval( function() {
          t--;
          temp.text(t);
          if(t==0) {
            clearInterval(x);
            if(t < 0){
              e.preventDefault();
              localStorage.setItem("code",inputEnterCode.value());
              $.post(param.url,{phone:localStorage.getItem("phone")}, function(resp){
                if(resp.data = "null"){
                  if (resp.success == "false") {
                    alert("Error"+resp.message);
                  }
                  else {
                    state.user = {"code":resp.data.code}
                  }
                }
              }, 'json' )

            }
            temp.text(21);
          }
        },1000);
    }

    inputEnterCode.on('keyup', (e) =>{
        e.preventDefault();
        if(inputEnterCode.val == state.user.code){
          nextPage(content, dataPage, update);
          localStorage.removeItem("code");
          update();
        }
      });

    col.append(inputEnterCode);
    row.append(col);
    container.append(row);

    return container;

  }

  if(param.page == "createUser"){
    const container =$('<section class="content-form-registerUser container"></section>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col s12"></div>');
    const inputName = $('<div class="input-field col s12"><img src="img/icons/user.png"><input id="inputName" name= "inputName" type="text" pattern="^[a-zA-Z]*$"></div>');
    const inputEmail= $('<div class="input-field col s12"><img src="img/icons/message-gray.png"><input id="inputEmail" name= "inputEmail" type="email" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" placeholder="correo@ejemplo.com"></div>');
    const inputClave= $('<div class="input-field col s12"><img src="img/icons/lock.png"><input id="inputClave" type="password" name= "inputClave" maxLength="6" placeholder="Ingrese clave de 6 dígitos"></div>');

    const message = $('<span class="center-align"><small>Cuida esta clave como oro, ya que es tu acceso a Yape.<small></span>');
    const buttonsRegisterUser = $('<button id="btnRegisterUser" type="submit" class="waves-effect btn-large yellow darken-1"></button>');
    buttonsRegisterUser.text(param.btns);
    inputName.on('keyup', (e) =>{
      e.preventDefault();
      validateUser();
    });

    inputEmail.on('keyup', (e) =>{
      e.preventDefault();
      validateUser();
    });

    inputClave.on('keyup', (e) =>{
      e.preventDefault();
      validateUser();
    });

    buttonsRegisterUser.on('click', (e) =>{
        e.preventDefault();
        localStorage.setItem("name",inputName.value());
        localStorage.setItem("email",inputEmail.value());
        localStorage.setItem("password",inputClave.value());
        $.post('param.url',{name:localStorage.getItem("name"),email:localStorage.getItem("email"),clave:localStorage.getItem("clave")}, function(resp){
          if(resp.data = "null"){
            if (resp.success == "false") {
              alert("Error"+resp.message);
            }
            else {
              state.user = {"name":resp.data.name, "email":resp.data.email,"password":resp.data.password}
              nextPage(content, dataPage, update);
               localStorage.removeItem("name");
              localStorage.removeItem("email");
              localStorage.removeItem("password");
              update();
            }
          }
        }, 'json' )
    });

    col.append(inputName);
    col.append(inputEmail);
    col.append(inputClave);
    col.append(message);
    col.append(buttonsRegisterUser);
    row.append(col);
    container.append(row);

    return container;

  }

  if(param.page == "registerCard"){
    const container =$('<section class="content-form-registerCard container"></section>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col s12"></div>');
    const inputCard = $('<div class="input-field col s12"><img src="img/icons/scanr.png"><input id="inputCard" name= "inputCard" type="number"></div>');
    const inputExpirate= $('<div class="input-field col s12"><img src="img/icons/message-gray.png"><input id="inputEmail" name= "inputEmail" type="email" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" placeholder="correo@ejemplo.com"></div>');
    const scan = $('<img src="img/icons/scan.png" width="25px">');
    const textScan = $('<p class="center-align light-turquoise inline-block">Escanear tarjeta</p>');
    const expirateLeft = $('<div class="expirate-left"></div>');
    const expirateRight = $('<div class="expirate-right"></div>');
    const textDateExpirate = $('<span class="grey-soft-text">Fecha de vencimiento</span>');
    const inputMonth= $('<div class="input-field col s12"><input id="inputMonth" name= "inputMonth" type="number" min="1" max="12" placeholder="Mes" ></div>');
    const inputYear= $('<div class="input-field col s12"><input id="inputYear" name= "inputMonth" type="number" min="17" max="24" placeholder="Año" ></div>');

    const buttonsRegiterCard = $('<button id="btnRegisterCard" type="submit" class="waves-effect btn-large yellow darken-1"></button>');
    $('#btnRegisterCard').removeClass('disabled');
    buttonsRegiterCard.text(param.btns);
    buttonsRegiterCard.on('click', (e) =>{
        e.preventDefault();
        localStorage.setItem("userId",state.user.phone);
        localStorage.setItem("card",inputCard.value());
        localStorage.setItem("mes",inputMonth.value());
        localStorage.setItem("anio",inputYear.value());
        localStorage.setItem("password",inputClave.value());
        $.post('param.url',{card:localStorage.getItem("card"),mes:localStorage.getItem("mes"),anio:localStorage.getItem("anio"),anio:localStorage.getItem("anio")}, function(resp){
          if(resp.data = "null"){
            if (resp.success == "false") {
              alert("Error"+resp.message);
            }
            else {
              state.user = {"userId":resp.data.phone, "card":resp.data.card,"mes":resp.data.mes,"anio":resp.data.anio,"password":password};
              nextPage(content, dataPage, update);
              localStorage.removeItem("userId");
              localStorage.removeItem("card");
              localStorage.removeItem("mes");
              localStorage.removeItem("anio");
              localStorage.removeItem("password");
              update();
            }
          }
        }, 'json' )
    });

    col.append(inputCard);
    col.append(inputExpirate);
    col.append(scan);
    col.append(textScan);
    col.append(expirateLeft);
    col.append(expirateRight);
    col.append(textDateExpirate);
    col.append(inputMonth);
    col.append(inputYear);
    col.append(buttonsRegiterCard);
    row.append(col);
    container.append(row);

    return container;

  }

  if(param.page == "success"){
    const container =$('<section class="content-form-succes container"></section>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col s12"></div>');

    col.append(buttonsRegisterUser);
    row.append(col);
    container.append(row);
    const nextScreen = setTimeout(function() {
      Message();
      update();
    }, 3000);
    return container;
  }

}

const nextPage = function(content, dataPage, update){
  content.selectedContent += 1;
  content.dataContent = dataPage[content.selectedContent];
  content.nameContent = dataPage[content.selectedContent].page;
  return update();
}

const validateNumber = function(){
  if($('#inputNumber').val().length == 8 && $('#filled-in-box').is(':checked')){
          $('#btnRegisterNumber').removeClass('disabled');
          $('#btnRegisterNumber').attr("class","waves-effect btn-large yellow darken-1");
  }
}

const validateUser = function(){
  // if($('#inputName').val().length < 3 && $('#inputEmail').val().length != 0 $$ $('#inputClave').val().length != 0 ){
  //         $('#btnRegisterUser').removeClass('disabled');
  //         $('#btnRegisterUser').attr("class","waves-effect btn-large yellow darken-1");
  // }
}

const validateCard = function(){
  if($('#inputMonth').val().length != 0 && $('#inputYear').val().length != 0){
          $('#btnRegisterCard').removeClass('disabled');
          $('#btnRegisterCard').attr("class","waves-effect btn-large yellow darken-1");
  }
}
