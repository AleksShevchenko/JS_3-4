
var title = document.createElement('h2');

  title.innerHTML = 'Тест по по программированию';
  title.className = 'title';

var body = document.body ;

  body.appendChild(title);




function createQuestion( questionNumber) {
  var questionNumber;
  var p = document.createElement('p');
  var text = 'Вопрос №';
  var result;

    p.className = 'question';
   	p.innerHTML = (questionNumber + '.' + text + questionNumber);
   	result = body.appendChild(p);
return p.innerHTML;
 } ;

  

function createCheckBox( answerNumber) {
  var answerNumber;
  var description = document.createTextNode('Вариант ответа № ' + answerNumber);

  var label = document.createElement('label');
  var chkBox = document.createElement('input');

  chkBox.type = 'checkbox';
  label.className = 'answer';

  label.appendChild(chkBox);
  label.appendChild(description);

  return body.appendChild(label);
   
 } ;

createQuestion(1 );


createCheckBox( 1 );
createCheckBox( 2 );
createCheckBox( 3 );


createQuestion(2 );


createCheckBox( 1 );
createCheckBox( 2 );
createCheckBox( 3 );

createQuestion(3);

createCheckBox( 1 );
createCheckBox( 2 );
createCheckBox( 3 );


var button = document.createElement('button');

button.innerHTML = 'Проверить результаты';
button.className = 'button';
body.appendChild(button);