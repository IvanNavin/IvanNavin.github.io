let pages = 10; /*количество страниц*/
document.getElementById('pagination').innerHTML = createPagination(pages, 5); /*Инициализация*/ 

function createPagination(pages, page) {
  let str = '<div class="paginator">'; /*Создаём виртуальный блок*/
  let active; /*Состояние активной ячейки*/
  let pageCutLow = page - 1; /*Колличество страниц в paginator*/
  let pageCutHigh = page + 1; /*Колличество страниц в paginator*/
  if (page > 1) { /*Если страниц больше чем одна есть кнопка влево*/
    str += '<div class="elipse"><a class="simvol" id="lt" onclick="createPagination(pages, '+(page-1)+')">&lt;</a></div>';
  }
  if (pages < 6) { /*Перестраховка */
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "elipse";
      str += '<div class="'+active+'"><a class="simvol" onclick="createPagination(pages, '+p+')">'+ p +'</a></div>';
    }
  }
  else { /*А вот здесь происходит магия */
    if (page === 1) pageCutHigh += 2; /* Если page = 1 добавить две */
    if (page === pages) pageCutLow -= 2; /*Если page = pages убрать две */
    for (let p = pageCutLow; p <= pageCutHigh; p++) { /*Итак тут цикл */
      if (p === 0) { /*Перестраховка */
        p += 1;
      }
      if (p > pages) { /*Идём дальше */
        continue
      }
      active = page == p ? "active" : "elipse";
      str += '<div class="'+active+'"><a class="simvol" onclick="createPagination(pages, '+p+')">'+ p +'</a></div>'; 
      /*Благодаря цыклу добавляем столько ячеек сколько надо*/
    }
  }
  if (page < pages) {/*Если page меньше чем pages есть кнопка вправо*/
    str += '<div class="elipse"><a class="simvol" id="gt" onclick="createPagination(pages, '+(page+1)+')">&gt;</a></div>';
  }
  var request = new XMLHttpRequest(); /*Делаем XHR запрос */
  request.open("GET", "test.json", true); /*Берём его из test.json*/
  request.responseType = 'json'; /*Из запроса получаем ответ в виде json */
  request.onreadystatechange = function() { /*На каждое изменение вызываем функцию */
    if (request.readyState === 4 && request.status === 200) { /* Проверка всё ли в порядке */
      for (let i = 0; i < pages; i++) { 
        var pathId = request.response[i]["id"]; /* Перебераю id в test.json */
        var pathCity = request.response[i]["city"]; /* Перебераю city в test.json */
        if (page == pathId){ /* Если страница совпадает с id в test.json*/
          str += '</div><p>Selected city: ' + pathCity; /* тогда добавляем city из test.json */
        }
      }
    }
    document.getElementById('pagination').innerHTML = str; /*Добавляем в pagination созданный созданный нами код */
  }
  request.send(); /* Запрос отправлен */
  return str; /* вернуть наш код */
}

/* Спасибо за внимание */