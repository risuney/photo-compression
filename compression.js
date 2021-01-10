//読み込む画像を指定
var file_image = document.querySelector('#file');
var canvas = document.querySelector('canvas');
var content = canvas.getContext('2d');
canvas.width = canvas.height = 0;

//画像読み込み
file_image.addEventListener('change', function() {
  var file = this.files[0];
  var image = new Image();
  var reader = new FileReader();
  var size = document.getElementById('imageSize').value;
  if (file.type.match(/image.*/)) {
    reader.onloadend = function() {
      image.onload = function() {
        //画像を読み込んだときの処理
        content.clearRect(0, 0, canvas.width, canvas.height);
        var w = size;
        var h = image.height * (size/image.width);

        //画像のサイズを表示
        input_1.innerHTML = (image.width + '×' + image.height + '(px)');
        input_2.innerHTML = (w + '×' + h + '(px)');
        east.innerHTML = ('→');
        const hidden = ('hidden');
        document.getElementById('down').classList.add('is-active');
        document.getElementById('ref').classList.add('is-active');
        document.getElementById('input_1').classList.remove(hidden);
        document.getElementById('input_2').classList.remove(hidden);
        document.getElementById('east').classList.remove(hidden);

        // 縮小画像を表示
        canvas.width = w;
        canvas.height = h;
        content.drawImage(image, 0, 0, w, h);
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


$('#button').on('click', function(){
  $('#file').click()
})

//ファイル名取得してvalueに突っ込む
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#file").addEventListener('change', function(e) {
    if (window.File) {
      var input = document.querySelector('#file').files[0];
      document.querySelector('#file_name').value = input.name;
    }
  }, true);
});


$('#button,#ref').on('click', function(){
  $('img').remove();
  $('#input_1,#input_2,#east').addClass('hidden');
  $('#down,#ref').removeClass('is-active');
  $('#file_name').val('')
});
