let tab = [];

const sendData = async () => {
  try {
    let i = 0;
    let elementList = document.querySelectorAll("input, textarea");
    elementList.forEach((input) => {
      tab[i] = input.value;
      i += 1;
    });
    const response = await fetch(
      `http://127.0.0.1:5000/test?Email=${tab[0]}&Object=${tab[1]}&Subject=${tab[2]}`,
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "*/*",
          Authorization: "Basic cHJlc3RhdGFpcmVAYm5ic2l0dGVyLmNvbToxMjM0NTY=",
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

let btn = document.getElementById("btn-form");
btn.addEventListener("click", sendData);
