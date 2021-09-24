
$(function(){

  $(".main-visual").snowfall(
    {
        // 雪の量 (数値)
        flakeCount : 160,
        // 色 (RGB)
        // flakeColor : "",
        // z-indexの値
        flakeIndex : "888",
        // 最小サイズ （数値）
        minSize : 2,
        // 最大サイズ（数値）
        maxSize : 9,
        // 最低速度（数値）
        minSpeed : 1,
        // 最高速度（数値）
        maxSpeed : 3,
        // 雪の形を丸にする（boolean）
        round : true,
        // 影をつける（boolean）
        shadow : false,
        // 要素に積もらせる場合
        // collection : "積もらせる要素"
        // オリジナル画像を使用する場合
        // image : "画像へのパス"
    }
  );

});