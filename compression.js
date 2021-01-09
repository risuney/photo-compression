var captureForm = document.querySelector('#file'),
  canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');
canvas.width = canvas.height = 0;

captureForm.addEventListener('change', function() {
var file = this.files[0],
    image = new Image(),
    reader = new FileReader(),
    reduceFlag = document.querySelector('input[name="reduceFlag"]:checked') ? +document.querySelector('input[name="reduceFlag"]:checked').value : 0; // 縮小方法の確認。念のため、どちらもチェックが入ってない場合のことも考えている
    size = +document.querySelector('#imageSize' + reduceFlag).value;
if (file.type.match(/image.*/)) {
  reader.onloadend = function() {
    image.onload = function() { // 画像が読み込めた時の処理
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if(reduceFlag == 1){
          var w = size, h = image.height * (size/image.width);
      }else{
          var w = image.width * (size/100), h = image.height * (size/100);
      }

      input_1.innerHTML = (image.width + '×' + image.height + '(px)');
      input_2.innerHTML = (w + '×' + h + '(px)');
      east.innerHTML = ('→');
      const hidden = ('hidden');

      document.getElementById('down').classList.add('is-active');
      document.getElementById('ref').classList.add('is-active');
      document.getElementById('hint1').classList.add(hidden);
      document.getElementById('hint2').classList.add(hidden);
      document.getElementById('input_1').classList.remove(hidden);
      document.getElementById('input_2').classList.remove(hidden);
      document.getElementById('east').classList.remove(hidden);

      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(image, 0, 0, w, h);

      // 縮小画像を表示
      var img = document.createElement('img');
      img.src = canvas.toDataURL('image/jpeg');
      document.querySelector('div.img').appendChild(img);
    }
    image.src = reader.result;
  }
  reader.readAsDataURL(file);
}
}, false);

function downloadCanvas() {
  var canvas = document.getElementById('targetCanvas');
  var link = document.getElementById('hiddenLink');
  const file_name = document.getElementById('file_name').value;
  link.href = canvas.toDataURL('image/jpeg');
  link.download = file_name;

  link.click()
}

function input_click() {
  document.getElementById('file').click()
};


//ファイル名取得
window.addEventListener('DOMContentLoaded', function() {
// 指定されると動くメッソド
document.querySelector("#file").addEventListener('change', function(e) {
// ブラウザーがFile APIを利用できるか確認
if (window.File) {
// 指定したファイルの情報を取得
var input = document.querySelector('#file').files[0];
// 最後に、反映
document.querySelector('#file_name').value = input.name;
}
}, true);
});


$('#button,#ref').on('click', function(){
  $('img').remove();
  $('#input_1,#input_2,#east').addClass('hidden');
  $('#hint1,#hint2').removeClass('hidden');
  $('#down,#ref').removeClass('is-active');
  $('#file_name').val('')
});
