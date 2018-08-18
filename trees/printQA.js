let printQuestions = (questions) => {
    let ele = document.getElementById('questions');
    questions.forEach((ans, index) => {
        let html = `<p>${index+1}). ${ans}</p>`;
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

let printConsole = (html) => {
    let ele = document.getElementById('console');
    ele.innerHTML += html;
}

let printQuesHeading = (link) => {
    let ele = document.getElementById('quesHeading'),
    a = ele.querySelector('a');
    a.setAttribute('href',link);
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
    printAnswers,
    printConsole,
    printQuesHeading
}