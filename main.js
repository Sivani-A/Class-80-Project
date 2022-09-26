all_lines_array=[];
function display_lines(){
  for(var j=1;j<=6; j++){
    var line =document.getElementById("text_input_"+j).value;
    all_lines_array.push(line);
    }
    var joined_array =all_lines_array.join("."); 
document.getElementById("para1").innerHTML=joined_array;
  }
all_lines_array2=[]
  function display_lines2(){
    console.log("display_lines2");
    for(var j=6;j<=12; j++){
      var line =document.getElementById("text_input_"+j).value
      all_lines_array2.push(line);
      }
      var joined_array =all_lines_array2.join("."); 
  document.getElementById("para2").innerHTML=joined_array;
    }


