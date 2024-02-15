function moveBox(color) {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
  
    box1.style.transition = 'top 1.5s ease-in-out, background-color 2.5s ease-out';
    box2.style.transition = 'top 1.5s ease-in-out, background-color 2.5s ease-out';
  // Set the background color of box1 to the corresponding color
  box1.style.backgroundColor = color;

  // Set the border color of box2 to the corresponding color
  box2.style.setProperty('--border-color', color);
  
    if (box1.style.top === '300px') {
      box1.style.top = '-300px';
      box2.style.setProperty('--border-color', color);
      box2.style.backgroundColor = color;
      box2.style.top = '300px';
      box1.style.backgroundColor = 'white';
    } else {
      box1.style.top = '300px';
      box1.style.setProperty('--border-color', color);
      box1.style.backgroundColor = color;
      box2.style.top = '-900px';
      box2.style.backgroundColor = 'white';
    }
  }
  