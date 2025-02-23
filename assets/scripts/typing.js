function TextTypingAnime(ClassName) {
  ClassName = "." + ClassName;
  $(ClassName).each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function (i) {
        var time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this)
          .delay(time * i)
          .fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}

// 画面が読み込まれるまで非表示
$("#container").css("opacity", "0");
// 画面が読み込まれたら動作
$(window).on("load", function () {
  // 画面が読み込まれたら表示
  $("#container").css("opacity", "1");
  //spanタグを追加する
  var element = $(".TextTyping");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split("").forEach(function (t) {
      if (t !== " ") {
        textbox += '<span class="typed">' + t + "</span>";
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  TextTypingAnime("TextTyping"); /* アニメーション用の関数を呼ぶ*/
});
