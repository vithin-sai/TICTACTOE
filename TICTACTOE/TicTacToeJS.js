let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame");
let msgContainer= document.querySelector(".msgContainer");
let msgPara=document.querySelector("#winner");
let reset=document.querySelector(".reset");
let count=0;
let turn=true;

const winplaces=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const Resetgame = () =>{
    count=0;
     turn=true;
     Enableboxes();
     msgContainer.classList.add("hide");
     reset.classList.remove("hide");
};

boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(btn.innerText===""){
            if(turn){
                btn.innerText ="O";
                turn=false;
                count=count+1;
                btn.classList.remove("x");
                btn.classList.add("o");
            }
            else{
                btn.innerText = "X";
                turn=true;
                count=count+1;
                btn.classList.remove("o");
                btn.classList.add("x");
            }
            checkwinner();
            checkDraw(count);
        }
    });
});

const Enableboxes= () =>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
};

const Disableboxes= () =>{
      for(let box of boxes){
         box.disabled=true;
      }
      count=0;
};

const checkDraw =(count) =>{
    if(count===9){
        Draw();
    }
};

const Draw =() =>{
    msgPara.innerText="GAME DRAW";
    msgContainer.classList.remove("hide");
    reset.classList.add("hide");
    Disableboxes();
};

const ShowWinner = (Winner) =>{
    msgPara.innerText=`Congratulations Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    reset.classList.add("hide");
    Disableboxes();
};

const checkwinner = () => {
    for(let place of winplaces){
        let pos1=boxes[place[0]].innerText;
        let pos2=boxes[place[1]].innerText;
        let pos3=boxes[place[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){   
                 ShowWinner(pos1);
            }
        }
    }
};

resetbtn.addEventListener("click",Resetgame);
newbtn.addEventListener("click",Resetgame);
