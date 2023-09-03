const btn = document.getElementById('btn');



btn.addEventListener('click', () => {
  setTimeout((text) => { 
  document.getElementById('text').textContent = 'ボタンをクリックしました';
  },2000);
});
 
