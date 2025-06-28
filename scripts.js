var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("
");
    
    $('.bg_heart').append("
");
    
    
  },500);
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      
  
        }
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }