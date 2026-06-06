let question=[
    "what is a baby dog called ?",
    "Which is the largest animal in the Earth ?",
    "Which animal is known as King of the Jungle ?",
    "Which animal is tallest in the world",
]

let options=[{
    option1:"Kitten",
    option2:"Half",
    option3:"Puppy",
    option4:"Cub"
},
    {
        option1:"Elephant",
        option2:"Blue Whale",
        option3:"Giraffe",
        option4:"Shark"
    },
    {
    option1:"Tiger",
    option2:"Lion",
    option3:"Fox",
    option4:"Bear"
},
    {
        option1:"Elepant",
        option2:"Giraffee",
        option3:"Tiger",
        option4:"Deer"
    }
]
// question pack



let noofQuestions=[] //having option class


let btnContainer=document.querySelectorAll(".options")

btnContainer.forEach((optionpack)=>{
   noofQuestions.push(optionpack)
})

let optionCont=[]

let optionPack=document.querySelectorAll(".questionPack")

optionPack.forEach((qpack)=>{
    optionCont.push(qpack)

})



let optionContainer=document.querySelector(".options")
function optionRendering(){
    for(i=0;i<=3;i++){
    let button1=document.createElement("button")
    button1.textContent=options[i].option1
    button1.classList.add("option")
    noofQuestions[i].appendChild(button1)
    let button2=document.createElement("button")
    button2.textContent=options[i].option2
     button2.classList.add("option")
     noofQuestions[i].appendChild(button2)
    let button3=document.createElement("button")
    button3.textContent=options[i].option3
     button3.classList.add("option")
     noofQuestions[i].appendChild(button3)
    let button4=document.createElement("button")
    button4.textContent=options[i].option4
    button4.classList.add("option")
    noofQuestions[i].appendChild(button4)

    optionPack[i].appendChild(noofQuestions[i])
    
    }
}

let qa=document.getElementById("question")

// slide
let slidecounter=0
console.log(optionPack)
qa.textContent=question[slidecounter]
function slide(){
     slidecounter++
     if(slidecounter<=3){
        
    optionPack.forEach((slideItems)=>{
    slideItems.style.transform=`translateX(${slidecounter*-100}%)`
    
    qa.textContent=question[slidecounter]
    
   })

}
else{
    slidecounter=0
    optionPack.forEach((slideItems)=>{
    slideItems.style.transform=`translateX(${slidecounter*-100}%)`
     qa.textContent=question[0]
   })
}
}


optionRendering()
let q=document.getElementById("question")


let opts=document.querySelectorAll(".options")

let Answers=[
    "Puppy",
    "Blue Whale",
    "Lion",
    "Giraffee"
]
let summa=[]

let urAnswer=0;

let ans=0

function callback(){
    console.log(ans)
}

opts.forEach((optz,callback)=>{
    optz.addEventListener("click",function(e){
      let final=e.target.textContent
      console.log(final)
      summa.push(final)
   if(final===Answers[slidecounter])
       urAnswer++
       ans++
     
       })
    
})




















