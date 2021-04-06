# Muscle Ver3

## diary
#### 4/5
今回のトピック
- Laravel内でのVue.jsとの連携
- Vue.js内でmedia queryが働くかどうかのテスト

次回以降の流れ
- Vue-routerの設定
- media queryとSassの設定方法！

#### 4/6
今回のトピック
- Vue-routerの詳しい設定
- media　queryの実験

次回以降の流れ
- parts作り
- liffとの連携


## Tips
---
```
npm install
npm run dev
```
でエラーが発生した場合
https://note.com/koushikagawa/n/ne58862ebd22d

---
uiでvueを使用する場合
```
composer require laravel/ui
php artisan ui vue
```
https://qiita.com/kide/items/13742fd6438a42f4deb4

*注意点
laravelのバージョンによってインストールできるuiのバージョンが異なる
[参考リンク](https://packagist.org/packages/laravel/ui)


---

vue-routerの直打ち対策について
https://router.vuejs.org/ja/guide/essentials/history-mode.html#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E4%BE%8B
https://teratail.com/questions/121182

laravel側でしっかりとルーティングを拾ってVue-routerで判別させることで直打ちでも飛ばすことができる。

---
