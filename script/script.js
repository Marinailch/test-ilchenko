function AjaxFormRequest(result_id,form_id,url) {
//проверка заполненности обязательных полей - можно удалить
var yourlinks = $("#"+form_id+" [yourbest='true']"); var yourdostup = '';
for(var i_yourlinks=0; i_yourlinks<yourlinks.length; i_yourlinks++) {
if ($(yourlinks[i_yourlinks]).val().length == 0) {
$(yourlinks[i_yourlinks]).css("border","1px solid red");
yourdostup = "off"; }
else $(yourlinks[i_yourlinks]).css("border","1px solid #00b7f4"); } if (yourdostup == "off" || !$("div").hasClass("blavtors")) return false;
//end проверка заполненности обязательных полей
jQuery.ajax({
url:      url,    //Адрес подгружаемой страницы
type:     "POST", //Тип запроса
dataType: "html", //Тип данных
data: jQuery("#"+form_id).serialize(),
success: function(response) { //Если все нормально
document.getElementById(result_id).innerHTML = response;  //ответ формы берется с обработчика php, например: echo 'Сообщение успешно отправлено!';
$("#"+result_id).show('medium', function() {setTimeout(function() {$("#"+result_id).hide('slow');}, 2000);});},
error: function(response)   { //Если ошибка
document.getElementById(result_id).innerHTML = "Ошибка при отправке формы";
$("#"+result_id).show('medium', function() {setTimeout(function() {$("#"+result_id).hide('slow');}, 2000);});}});
}



  //Функция показа menu
      function block(block){
          document.getElementById('menu').style.display = "block";
          document.getElementById('menu_mob').style.display = "none";


      }
  function none(none){
      document.getElementById('menu').style.display = "none";
      document.getElementById('menu_mob').style.display = "block";

  }

function visible_search(block){
document.getElementById('search').style.visibility = "visible";
  
}


  
  // ---------------slider
 
  var array_sale = new Array(
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
  );//массивы с путями к картинкам


var a = 0;
  function imageRotator() {
    
    var image = document.getElementById("pict");
    a++;
    if (a >= array_sale.length) a = 0;
    image.src = array_sale[a];
    window.setTimeout(imageRotator, 10000);
  }
  function left() {
    var image = document.getElementById("pict");
    a--;
    if (a < 0) a = array_sale.length -1;
    image.src = array_sale[a];
  }
  function right() {
    var image = document.getElementById("pict");
    a++;
    if (a >= array_sale.length) a = 0;
    image.src = array_sale[a];
  }

  var i = 0;
  function image() {
    var image = document.getElementById("rotator");
    i++;
    if (i >= array.length) i = 0;
    image.src = array[i];
  }

  function image_one(j) {
    show('block');
    var image = document.getElementById("rotator");
    image.src = array[j];
  }
  //Функция показа
      function show(state){
          document.getElementById('window').style.display = state;      
          document.getElementById('wrap').style.display = state;  
      }

// -------------------search
var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return;
  }
  
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");
  
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;

  
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:#64c3f3'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
 } 