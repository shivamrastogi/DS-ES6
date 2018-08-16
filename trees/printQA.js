let printQuestions = (ques) => {
    let ele = document.getElementById('questions');
    ques.forEach((que) => {
        let arr = [];
        formTree(que, arr, 0);
        let html = `<p>${arr}</p>`;
        ele.innerHTML += (html);
    });
}

let printAnswers = (answers) => {
    let ele = document.getElementById('answers');
    answers.forEach((ans, index) => {
        let html = `<p>${index+1}). ${ans}</p>`;
        ele.innerHTML += (html);
    });
}

let formTree = (que, arr) => {
    if (que == null){
        return;
    }

    arr.push(que.data);

    formTree(que.left, arr);
    formTree(que.right, arr);
}

export default {
    printQuestions, 
    printAnswers
}