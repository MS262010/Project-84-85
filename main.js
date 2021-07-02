canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    car1_width=80;
    car1_height=55;
    car1_x=10;
    car1_y=10;
    car1_image="https://i.postimg.cc/YqdnnNX1/car1.png";

    car2_width=80;
    car2_height=55;
    car2_x=10;
    car2_y=100;
    car2_image="https://i.postimg.cc/tnnW1Kff/car2.png";

    canvas_bg="https://i.pinimg.com/originals/df/b1/99/dfb19993bbbabfbd110610e4dc821b65.png";
     function add(){
         bg_img=new Image();
         bg_img.onload= uploadBackground;
         bg_img.src=canvas_bg;

         car1_img=new Image();
         car1_img.onload= uploadCar1;
         car1_img.src=car1_image;

         car2_img=new Image();
         car2_img.onload= uploadCar2;
         car2_img.src=car2_image;
     }

    function uploadBackground(){
        ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
    }
    function uploadCar1(){
        ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
    }
    function uploadCar2(){
        ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
    }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e){
        keyPressed=e.keyCode;
        console.log(keyPressed)
        if (keyPressed=='37'){
            left1();
        console.log("left");
        }
        if (keyPressed=='38'){
            up1();
            console.log("up");
            }
        if (keyPressed=='39'){
            right1();
            console.log("right");
            }
        if (keyPressed=='40'){
            down1();
            console.log("down");
            }
        if (keyPressed=='65'){
                left2();
            console.log("lefta");
            }
        if (keyPressed=='87'){
                up2();
                console.log("upw");
                }
        if (keyPressed=='68'){
                right2();
                console.log("rightd");
                }
        if (keyPressed=='83'){
                down2();
                console.log("downs");
                }
        if (car1_x>(canvas.width-car1_width)){
             document.getElementById("game_status").innerHTML="Car 1 Won!!"
         }  
        if (car2_x>(canvas.width-car2_width)){
            document.getElementById("game_status").innerHTML="Car 2 Won!!"
        }       
    }
    function up1(){
        if(car1_y>=0){
            car1_y=car1_y-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }
    function down1(){
        if(car1_y<=(canvas.height-car1_height)){
            car1_y=car1_y+10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }
    function left1(){
        if(car1_x>=0){
            car1_x=car1_x-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }
    function right1(){
        if(car1_x<=(canvas.width-car1_width)){
            car1_x=car1_x+10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }

    function up2(){
        if(car2_y>=0){
            car2_y=car2_y-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }
    function down2(){
        if(car2_y<=(canvas.height-car2_height)){
            car2_y=car2_y+10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }
    function left2(){
        if(car2_x>=0){
            car2_x=car2_x-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }
    function right2(){
        if(car2_x<=(canvas.width-car2_width)){
            car2_x=car2_x+10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
        
    }
 