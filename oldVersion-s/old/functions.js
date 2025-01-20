import {
  countProjektsCollection,
  countNavBarCollection,
  countFooterCollection,
} from "./Firebase.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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

export const clickTest = (whichSection, whatClicked) => {
  switch (whichSection) {
    case "navBar":
      const doCountNavbar = async () => {
        const newCountRef = await addDoc(countNavBarCollection, {
          time: ddate,
          date: formatDate,
          randNum: generateRandNumb(1000),
          whatClicked: whatClicked,
        });
      };

      doCountNavbar();
      break;

    case "projekt":
      const doCountProjekts = async () => {
        const newCountRef = await addDoc(countProjektsCollection, {
          time: ddate,
          date: formatDate,
          randNum: generateRandNumb(1000),
          whatClicked: whatClicked,
        });
      };

      doCountProjekts();
      break;

    case "footer":
      const doCountFooter = async () => {
        const newCountRef = await addDoc(countFooterCollection, {
          time: ddate,
          date: formatDate,
          randNum: generateRandNumb(1000),
          whatClicked: whatClicked,
        });
      };

      doCountFooter();
      break;
  }
};
