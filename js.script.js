window.onload = function(){
    let divText1 = document.createElement('div');
    divText1.classList.add('text');
    document.body.prepend(divText1);
    let div = document.createElement('div');
    div.classList.add('appatment');
    divText1.after(div);
    let divText2 = document.createElement('div');
    div.after(divText2);
            let nickname = prompt("Please, write your name", "My_Name");
            Work();
            document.getElementById('nick').innerHTML = "<h1>" + nickname + "</h1>";
        };
const imgs = [
            ".\\banan.webp",
            ".\\cherry.webp",
            ".\\lemon.webp",
            ".\\plum.webp",
            ".\\strawberries.webp",
            ".\\watermelon.webp"
];     
function GetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Work(){
    document.body.innerHTML = '<h1><div id="nick"></div></h1><div class="money"></h2><h2>You spent: <div style="color: pink" id="spent">0</div>€</h2><h2>Appatment: <div style="color: pink" id="appatment">0 / 3</div><h2>Your money: <div style="color: pink" id="ymoney">30</div>€</h2></div>'
    document.body.innerHTML += '<div class="container"><div><img id="1" class="imgs" src=""><img id="2" class="imgs" src=""><img id="3" class="imgs" src=""></div><div><img id="4" class="imgs" src=""><img id="5" class="imgs" src=""><img id="6" class="imgs" src=""></div><div><img id="7" class="imgs" src=""><img id="8" class="imgs" src=""><img id="9" class="imgs" src=""></div><button id="btn" class="button">Go</button></div>'

    for(let i = 1; i < 10; i++)
    {
        document.getElementById([i]).setAttribute("src", imgs[GetRandom(0,5)]);
    }
    let btn = document.getElementById('btn');
    let count = 0;
    if(btn){
        btn.addEventListener("click", function(){
            for(let i = 1; i < 10; i++)
            {
                document.getElementById([i]).setAttribute("src", imgs[GetRandom(0,5)]);
            }
            if(count < 2){
                document.getElementById('appatment').innerHTML = ++count + " / 3";
                document.getElementById('ymoney').innerHTML -= Number(10);
                document.getElementById('spent').innerHTML = Number(document.getElementById('spent').innerHTML) + 10;
                if((document.getElementById('1').src == document.getElementById('2').src && document.getElementById('2').src == document.getElementById('3').src) || (document.getElementById('4').src == document.getElementById('5').src && document.getElementById('5').src == document.getElementById('6').src) || (document.getElementById('7').src == document.getElementById('8').src && document.getElementById('8').src == document.getElementById('9').src)){ 
                    alert("Congratulations!");
                    document.querySelector('.container').style.cssText = " background-color: rgba(88, 190, 81, 0.773);";
                    document.getElementById('appatment').innerHTML = count + " / 3";
                    document.getElementById('ymoney').innerHTML = 100;
                    document.getElementById('spent').innerHTML = 0;
                    count = 0;
                    document.getElementById('btn').innerHTML = "Restart";
                    document.getElementById('btn').onclick = function(){
                        window.location.href=".\\index.html";
                    }
                }
            }
            else{
                if((document.getElementById('1').src == document.getElementById('2').src && document.getElementById('2').src == document.getElementById('3').src) || (document.getElementById('4').src == document.getElementById('5').src && document.getElementById('5').src == document.getElementById('6').src) || (document.getElementById('7').src == document.getElementById('8').src && document.getElementById('8').src == document.getElementById('9').src)){ 
                    alert("Congratulations!");
                    document.querySelector('.container').style.cssText = "background-color: rgba(88, 190, 81, 0.773);";
                    document.getElementById('appatment').innerHTML = ++count + " / 3";
                    document.getElementById('ymoney').innerHTML = 100;
                    document.getElementById('spent').innerHTML = 0;
                    count = 0;
                    btn.innerHTML = "Repeat";
                    btn.onclick = function(){
                        window.location.href=".\\index.html";
                    }
                }
                else{
                    alert("Game lose(");
                    document.querySelector('.container').style.cssText = "background-color: rgba(200, 95, 95, 0.655);";
                    document.getElementById('appatment').innerHTML = ++count + " / 3";
                    document.getElementById('ymoney').innerHTML -= Number(10);
                    document.getElementById('spent').innerHTML = Number(document.getElementById('spent').innerHTML) + 10;
                    count = 0;
                    btn.innerHTML = "Repeat";
                    btn.onclick = function(){
                        window.location.href=".\\index.html";
                    }
                }
            }
        });
    }
}
