var bluePos;
var redPos;
var bluePos1;
var redPos1;
var bluePos2;
var redPos2;
  
function blueMove1() {
    var elem = document.getElementById("bluecar1");   
    elem.style.display='initial';
    var pos = 0;
    var id = setInterval(frame, 15);

    function frame() {
      bluePos=pos;
      if(redPos==bluePos+110)
        alert("Crashed");

      if (pos == 500) {
        clearInterval(id);
        elem.style.display='none';
        blueMove1();
      } 
      else {
        pos++; 
        elem.style.top = pos + 'px'; 
      }
    }
  }

  function redMove1() {
    var elem = document.getElementById("redcar1");   
    elem.style.display='initial';
    var pos = 500;
    var id = setInterval(frame, 15);  

    function frame() {
      redPos=pos;
      if (pos == 0) {
        clearInterval(id);
        elem.style.display='none';
      } 
      else {
        pos--; 
        elem.style.top = pos + 'px'; 
      }
    }
  }

  function blueMove2() {
    var elem = document.getElementById("bluecar2");   
    elem.style.display='initial';
    var pos = 0;
    var id = setInterval(frame, 15);

    function frame() {
      bluePos1=pos;
      if(redPos1==bluePos1+110)
        alert("Crashed");
      if (pos == 500) {
        clearInterval(id);
        elem.style.display='none';
        blueMove2();
      } 
      else {
        pos++; 
        elem.style.top = pos + 'px';   
      }
    }
  }

  function redMove2() {
    var elem = document.getElementById("redcar2");   
    elem.style.display='initial';
    var pos = 500;
    var id = setInterval(frame, 15);

    function frame() {
      redPos1=pos;
      if (pos == 0) {
        clearInterval(id);
        elem.style.display='none';
      } 
      else {
        pos--; 
        elem.style.top = pos + 'px'; 
      }
    }
  }

  function blueMove3() {
    var elem = document.getElementById("bluecar3");   
    elem.style.display='initial';
    var pos = 0;
    var id = setInterval(frame, 15);

    function frame() {
      bluePos2=pos;
      if(redPos2==bluePos2+110)
      alert("Crashed");
      if (pos == 500) {
        clearInterval(id);
        elem.style.display='none';
        blueMove3();
      } 
      else {
        pos++; 
        elem.style.top = pos + 'px';      
      }
    }
  }

  function redMove3() {
    var elem = document.getElementById("redcar3");   
    elem.style.display='initial';
    var pos = 500;
    var id = setInterval(frame, 15);

    function frame() {
      redPos2=pos;
      if (pos == 0) {
        clearInterval(id);
        elem.style.display='none';
      } 
      else {
        pos--; 
        elem.style.top = pos + 'px'; 
      }
    }
  }
