'use strict';

const Message=()=>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const row=$('<div class="row conten">');
  const divEngine=$('<div class="col s12 l6 offset-l3"><div class="col s12 l6 offset-l3"><img class="icon-small " src="assets/img/icons/engine.png" alt=""></div></div>');
  const divHello=$('<div class="col s12 l6 offset-l3"><p class="white-text">Hola</p></div>');
  const divBalance=$('<div class=""><img class="icon-small" src="assets/img/icons/eye.png" alt=""><span class="blue-text" > Mostrar Saldo</span></div>');
  const divMovement=$('<div class="col s12 l6 offset-l3"><b><span class="white-text"> ULTIMOS MOVIMIENTOS</span></b><img class="icon-small" src="assets/img/icons/right-arrow-circular-button.png" alt=""></div>');
  const divInfo=$('<div class="info col s12 l6 offset-l3"><img class="icon-large"src="assets/img/icons/icon.png" alt="">');
  const divMessage=$('<div class="texto"><p class="white-text">Aun no realizas tu primer pago ?</p><p class="white-text">Es rapido y sencillo</p></div>');
  const imgOpcion=$('<div class="col s12 l6 offset-l3"><img src="assets/img/icons/send.png" alt=""><img class="icon-option" src="assets/img/icons/code-qr.png" alt="</div>');
  const divOpcion=$('<div class="options col s12 l6 offset-l3 flex spaceAround-flex"><span class="white-text">ENVIAR PAGO</span><span class="white-text">RECIBIR PAGO</span></div>');

  row.append(divEngine);
  row.append(divHello);
  row.append(divBalance);
  row.append(divMovement);
  row.append(divInfo);
  row.append(divMessage);
  row.append(imgOpcion);
  row.append(divOpcion);
  root.append(wrapper);
}

$( _ => {
      const root = $("#root");
      render(root);
});
