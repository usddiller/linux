document.getElementById('calcBtn').addEventListener('click', function () {
  const nameInput = document.getElementById('studentName').value.trim();
  const ids = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
  const resultBlock = document.getElementById('resultBlock');
  
  resultBlock.className = 'result';
  resultBlock.innerHTML = '';

  const scores = [];

  for (let i = 0; i < ids.length; i++) {
    const rawVal = document.getElementById(ids[i]).value.trim();
    
    if (rawVal === '') {
      resultBlock.className = 'result error';
      resultBlock.textContent = 'Ошибка: заполните оценки по всем 5 предметам.';
      return;
    }

    const num = Number(rawVal);

    if (isNaN(num) || num < 0 || num > 100) {
      resultBlock.className = 'result error';
      resultBlock.textContent = 'Ошибка: оценки должны быть числами в диапазоне от 0 до 100.';
      return;
    }

    scores.push(num);
  }

  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  const avg = (sum / scores.length).toFixed(2);
  const student = nameInput ? nameInput : 'Студент';

  resultBlock.className = 'result success';
  resultBlock.innerHTML = `<strong>${student}</strong><br>Средний балл: <strong>${avg}</strong> из 100.`;
});
