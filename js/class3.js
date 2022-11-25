window.onload = () => {
    const btns = document.querySelectorAll("button");

    btns[0].onclick = () => {
        location.href = "https://www.naver.com";
    }

    btns[1].onclick = () => {
        const urlInput = document.querySelector("input");
        urlInput.value = location.pathname;
    }

    btns[2].onclick = () => {
        location.reload();
    }

    btns[3].onclick = () => {
        location.replace("http://www.google.com"); // history 를 남기지 않고 이동한다 뒤로가기 X
    }
}