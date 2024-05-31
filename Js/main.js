document.querySelector(".btn").addEventListener("click", onToTheNext);
document.querySelector('.tommy').addEventListener('click',tommyP);
document.querySelector('.chuckie').addEventListener('click',chuckieF);
document.querySelector('.lil').addEventListener('click',lilD);
document.querySelector('.phil').addEventListener("click",philD);
document.querySelector('.angelica').addEventListener('click',angelicaP);
document.querySelector('.susie').addEventListener('click',susieC);
document.querySelector('.dil').addEventListener('click',dilP);
document.querySelector('.kimi').addEventListener('click',kimiF);
// document.querySelector(".fa-arrow-right").addEventListener('click',plusOne)

// function plusOne(){
//   let characters = [
//     "tommypickles",
//     "chuckiefinster",
//     "phildeVille",
//     "lildeville",
//     "kimifinster",
//     "angelicapickles",
//     "susiecarmichael",
//     "dilpickles",
//   ];
//   // for(let i=0;i<=characters.length-1;i++){
//    const url = `https://rugrats-api.herokuapp.com/api/${characters[i]}`;
//   console.log(url)
//    fetch(url)
//    .then((res) => res.json())
//    .then((data) => {
//      console.log(data.fullName);

//      document.querySelector(".fullName").innerText = data.fullName;
//      document.querySelector(".Age").innerText = data.Age;
//      // document.querySelector(".Interest").innerText = data.Interests;
//      document.querySelector(".Personality").innerText = data.Personality;
//      document.querySelector(".Quote").innerText = data.Quote;
//      document.querySelector(".Enemies").innerText = data.Enemies;
//      document.querySelector(".card-img-top").src = `${data.image}`;
//    })

//    .catch((err) => {
//      console.log(`error${err}`);
//    });
//   }
// // }



function tommyP(){
  document.querySelector('.card').classList.remove('hidden')
const url = `https://rugrats-api-k1v5.onrender.com/api/${"tommypickles"}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.querySelector(".fullName").innerText = data.fullName;
    document.querySelector(".Age").innerText = data.Age;
    // document.querySelector(".Interest").innerText = data.Interests;
    document.querySelector(".Personality").innerText = data.Personality;
    document.querySelector(".Quote").innerText = data.Quote;
    document.querySelector(".Enemies").innerText = data.Enemies;
    document.querySelector(".card-img-top").src = `${data.image}`;
  })

  .catch((err) => {
    console.log(`error${err}`);
  });

}
function chuckieF(){
  document.querySelector('.card').classList.remove('hidden')
  const url = `https://rugrats-api-k1v5.onrender.com/api/${"chuckiefinster"}`;
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
  
      document.querySelector(".fullName").innerText = data.fullName;
      document.querySelector(".Age").innerText = data.Age;
      // document.querySelector(".Interests").innerText = data.Interests;
      document.querySelector(".Personality").innerText = data.Personality;
      document.querySelector(".Quote").innerText = data.Quote;
      document.querySelector(".Enemies").innerText = data.Enemies;
      document.querySelector(".card-img-top").src = `${data.image}`;
    })
  
    .catch((err) => {
      console.log(`error${err}`);
    });
  
}
function lilD (){
  document.querySelector('.card').classList.remove('hidden')
  const url = `https://rugrats-api-k1v5.onrender.com/api/${"lildeville"}`;
    
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    
        document.querySelector(".fullName").innerText = data.fullName;
        document.querySelector(".Age").innerText = data.Age;
        document.querySelector(".Personality").innerText = data.Personality;
        document.querySelector(".Quote").innerText = data.Quote;
        document.querySelector(".Enemies").innerText = data.Enemies;
        document.querySelector(".card-img-top").src = `${data.image}`;
      })
    
      .catch((err) => {
        console.log(`error${err}`);
      });
}
 function philD (){
  document.querySelector('.card').classList.remove('hidden')
    const url = `https://rugrats-api-k1v5.onrender.com/api/${"phildevill"}`;
      
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
      
          document.querySelector(".fullName").innerText = data.fullName;
          document.querySelector(".Age").innerText = data.Age;
         document.querySelector(".Interests").innerText = data.Interests;
          // document.querySelector(".Personality").innerText = data.Personality;
          document.querySelector(".Quote").innerText = data.Quote;
          document.querySelector(".Enemies").innerText = data.Enemies;
          document.querySelector(".card-img-top").src = `${data.image}`;
        })
      
        .catch((err) => {
          console.log(`error${err}`);
        });
      
}
function angelicaP(){
  document.querySelector('.card').classList.remove('hidden')
  const url = `https://rugrats-api-k1v5.onrender.com/api/${"angelicapickles"}`;
        
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
        
        document.querySelector(".fullName").innerText = data.fullName;
            document.querySelector(".Age").innerText = data.Age;
            document.querySelector(".Personality").innerText = data.Personality;
            document.querySelector(".Quote").innerText = data.Quote;
            document.querySelector(".Enemies").innerText = data.Enemies;
            document.querySelector(".card-img-top").src = `${data.image}`;
          })
        
          .catch((err) => {
            console.log(`error${err}`);
          });
        
}
function susieC(){
  document.querySelector('.card').classList.remove('hidden')
  const url = `https://rugrats-api-k1v5.onrender.com/api/${"susiecarmichael"}`;
          
    fetch(url)
      .then((res) => res.json())
        .then((data) => {
         console.log(data);
          
          document.querySelector(".fullName").innerText = data.fullName;
          document.querySelector(".Age").innerText = data.Age;
           document.querySelector(".Interests").innerText = data.Interests;
          document.querySelector(".Quote").innerText = data.Quote;
          document.querySelector(".Enemies").innerText = data.Enemies;
          document.querySelector(".card-img-top").src = `${data.image}`;
           })
          
          .catch((err) => {
           console.log(`error${err}`);
          });
          
}
function dilP(){
  document.querySelector('.card').classList.remove('hidden')
  const url = `https://rugrats-api-k1v5.onrender.com/api/${"dilpickles"}`;
          
    fetch(url)
      .then((res) => res.json())
        .then((data) => {
         console.log(data);
          
          document.querySelector(".fullName").innerText = data.fullName;
          document.querySelector(".Age").innerText = data.Age;
          document.querySelector('.Interests').innerText = data.Interests;
          document.querySelector(".Quote").innerText = data.Quote;
          document.querySelector(".Enemies").innerText = data.Enemies;
          document.querySelector(".card-img-top").src = `${data.image}`;
           })
          
          .catch((err) => {
           console.log(`error${err}`);
          });
          
}

