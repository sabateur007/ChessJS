const gameboard = document.querySelector("#gameboard")
const playerDisplay =  document.querySelector("#player")
document.querySelector("#info-dispaly")

const startpeices = [
rook, knight, bishop, queen, king, bishop, knight, rook,
pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
'','','','','','','','',
'','','','','','','','',
'','','','','','','','',
'','','','','','','','',
pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
rook, knight, bishop, queen, king, bishop, knight, rook]

function createboard(){
    startpeices.forEach((startpeice, i) => { 
        const square =  document.createElement('div')                                  //added a div in chessboard
        square.classList.add('square')                                                //div hold square class defined in stylesheet
        square.innerHTML = startpeice                                                 //setting peice info inside the square
        square.setAttribute('square-id',i)                                           //index of square
        square.setAttribute('draggable',true)                 // if square has peice, set that draggable
        const row =  Math.floor((63-i)/8+1)
        if(row%2 ===0){
            square.classList.add(i%2===0?"colorone":"colortwo")                        //coloring the chessboard
        }
        else
        square.classList.add(i%2===0?"colortwo":"colorone")
         if(i<=15)
         square.firstChild.firstChild.classList.add('peicecolorone')               // coloring the peices
        if(i>=48)
        square.firstChild.firstChild.classList.add('peicecolortwo')

        // square.classList.add('kalarone')
        // square.classList.add('kalartwo')
        gameboard.append(square)                                        //finally, appending the whole square div inside gameboard div
    });
}
createboard()

const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach(square =>{
square.addEventListener('dragstart', dragStart)
square.addEventListener('dragover', dragOver)
square.addEventListener('drop', dragDrop)
})


let startpositionID
let draggedelement


function dragStart(e){
      if(e.target.firstChild === null)
     e.preventDefault()
    else
    {
        startpositionID=  e.target.getAttribute('square-id')
        draggedelement =  e.target.firstChild
        // console.log(e.target)
        //console.log(draggedelement)
          legalMoves(draggedelement, startpositionID)
        // draggedelement.addEventListener('dragstart', dragStart)
        // draggedelement.addEventListener('dragover', dragOver)
        // draggedelement.addEventListener('drop', dragDrop)
}
}

function dragOver(e){
    e.preventDefault()

}



function dragDrop(e){
    //console.log("evvventt"+ JSON.stringify(e.target))
    e.stopPropagation()
    
    if(e.target.firstChild === null)
    e.target.append(draggedelement)
    else
    {
          console.log(`drop place` + ` `+ e.target)
        sq = e.target.parentElement
   sq.innerHTML= null

   
    sq.append(draggedelement)
    }
    
    //e.target.parentNode.append(draggedelement)
    
}

function legalMoves(draggedelement, startpositionID)
{
    console.log(draggedelement)
    typePeice = draggedelement.getAttribute("id")
     if(typePeice === "rook")
     {
        rookmoves(startpositionID)
     }
     if(typePeice === "king")
     {
        kingmoves(startpositionID)
     }
     if(typePeice === "queen")
     {
        queenmoves(startpositionID)
     }
     if(typePeice === "bishop")
     {
        bishopmoves(startpositionID)
     }
     if(typePeice === "knight")
     {
        knightmoves(startpositionID)
     }
     if(typePeice === "pawn")
     {
        pawnmoves(startpositionID)
     }

}

 function rookmoves(startpositionID)
{
    console.log("start postion is" + startpositionID)
     console.log("the rook has moved")
     let row = (startpositionID+1)/8
     let colm = (startpositionID)%8
     
}

function kingmoves(startpositionID)
{
    console.log("start postion is" + startpositionID)
     console.log("the king has moved")
}

function queenmoves(startpositionID)
{
    console.log("start postion is" + startpositionID)
    console.log("the queen has moved")
}

function bishopmoves(startpositionID)
{
    console.log("start postion is" + startpositionID)
     console.log("the bishop has moved")
}

function knightmoves(startpositionID)
{
    console.log("start postion is" + startpositionID)
     console.log("the knight has moved")
}

function pawnmoves(startpositionID)
{
    console.log("start postion is" + startpositionID)
     console.log("the pawn has moved")
}
