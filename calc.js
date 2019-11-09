
$(document).ready(function(){
    let num1='';
    let num2=[];
    let operator='';
    $('.key').click(function(){
         num1+=`${(this).html()}`;
        $("#result").text(num1);

})
// $("##result").keypress(function (){
    // $("##result").text(num1);
// })
     $(".keys").click(function(){
        operator=` ${$(this).html()} `;
        num1=num1+operator
        $("#result").text(num1);
        //num2.split(' ');
    })
    num2=num1.split(' ');
  
    $(".equal").click(function(){
        num2=num1.split(' ');
        num1="";
        $("#result").text(equal(num2));
    })
    $(".ce").click(function(){
        num1="";
        //let num2=[];
        //let operator='';
        $("#result").text(num1)
    })
    $(".c").click(function(){
        num1=" ";
        //let num2=[];
        //let operator='';
        $("#result").text("0");
        
    })
    $(".del").click(function(){
        //let num ='';
        num1=num1.slice(0,num1.length-1);
        $("#result").text(num1);
    })
    $(".rev").click(function(){
        num1*=-1;
        $("#result").text(num1);
    
       });
       $(document).keypress(function(event){
        let key = (event.keyCode ? event.keyCode : event.which);
         switch (key){
            
        case 48:
            num1+=0;
            $('#result').text(num1);
            break;
        case 49:
            num1+=1;
            $('#result').text(num1);
            break;
        case 50:
            num1+=2;
            $('#result').text(num1);
            break;
        case 51:
            num1+=3;
            $('#result').text(num1);
            break;
        case 52:
            num1+=4;
            $('#result').text(num1);
            break;
        case 53:
            num1+=5;
            $('#result').text(num1);
            break;
        case 54:
            num1+=6;
            $('#result').text(num1);
            break;
        case 55:
            num1+=7;
            $('#result').text(num1);
            break;
        case 56:
            num1+=8;
            $('#result').text(num1);
            break;
        case 57:
            num1+=9;
            $('#result').text(num1);
            break;
        case 106:
            num1+="*";
            $('#result').text(num1);
            break;
        case 107:
            num1+="+";
            $('#result').text(num1);
            break;
        case 111:
            num1+="/";
            $('#result').text(num1);
            break;
        case 187:
            num1+="=";
            $('#result').text(num1);
            break;
        }
    });
}) 
 

//function handle(num2,operator){

    //return  num2=(num2.split(`${operator}`))
        
//}
function equal(num2){
for(let i=0;i<num2.length;i++){
    if(num2[i]==='*'){
        let jay=Number(num2[i-1])*Number(num2[i+1])
    num2.splice(i-1,3,`${jay}`)
    }
}

for(let i=0;i<num2.length;i++){
    if(num2[i]==='/'){
        let jay1=Number(num2[i-1])/Number(num2[i+1])
        num2.splice(i-1,3,`${jay1}`)
    }
}
for(let i=0;i<num2.length;i++){
    if(num2[i]==='+'){
        let jay2=Number(num2[i-1])+Number(num2[i+1]);
        num2.splice(i-1,3,`${jay2}`) 
    }
}
for(let i=0;i<num2.length;i++){
    if(num2[i]==='-'){
        let jay3=Number(num2[i-1])-Number(num2[i+1])
        num2.splice(i-1,3,`${jay3}`) 
    }
}
 return Number(num2)
}
 
// }
// }

// function checkPhoneKey(key) {
    // return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
    //   key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
//   }
  