$(document).ready(function () {
var strict = "off";
var correct = 1;
var power = "off";

if(correct === 21) {
    window.alert("You Won!");
    num = [];
    newArr = [];
    correct = 1;
}

var b = function blue() {
    setTimeout(function() {
        var a = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
        a.play();
        $('#blue').css({
            'background-color':'#021AFE',
        })
    },t * 1000)
    setTimeout(function() {
        $('#blue').css({
            'background-color':'#2C36B1',
        })
    },[t + 1] * 1000)
}

var g = function green() {
    setTimeout(function() {
        var b = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
        b.play();
        $('#green').css({
            'background-color':'#47FA01',
            })
    },t * 1000)
        setTimeout(function() {
            $('#green').css({
                'background-color':'#5FB84B'
            })
        },[t + 1] * 1000)
    }

var r = function red() {
    setTimeout(function() {
        var c = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
        c.play();
        $('#red').css({
            'background-color':'#FE0202',
        })
    },t * 1000)
    setTimeout(function() {
        $('#red').css({
            'background-color':'#A10F01',
        })
    },[t + 1] * 1000)
}

var y = function yellow() {
    setTimeout(function() {
        var d = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
        d.play();
        $('#yellow').css({
            'background-color':'#FEF902',
        })

    },t * 1000)
    setTimeout(function() {
        $('#yellow').css({
            'background-color':'#A3A40A',
        })
    },[t + 1] * 1000)
}

    $('#on').on('click', function() {
        if(power === "off") {
            power = "on";
        $('#on').css({
            'margin-left': '35%',
        })
    
        $('#strict').on('click', function() {
            if(strict === "off"){
            strict = "on";
            $('#strict').css({
             'background-color':'red',
            })
        }else{
            strict = "off";
            $('#strict').css({
                'background-color':'#C3CA57',
            })
        }
        })

    $('#start').on('click', function() {
        $('#count').html(correct);
        $('#count').css({
            'font-family':'monospace',
            'font-size':'21px',
            'text-align':'center',
            'color':'red',
        })
    


        

       num=[];    

    function callColor(val){
            num.push(val);       
    setTimeout(function() {
            var arr =[b,y,r,g];
            for(var i=0; i<num.length; i++) {
                 t = i;
                    arr[num[i]](t);

            }
        },3000);
    }
   
         callColor(Math.floor((Math.random() * 4) + 0)); 
        

         var newArr=[];

         $('#blue').on('click', function() {
            var a = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
            newArr.push(0);
            a.play();
            $('#blue').css({
                'background-color':'#021AFE',
            })
            setTimeout(function() {
                $('#blue').css({
                    'background-color':'#2C36B1',
                })
            },1500)
            check();
         })
         $('#green').on('click', function() {
             newArr.push(3);
            var b = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
            b.play();
            $('#green').css({
                'background-color':'#47FA01',
                })
                setTimeout(function() {
                    $('#green').css({
                        'background-color':'#5FB84B'
                    })
                },1500)
                check();
         })
         $('#red').on('click', function() {
             newArr.push(2);
            var c = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
            c.play();
            $('#red').css({
                'background-color':'#FE0202',
            })
            setTimeout(function() {
                $('#red').css({
                    'background-color':'#A10F01',
                })
            },1500)
            check();
         })
       $('#yellow').on('click', function() {
           newArr.push(1);
        var d = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
        d.play();
        $('#yellow').css({
            'background-color':'#FEF902',
        })
        setTimeout(function() {
            $('#yellow').css({
                'background-color':'#A3A40A',
            })
        },1500)
        check();
       })


       function check() {
           
        if(strict === "on" && newArr[newArr.length-1] !== num[newArr.length-1]) {
            $('#count').html("!!");          
            setTimeout(function() {
                $('#count').html(correct);
            },1500);
            num = [];
            newArr = [];
            correct = 1;
            callColor(Math.floor((Math.random() * 4) + 0));

        }else if(newArr[newArr.length-1] !== num[newArr.length-1]){
           $('#count').html("!!");          
           setTimeout(function() {
               $('#count').html(correct);
           },1500);
           setTimeout(function() {
            var arr =[b,y,r,g];
            for(var i=0; i<num.length; i++) {
                t=i;
         arr[num[i]](i);
            }
           },3000);
           newArr=[];       
        }else if(num.length === newArr.length){
          $('#count').html(correct+=1);
          callColor(Math.floor((Math.random() * 4) + 0));
          newArr=[];
        }
        }


        
    })
  
  }
  $('#on').on('click', function() {
    if(power === "on"){
        power = "off";
        $('#on').css({
  'margin-left': '53%',
})
$('#count').html("");
newArr = [];
num = [];
correct = 1;
}else{
    power = "on";
        $('#on').css({
            'margin-left': '35%',
        })
}
})
    })
  
})