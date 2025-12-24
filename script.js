// 全局变量
let currentQuestionIndex = 0;
let scores = {
    dialogue: 0,
    role: 0
};
let selectedBonus = null;

// 开始测试
function startQuiz() {
    document.getElementById('welcome').classList.remove('active');
    document.getElementById('quiz').classList.add('active');
    currentQuestionIndex = 0;
    scores = {
        dialogue: 0,
        role: 0
    };
    showQuestion(currentQuestionIndex);
}

// 显示题目
function showQuestion(index) {
    const question = questions[index];
    document.getElementById('question-title').textContent = question.question;

    const totalQuestions = questions.length;
    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('total-questions').textContent = totalQuestions;

    // 更新进度条
    const progress = ((index + 1) / totalQuestions) * 100;
    document.getElementById('progress').style.width = progress + '%';

    // 显示选项
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.onclick = () => selectOption(index, optionIndex);
        optionsContainer.appendChild(optionElement);
    });
}

// 选择选项
function selectOption(questionIndex, optionIndex) {
    const question = questions[questionIndex];
    const selectedOption = question.options[optionIndex];

    // 更新分数
    scores.dialogue += selectedOption.dialogue;
    scores.role += selectedOption.role;

    // 添加选中效果
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === optionIndex) {
            option.classList.add('selected');
        }
    });

    // 延迟显示下一题
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            // 显示结果页面的彩蛋选择
            if (scores.dialogue > scores.role * 1.5 || scores.role > scores.dialogue * 1.5) {
                showBonusQuestion();
            } else {
                showResult();
            }
        }
    }, 500);
}

// 显示彩蛋题目
function showBonusQuestion() {
    document.getElementById('bonus-easter-egg').style.display = 'block';
    document.getElementById('quiz').classList.remove('active');
    document.getElementById('result').classList.add('active');

    const bonusContainer = document.getElementById('bonus-choices');
    bonusContainer.innerHTML = '';

    bonusQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'bonus-option';
        optionElement.textContent = option.text;
        optionElement.onclick = () => {
            selectedBonus = option;
            showResult();
        };
        bonusContainer.appendChild(optionElement);
    });

    // 等待选择后再显示完整结果
}

// 显示结果
function showResult() {
    document.getElementById('quiz').classList.remove('active');
    document.getElementById('result').classList.add('active');

    const totalQuestions = questions.length;
    const dialogueScore = (scores.dialogue / (scores.dialogue + scores.role) * 100).toFixed(1);
    const roleScore = (scores.role / (scores.dialogue + scores.role) * 100).toFixed(1);

    // 确定人格类型
    let personalityType;
    if (scores.dialogue + scores.role < 20) {
        personalityType = "low-both";
    } else if (dialogueScore >= 70) {
        personalityType = "dialogue-heavy";
    } else if (roleScore >= 70) {
        personalityType = "role-heavy";
    } else {
        personalityType = "balanced";
    }

    const resultData = personalityTypes[personalityType];

    // 显示结果数据
    document.getElementById('personality-type').textContent = resultData.name;
    document.getElementById('personality-traits').textContent = resultData.traits;
    document.getElementById('personality-quote').textContent = '"' + resultData.quote + '"';
    document.getElementById('personality-advice').textContent = resultData.advice;
    document.getElementById('result-image').src = resultData.image;

    // 显示分数
    document.getElementById('dialogue-score').textContent = dialogueScore;
    document.getElementById('role-score').textContent = roleScore;

    // 如果选择了彩蛋，添加特殊说明
    if (selectedBonus) {
        const resultDescription = document.querySelector('.result-description');
        const bonusNote = document.createElement('div');
        bonusNote.className = 'bonus-note';
        bonusNote.innerHTML = `<h4>你的选择：</h4>
            <p style="font-style: italic;" >"${selectedBonus.text}"</p>`;
        resultDescription.appendChild(bonusNote);
    }
}

// 重新测试
function restartQuiz() {
    // 重置所有数据
    currentQuestionIndex = 0;
    scores = {
        dialogue: 0,
        role: 0
    };
    selectedBonus = null;

    // 重置页面
    document.getElementById('result').classList.remove('active');
    document.getElementById('welcome').classList.add('active');
    document.getElementById('bonus-easter-egg').style.display = 'none';
}

// 生成海报
function generatePoster() {
    const canvas = document.getElementById('poster-canvas');
    const ctx = canvas.getContext('2d');

    // 设置海报尺寸
    canvas.width = 800;
    canvas.height = 1200;

    // 背景色
    ctx.fillStyle = '#f5f3f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 标题
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#2c3e50';
    ctx.fillText('宴饮人格鉴定结果', canvas.width / 2, 100);

    // 类型名称
    const personalityType = document.getElementById('personality-type').textContent;
    ctx.font = 'bold 60px Arial';
    ctx.fillStyle = '#e74c3c';
    ctx.fillText(personalityType, canvas.width / 2, 200);

    // 特征
    ctx.font = '32px Arial';
    ctx.fillStyle = '#7f8c8d';
    const traits = document.getElementById('personality-traits').textContent;
    ctx.fillText(traits, canvas.width / 2, 300);

    // 名言
    ctx.font = 'italic 36px Arial';
    ctx.fillStyle = '#34495e';
    const quote = document.getElementById('personality-quote').textContent;
    ctx.fillText('"' + quote + '"', canvas.width / 2, 400);

    // 二维码区域
    ctx.fillStyle = '#ecf0f1';
    ctx.fillRect(canvas.width / 2 - 100, 900, 200, 200);
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#95a5a6';
    ctx.fillText('扫码测试', canvas.width / 2, 1020);
    ctx.fillText('你的宴饮人格', canvas.width / 2, 1050);

    // 底部信息
    ctx.font = '24px Arial';
    ctx.fillStyle = '#7f8c8d';
    ctx.fillText('宴饮人格鉴定 - 古希腊vs中国社交观', canvas.width / 2, 1150);

    // 下载海报
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '宴饮人格鉴定-' + personalityType + '.png';
        a.click();
        URL.revokeObjectURL(url);
    });
}