import { countEmCollection, db } from "./Firebase.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

$("document").ready(() => {
  console.log("R");

  //!_countEm
  const ddate = new Date();
  const yyyy = ddate.getFullYear();
  let mm = ddate.getMonth() + 1;
  let dd = ddate.getDate();

  let formatDate = `${dd}/ ${mm}/ ${yyyy}`;

  // console.log(formatDate);

  const generateRandNumb = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleTraffic = () => {
    const doCount = async () => {
      const newCountRef = await addDoc(countEmCollection, {
        time: ddate,
        date: formatDate,
        randNum: generateRandNumb(1000),
      });
    };

    doCount();
  };

  handleTraffic();

  var aaa = `<div style='width: 800px; height: 250px'>AAA<div>`;

  var Projects = $("#Projects");
  var btnAbc = $("#abc");

  btnAbc.click(() => {
    Projects.append(aaa);
  });

  var f = 0;
  var daText = "Hi, I am full- stack web developer..";
  var speed = 100;

  function typeIt() {
    if (f < daText.length) {
      document.querySelector("#welcomEm").innerHTML += daText.charAt(f);
      f++;
      setTimeout(typeIt, speed);
    }
  }

  typeIt();

  var daModal = `
    
    <div style = 'width: 1000px: height: 800px;'>
    <h1>ASDAS</h1>
    </div>
    
    
    `;

  var Gloria = $("#Gloria");
  Gloria.click(() => {
    console.log(daModal);
    $("#Welcome")
      .append(`<div style = 'width: 1000px; height: 800px; background-color: black;' >aaa
        <h1>ASDAS</h1>
        </div>`);
  });

  //Toggle Dark Mode

  // toggleDarkMode.click(() => {
  //     if (toggleDarkMode.prop('checked')) {
  //         $('*').css('color', 'green');

  //     } else {
  //         $('*').css('color', 'white');
  //     }
  // });
});
