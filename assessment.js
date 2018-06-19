(function(){
    'use strict'
    const answers = [
        '{userName}はどうぶつに例えると犬です。',
        '{userName}はどうぶつに例えると猫です。',
        '{userName}はどうぶつに例えるとキジです。',
        '{userName}はどうぶつに例えるとトラです。',
        '{userName}はどうぶつに例えるとウサギです。',
        '{userName}はどうぶつに例えるとワニです。',
        '{userName}はどうぶつに例えるとイルカです。',
        '{userName}はどうぶつに例えるとチョウです。',
        '{userName}はどうぶつに例えるとシカです。',
        '{userName}はどうぶつに例えるとタカです。'
    ];

    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    userNameInput.onkeydown = (event) =>{
        if(event.keyCode === 13)
        {
            assessmentButton.click();
        }
    }
    assessmentButton.onclick = () => {

        const userName = userNameInput.value;

        if(userName.length === 0){
            return;
        }

        removeAll(resultDivided);
        removeAll(tweetDivided);
        const result = assessment(userName);

        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);

        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたをどうぶつに例えると') + '&ref_src=twsrc%5Etfw';
        anchor.setAttribute('href',hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text',result);
        anchor.innerText = 'Tweet #あなたをどうぶつに例えると';
        tweetDivided.appendChild(anchor);

        twttr.widgets.load();
        
    }

    function assessment(userName){

        let sum = 0;
        for(let i = 0; i < userName.length; i++){
            sum = sum + userName.charCodeAt(i);
        }

        const index = sum % answers.length;
        let result = answers[index];
        result = result.replace(/\{userName\}/g,userName);
        return result;
    }

    function removeAll(element) {
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
})();
