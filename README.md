# lamp-api

## 積層ランプをWebAPIで制御できる。
市販の積層ランプを Raspberry pi を使ってWebAPIで制御できるように、スイッチ回路等の回路基板作成とWebAPIのソフトウェアを用いる。
このリポジトリでは、ソフトウェア側のWebAPIソースコード管理とハードウェアの回路設計等を管理する。

## 制作物

<img src="./img/IMG_1357.jpg" width="60%">


https://user-images.githubusercontent.com/59303144/206948672-38b74358-fd85-491c-a279-6c52b6ab7c04.mp4


## ハードウェア

- raspberry pi zero wh
- microSD card
- 積層ランプ（赤・黄・緑ランプ、ブザー）スイッチ式
- 電源関連基板
  - DC/DCコンバータ 5v/12v
  - 各機器への電源分配回路
- スイッチ関連基板
  - 積層ランプのスイッチ回路（ランプ：赤・黄・緑、ブザー）
  - リセットボタンのスイッチ回路

## 機能（ソフトウェア）

- 積層ランプのランプON-OFFとブザーを制御するWebAPI
- 積層ランプのリセット（アラート停止）を行うボタン

## 使い方

- [セットアップ方法はこちら](doc/setup.md)
- WebAPIでの利用方法
  - [使用例](doc/example.md)
  - [API IF 一覧](doc/setup.md)
