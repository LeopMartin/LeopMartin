// let tab = [];

// const sendData = async () => {
//   try {
//     let i = 0;
//     let elementList = document.querySelectorAll("input, textarea");
//     elementList.forEach((input) => {
//       tab[i] = input.value;
//       i += 1;
//     });
//     let data = JSON.stringify(mailData)
//     const response = await fetch(
//       `http://127.0.0.1:5000/test?${data}`,
//       {
//         method: "POST",
//         body: 'Hello world',

//       }
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };

let mailData = {
  from: "info.freelance@leop.me",
  to: "info.freelance@leop.me",
  subject: "test",
  text: "test email"
};

const sendData = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:5000/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('Email envoyé');
    }
  } 
  
  xhr.send(JSON.stringify(mailData));
}

let btn = document.getElementById("btn-form");
btn.addEventListener("click", sendData);