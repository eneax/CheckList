document.addEventListener("DOMContentLoaded", function() {

  var form = document.querySelector('#enter');
  var input = form.querySelector('input');
  var mainDiv = document.querySelector('.main');
  var ul = document.querySelector('#list');
  var filterDivElement = document.querySelector('#filterDiv');
  var filterLabelElement = document.querySelector('#filterLabel');
  var filterCheckBoxElement = document.querySelector('input[type=checkbox]');

  form.addEventListener('submit', function(e) {    
    e.preventDefault();
    var text = input.value;
    input.value = '';   
    var li = createLI(text);
    ul.appendChild(li);
  });

  filterCheckBoxElement.addEventListener('change', function(e) {
    var isChecked = e.target.checked;
    var lis = ul.children;
    if (isChecked) {
      for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        if (li.className === 'checked') {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      }
    } else {
      for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        li.style.display = '';
      }
    }
  });

  ul.addEventListener('change', function(e) {
    var checkbox = e.target;
    var checked = checkbox.checked;
    var listItem = checkbox.parentNode.parentNode;
    if (checked) {
      listItem.className = 'checked';
    } else {
      listItem.className = '';
    }
  });

  ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') { 
      var button = e.target;
      var li = button.parentNode;
      var ul = li.parentNode;
      if (button.textContent === 'Remove') {
        ul.removeChild(li);
      } else if (button.textContent === 'Edit') {
        var span = li.firstElementChild;
        var input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'Save';
      } else if (button.textContent === 'Save') {
        var input = li.firstElementChild;
        var span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'Edit';
      }
    }
  });

  function createLI(text) {
    var li = document.createElement('li');

    var span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);

    var label = document.createElement('label');
    label.textContent ='Check ';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    li.appendChild(editButton);
    
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    li.appendChild(removeButton);
    
    return li;
  }

});


  
