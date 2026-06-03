let question=[
    question1="what does HTML stand for ?",
    question2="Which method is used to get ID"
]


let options=[{
    option1:"Hyper Text Markup Language",
    option2:"High Text Machine Language",
    option3:"Home Tool Markup Language",
    option4:"Hyper Tool Machine Language"
},
    {
        option1:"queryselectorAll",
        option2:"getelementbyID",
        option3:"getElementbyClassName",
        option4:"createElement"
    },
    {
    option1:"Hyper Text Markup Language",
    option2:"High Text Machine Language",
    option3:"Home Tool Markup Language",
    option4:"Hyper Tool Machine Language"
},
    {
        option1:"queryselectorAll",
        option2:"getelementbyID",
        option3:"getElementbyClassName",
        option4:"createElement"
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





optionRendering()
let q=document.getElementById("question")










