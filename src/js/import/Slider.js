//Создаём переменную, в которой будут находиться наши превью
let videos;

//Запускаем функцию, которая найдёт все видео на странице и добавит обработчики событий
Init();

function Init()
{
	//Получаем видео
	videos = document.getElementsByClassName("item__thumb");

	for(var i = 0; i < videos.length; i++)
	{
		//Добавляем обработчик события наведения мыши
		videos[i].addEventListener("click", function(e) { MouseEnter(e.target); });

		//Добавляем обработчик события выходу курсора за границы элемента
		videos[i].addEventListener("mouseleave", function(e) { MouseLeave(e.target); });
	}

}

//Если мышь наведена, просто запускаем ролик
function MouseEnter(e)
{
	e.play();
}

//Если курсор выходит за пределы элемента, то мы сначала ставим видео на паузу
//А потом перезагружаем его, чтобы отобразился постер
function MouseLeave(e)
{
	e.pause();
	e.load();
}