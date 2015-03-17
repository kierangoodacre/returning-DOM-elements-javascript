var $ = function (selector) {
  var elements = [];

  var divsSelector = document.querySelectorAll('div');

  elements.push(divsSelector);

  var imgSelector = document.querySelectorAll('img.some_class');

  elements.push(imgSelector);

  var idSelector = document.getElementById('some_id');

  elements.push(idSelector);

  var classSelector = document.getElementsByClassName('some_class');

  elements.push(classSelector);

  var arraySelector = document.querySelectorAll('input#some_id');

  elements.push(arraySelector);

 	var allSelector = document.querySelectorAll('div#some_id.some_class');

 	elements.push(allSelector);

  return elements;

	for (var i = 0; i < elements.length; i++) {
	  var answers = elements[i];
	}

	return answers;

}