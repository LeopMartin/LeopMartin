let tab = [];

const sendData = async () => {
  try {
    let sub = document.getElementById('Subject').value
    let mail = document.getElementById('Email').value
    let obj = document.getElementById('Object').value
    if (sub === "" || mail === "" || obj === "") {
      console.log('stop')
      return
    }
    let i = 0;
    let elementList = document.querySelectorAll("input, textarea");
    elementList.forEach((input) => {
      tab[i] = input.value;
      i += 1;
    });
    const response = await fetch(
      `http://3f1ae0d.online-server.cloud:5000test?Email=${tab[0]}&Object=${tab[1]}&Subject=${tab[2]}`,
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "*/*",
          Authorization: "Basic cHJlc3RhdGFpcmVAYm5ic2l0dGVyLmNvbToxMjM0NTY=",
        },
      }
    );
    console.log(response.status)
    if (response.status === 0) {
      sub = ""
      mail = ""
      obj = ""
    }
  } catch (error) {
    console.error(error);
  }
};

let btn = document.getElementById("btn-form");
btn.addEventListener("click", sendData);