function kimiF(){
  document.querySelector('.card').classList.remove('hidden')
  const url = `https://rugrats-api-k1v5.onrender.com/api/${"kimifinster"}`;
              
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
              
        document.querySelector(".fullName").innerText = data.fullName;
        document.querySelector(".Age").innerText = data.Age;
        document.querySelector('.Interests').innerText = data.Interests;
        document.querySelector(".Quote").innerText = data.Quote;
        document.querySelector(".Enemies").innerText = data.Enemies;
        document.querySelector(".card-img-top").src = `${data.image}`;
    })
              
       .catch((err) => {
        console.log(`error${err}`);
    });
              
}



function onToTheNext() {
  document.querySelector('.card').classList.remove('hidden')
  let random = Math.floor(Math.random() * 8);
  // charactername = characters[random];
  let characters = [
    "tommypickles",
    "chuckiefinster",
    "phildeVille",
    "lildeville",
    "kimifinster",
    "angelicapickles",
    "susiecarmichael",
    "dilpickles",
  ];
  let charactername =
    characters[random] || document.querySelector("input").value;
  const url = `https://rugrats-api.cyclic.app/api/${charactername}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.fullName);

      document.querySelector(".fullName").innerText = data.fullName;
      document.querySelector(".Age").innerText = data.Age;
      // document.querySelector(".Interest").innerText = data.Interests;
      document.querySelector(".Personality").innerText = data.Personality;
      document.querySelector(".Quote").innerText = data.Quote;
      document.querySelector(".Enemies").innerText = data.Enemies;
      document.querySelector(".card-img-top").src = `${data.image}`;
    })

    .catch((err) => {
      console.log(`error${err}`);
    });
}
// function setImageVisible(, visible) {
//   var img = document.querySelector('.card');
//   img.style.visibility = (visible ? 'visible' : 'hidden');
// }
