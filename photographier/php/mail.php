<!doctype html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
   <title>Ваше сообщение успешно отправлено</title>
</head>

<body>

<?php
   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";

   if(!empty($_POST['name']) and !empty($_POST['phone']) )
   {
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));

      mail('t0637242529@gmail.com', 'Заказ фотосессии',
      'Имя: '.$name.'<br />Телефон: '.$phone.'<br />Почта: '.$mail.'<br />
      Сообщение: '.$message,"Content-type:text/html;charset=UTF-8");

      echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в
      ближайшее время<Br> $back";

      exit;
   }
   else {
      echo "Для отправки сообщения заполните все поля! $back";
      exit;
   }
?>
</body>
</html>
