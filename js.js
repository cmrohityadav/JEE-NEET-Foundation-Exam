const quizData = [{
        question: "Which of the following is the good conductor of electricity?",
        a: "Papera",
        b: "Iron",
        c: "Glass",
        d: "Ebonite",
        correct: "b",
    },
    {
        question: " Magnetic field lines emerge from ",
        a: " South pole",
        b: "North Pole ",
        c: " Center of magnet",
        d: "None of these option ",
        correct: "b",
    },
    {
        question: " Which of the functions are performed by the ovaries? ",
        a: "Formation of ovum ",
        b: " Secretion of Progesterone",
        c: "Secretion of Estrogen ",
        d: " All of the above",
        correct: "d",
    },
    {
        question: "____ is a herbivore  ",
        a: " Whales",
        b: " Eagle",
        c: " Bear",
        d: "Cow ",
        correct: "d",
    },
    {
        question: "HCF of 8, 9, 25 is  ",
        a: " 8",
        b: "9 ",
        c: "25 ",
        d: "1 ",
        correct: "d",
    },
    {
        question: " In a rectangle Length = 8 cm, Breadth = 6 cm. Then its diagonal = … ",
        a: "9cm ",
        b: "14cm ",
        c: "10cm ",
        d: " 12cm",
        correct: "c",
    },
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii.. Dear Candidate, you've scored ${correct} / ${total} </h3>
            
        </div>
    `
}
loadQuestion(index);