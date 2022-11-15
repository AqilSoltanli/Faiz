


    
   

    function btn(){
        var input1 = document.getElementById('mebleg').value;
        var input2 = document.getElementById('vaxt').value;
        var input3 = document.getElementById('faiz').value;
        var num1 = Number(input1);
        var num2 = Number(input2);
        var num3 = Number(input3);



        var x = (num1*num3)/100;
        var z = x+num1;
        var y = z/num2;

        document.getElementById('month').innerHTML = z;
        document.getElementById('all').innerHTML = y.toFixed(2);
    }