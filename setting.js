//設定マーク
$('#setting').on('click', function (){
  $('#modal').addClass('is-active')
});

//設定非表示
$('div.modal-background,#clear').on('click', function(){
  $('#modal').removeClass('is-active')
});

//設定非表示マークをhover
$('div.modal-clear').hover(function(){
  $('span.clear').addClass('is-active')
},function(){
  $('span.clear').removeClass('is-active')
});

//langage設定をクリック
$('#langage').on('click', function(){
  const active = ('is-active');
  $('p.left-con').removeClass(active);
  $('#langage').addClass(active);
  $('div.right-contents').removeClass(active);
  $('#d-langage').addClass(active);
});

//display設定をクリック
$('#display').on('click', function(){
  const active = ('is-active');
  $('p.left-con').removeClass(active);
  $('#display').addClass(active);
  $('div.right-contents').removeClass(active);
  $('#d-display').addClass(active);
});

//data設定をクリック
$('#data').on('click', function(){
  const active = ('is-active');
  $('p.left-con').removeClass(active);
  $('#data').addClass(active);
  $('div.right-contents').removeClass(active);
  $('#d-data').addClass(active);
});

//言語設定
//言語設定を英語にする
$('#en').on('click', function(){
  $('#c-ja').removeClass('is-active');
  $('#c-en').addClass('is-active');
  localStorage.removeItem('lan');
  localStorage.setItem('lan', 'en');
  $('#irt').text('Image reduction tool');
  $('#sai').text('Select an image');
  $('#download').text('Download');
  $('#reset').text('Reset');
  $('#set').text('Setting');
  $('#langage').text('Langage');
  $('#display').text('Display');
  $('#r-langage').text('Langage');
  $('#r-display').text('Display');
  $('#t-def').text('Default');
  $('#t-dark').text('Dark');
})

//言語設定を日本語にする
$('#ja').on('click', function(){
  $('#c-en').removeClass('is-active');
  $('#c-ja').addClass('is-active');
  localStorage.removeItem('lan');
  localStorage.setItem('lan', 'ja');
  $('#irt').text('画像縮小ツール');
  $('#sai').text('画像を選択');
  $('#download').text('ダウンロード');
  $('#reset').text('リセット');
  $('#set').text('設定');
  $('#langage').text('言語');
  $('#display').text('表示');
  $('#r-langage').text('言語');
  $('#r-display').text('表示');
  $('#t-def').text('デフォルト');
  $('#t-dark').text('ダーク');
})

//表示設定
//デフォルト
$('#def').on('click', function(){
  localStorage.removeItem('dis');
  localStorage.setItem('dis', 'def');
  const dark = ('dark');
  $('body,#setting,#imageSize1,#file_name,#m-b,#m-c,#left,#set,#langage,#display,#r-langage,#en,#ja,#r-display,#def,#dark').removeClass(dark);
  $('#c-dark').removeClass('is-active');
  $('#c-def').addClass('is-active');
})

//ダーク
$('#dark').on('click', function(){
  localStorage.removeItem('dis');
  localStorage.setItem('dis', 'dark');
  const dark = ('dark');
  $('body,#setting,#imageSize1,#file_name,#m-b,#m-c,#left,#set,#langage,#display,#r-langage,#en,#ja,#r-display,#def,#dark').addClass(dark);
  $('#c-def').removeClass('is-active');
  $('#c-dark').addClass('is-active');
})


//localStorageに記録されている設定を反映
$(function(){
  //言語設定
  const lan = localStorage.getItem('lan')
  if (lan == 'ja') {
    $('#irt').text('画像縮小ツール');
    $('#sai').text('画像を選択');
    $('#download').text('ダウンロード');
    $('#reset').text('リセット');
    $('#set').text('設定');
    $('#langage').text('言語');
    $('#display').text('表示');
    $('#r-langage').text('言語');
    $('#r-display').text('表示');
    $('#def').text('デフォルト');
    $('#dark').text('ダーク');
    $('#c-ja').addClass('is-active');
  } else if (lan == 'en') {
    $('#c-en').addClass('is-active');
  }

  //表示設定
  const dis = localStorage.getItem('dis');
  if (dis == 'def') {
    $('body,#setting,#imageSize1,#file_name,#m-b,#m-c,#left,#set,#langage,#display,#r-langage,#en,#ja,#r-display,#def,#dark').removeClass('dark');
    $('#c-def').addClass('is-active')
  } else if (dis == 'dark') {
    $('body,#setting,#imageSize1,#file_name,#m-b,#m-c,#left,#set,#langage,#display,#r-langage,#en,#ja,#r-display,#def,#dark').addClass('dark');
    $('#c-dark').addClass('is-active')
  }
})
