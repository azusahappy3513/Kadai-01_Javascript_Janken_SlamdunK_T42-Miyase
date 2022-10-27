// alert(1111);


function janken(user) {
    // コンピュータの選択を画像ファイル名を配列に保存
    let pcJankens = ['Maki.jpg', 'Sendo.jpg', 'Sawakita.jpg'];
 
    // 人が選択した画像ファイル名を配列に保存
    let userJankens = ['Hanamichi.jpeg', 'Micchi-3p.jpg', 'Rukawa.jpg'];
 
    // コンピュータの手を乱数(0～2）で作成
    let pc = Math.floor(Math.random() * 3);
 
    // ユーザの手の画像を表示するimgタグを検索
    let userImg = document.getElementById("userImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    userImg.src = "image/" + userJankens[user];
 
    // コンピュータの選択画像を表示するimgタグをフォルダから検索
    let pcImg = document.getElementById("pcImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    pcImg.src = "image/" + pcJankens[pc];
 
    // 勝敗を表示
    let result = [['ファール！‐やり直し', 'Win', 'Lose'],
                  ['Lose', 'ファール！‐やり直し', 'Win'],
                  ['Win', 'Lose', 'ファール！‐やり直し']];
       
    // 勝敗
    document.getElementById("result").textContent = result[user][pc];
    
    console.log(result[0][1]);
    if(result[user][pc]=="Win"){
      $(".Win_image").html('<img src="./image/final.jpg" alt="">');
    }; 
    }
