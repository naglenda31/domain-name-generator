/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let replaced = [];
  let domainList = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "awesome"];
  let noun = ["laboratory", "corp", "enterprise"];
  let extensions = [".com", ".us", ".net", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          domainList.push(" " + pronoun[i] + adj[j] + noun[k] + extensions[l]);
        }
      }
    }

    console.log(domainList);
  }

  let domainName = document.querySelector("#domain-list");

  for (let i = 0; i < domainList.length; i++) {
    domainName.innerHTML += "<li>" + domainList[i] + "</li>";
  }
};
