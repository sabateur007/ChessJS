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
        if(square.firstChild){square.setAttribute('draggable',true)}                 // if square has peice, set that draggable
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
 console.log(allSquares)

allSquares.forEach(square =>{
square.addEventListener('dragstart', dragStart)
square.addEventListener('dragover', dragOver)
square.addEventListener('drop', dragDrop)
})


let startpositionID
let draggedelement

function dragStart(e){
        startpositionID=  e.target.getAttribute('square-id')
        draggedelement =  e.target.firstChild
        console.log(draggedelement)
}

function dragOver(e){
    e.preventDefault()

}

function dragDrop(e){
    e.stopPropagation()
    if(e.target.firstChild === null)
    e.target.append(draggedelement)
    else
    {
    e.target.remove()
    e.target.append(draggedelement)
    }
    //e.target.parentNode.append(draggedelement)
    
}