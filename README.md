# Orellax
俺のパララックス アニメーションライブラリ

## Demo
https://hilosiva.github.io/orellax/


## Install
HTMLファイルに `orellax.css` と `orellax.js` を読み込む。
なお、現在はIE11に対応することも多いと思います。

その場合は、さらに polyfill も利用してください。

https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Orellax</title>
  <!-- orellax.cssを読み込む -->
  <link rel="stylesheet" href="../assets/css/orellax.css">

  <!-- IE11に対応する場合は以下の polyfill も読み込む -->
  <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" defer></script>

  <!-- orellax.jsを読み込む -->
  <script src="../assets/js/orellax.js" defer></script>
</head>
<body>

</body>
</html>
```

`orellax.css` と `orellax.js` はそれぞれ、圧縮版の`orellax.min.css` と `orellax.min.js` も用意してますので、必要に応じてご利用ください。


### Polyfillを利用（IEへの対応を）しない場合
現在 IEへの対応はすることが多いと思いますが、Polyfillを利用しない場合は、 `orellax.js` の 以下の行をコメントにするか削除するかしてください

```JavaScript
 observer.POLL_INTERVAL = 100;
 ```

## How to Use
### 基本の使い方
アニメーションたい要素に、 `.orellax` というclassを指定し、`data-type` 属性で、アニメーションの種類を指定（半角スペース区切りで複数指定可）する。


```html
<p class="orellax" data-type="fadeIn">Fade In</p>
<p class="orellax" data-type="zoomIn textClosing">Zoom In &amp; Text Closing</p>
```

#### アニメーションの種類
- fadeIn
- slideRightIn
- slideUpIn
- slideDownIn
- zoomIn
- textClosing

### オプション
#### デュレーション
`data-duration` 属性を `fast` 、 `normal`、`slow` のいずれかで指定。


```html
<p class="orellax" data-type="fadeIn" data-duration="fast">Fast</p>
<p class="orellax" data-type="zoomIn textClosing" data-duration="slow">Zoom In &amp; Text Closing</p>
```

デフォルトのスピード
- fast ・・・ 0.3s
- normal ・・・ 1s
- slow ・・・ 2s

ですが、`orellax.scss` の中の冒頭の変数で自由変更して下さい。

また機能は追加します。
