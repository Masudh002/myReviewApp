const reviews = [
     {
        id: 1,
        name: "masudh",
        work: "web developer",
        img: "images/msd.jpg",
        text:
         `Highly skilled frontend Developer with deep understanding of HTML,CSS and JAVASCRIPT.
         Strong collaboration skills and passion for creating user-friendly and responsive web interfaces.`
    },
    {
        id: 2,
        name: "kassim",
        work: "graphic designer",
        img: "images/msd.jpg.JPG",
        text:
         `Talented graphic designer with a fair for creativity and an eye for detail.
         creates visually stunning graphics that captivate audiences.`
    },
    {
        id: 3,
        name: "sule",
        work: "android developer",
        img: "",
        text:
         `Experienced Android developer proficient in Java and Kotlin. Strong problem-solving skills and 
         the ability to optimize app performance.Collabaorative team player with excellence communiucation skills.`
    },
    {
        id: 4,
        name: "zena",
        work: "data analyst",
        img: "",
        text: `Skilled data analyst with a strong background in statistical analysis and data manipulation. 
        Proficient in tools such as Python, R and SQL. A reliable and analytical thinker who consistently delivers accurate and actionable results.`
    },
];

//select items
 const img = document.getElementById('person-image');
 const person_name = document.getElementById('person-name');
 const work = document.getElementById('work');
 const info= document.getElementById('info');

 const prvBtn = document.querySelector('.prev');
 const nxtBtn = document.querySelector('.next');
 const randomBtn = document.querySelector('.random-btn');
 
 //set stating element
let currentItem = 0;
 
//load initial item
window.addEventListener("DOMContentLoaded",()=> {
   showPerson(currentItem);
});
// function show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    person_name.innerText = item.name;
    work.innerText = item.work;
    info.innerText = item.text;
}
// next person

nxtBtn.addEventListener('click',() => {
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson();
});

//previous 
prvBtn.addEventListener('click',() => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson();
});

//random person
randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});

  


