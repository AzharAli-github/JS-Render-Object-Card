let container = document.querySelector('.container');
const persons = [{
        firstName: "Nabi",
        lastName: "Ali",
        profession: "Master in CS",
        imageSrc: "images/Nabi.jpg"
    }, {
        firstName: "Tanveer",
        lastName: "Salman",
        profession: "App Developer",
        imageSrc: "images/Tanveer.png"
    },
    {
        firstName: "Naseer",
        lastName: "Alam",
        profession: "Full-Stack Developer",
        imageSrc: "images/Naseer.jpg"
    },
    {
        firstName: "Suhbath",
        lastName: "Sheikh",
        profession: "Graphic Designer",
        imageSrc: "images/Sohbath.jpg"
    },
    {
        firstName: "Musharaf",
        lastName: "Khalil",
        profession: "Artist|Graphic Designer",
        imageSrc: "images/Musharaf.jpg"
    },
    {
        firstName: "Taighoon",
        lastName: "Shah",
        profession: "Front-end Developer",
        imageSrc: "images/Taighoon.jpg"
    },
    {
        firstName: "Ahsam",
        lastName: "Ali",
        profession: "Graphic Designer",
        imageSrc: "images/Ahsam.jpg"
    },
    {
        firstName: "Masroor",
        lastName: "Alam",
        profession: "Social Media Marketer",
        imageSrc: "images/Masroor.jpg"
    },
    {
        firstName: "Azhar",
        lastName: "Ali",
        profession: "Still Learning",
        imageSrc: "images/Azhar.png"
    },
    {
        firstName: "Sheraz",
        lastName: "Karim",
        profession: "Student",
        imageSrc: "images/Sheraz.jpg"
    },
];

const DispData = persons.map((data) => {
    return (
        `
<div>
    <img src=${data.imageSrc} alt="">
    <h1>${data.firstName + " " + data.lastName}</h1>
    <h2>${data.profession}</h2>
</div>
    `
    )
})

// let text = "";

// for (let x in persons) {
//     text += Object.values(persons[x]) + " ";
// };


// for (let person in persons) {
// console.log(Object.keys(persons));
// values = Object.keys(persons);
// console.log(Object.keys(persons));
// headOne = Object.values(person);
// val = Object.keys(person);
// }

// const DispData = (data) => {
//     return (
//         `
// <div>
//     <img src="images/Abbass.jpg" alt="">
//     <h1>${'data[Object.keys(persons)']}</h1>
//     <h2>Teacher</h2>
// </div>
//     `
//     )
// }
container.innerHTML = DispData.join('');