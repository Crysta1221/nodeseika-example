# node-seika Example
VOICEROID関連の制御を行うことができるソフトウェア、[AssistantSeika](https://wiki.hgotoh.jp/documents/tools/assistantseika/assistantseika-000)をNode.jsで利用可能なライブラリ[Node-Seika](https://github.com/nusu-github/node-seika)のサンプルコードです。  
Node.js + Node-Seika + Typescriptで作成されています。  
なお、このサンプルコードの製作者は上記製作者様とは無関係です。

## WCFClient
AssistantSeika本体を操作することなくNode.js側から制御を行うことができます。AssistantSeika、使用したいVOICEROID製品の起動が必要のほか、検出したいプログラムをあらかじめ設定しておく必要があります。

### Init(クライアント初期化)
```ts
import { Wcfclient } from "node-seika";

const client = new Wcfclient();
```
クラスを呼び出し初期化します。

### ProductScan(製品の検出)
```ts
Wcfclient.ProductScan(): Promise<boolean>
```
**テストコード:**
```ts
await client.ProductScan();
```
AssistantSeikaでスキャン対象にした製品をスキャンします。VOICEROID製品をあらかじめ起動しておく必要があります。
実行結果は`boolean`型で返されます。

### AvatorList(キャラクターを取得)
```ts
Wcfclient.AvatorList(): Promise<Map<number, string>>
```
**テストコード:**
```ts
await client.AvatorList();
```
**実行結果:**
```
 ┌───────────────────┬───────┬─────────────────────────────────────────────────────┐
 │ (iteration index) │  Key  │                       Values                        │
 ├───────────────────┼───────┼─────────────────────────────────────────────────────┤
 │         0         │ 60051 │                    '紲星 あかり'                     │
 │         1         │ 60052 │                 '紲星 あかり(蕾)'                    │
 │         2         │ 1000  │        'Microsoft Ayumi - Japanese (Japan)'         │
 │         3         │ 1001  │     'Microsoft Mark - English (United States)'      │
 │         4         │ 1002  │     'Microsoft Zira - English (United States)'      │
 │         5         │ 1003  │     'Microsoft David - English (United States)'     │
 │         6         │ 1004  │        'Microsoft Haruka - Japanese (Japan)'        │
 │         7         │ 1005  │        'Microsoft Ichiro - Japanese (Japan)'        │
 │         8         │ 1006  │        'Microsoft Sayaka - Japanese (Japan)'        │
 │         9         │ 1007  │        'Microsoft Haruka Desktop - Japanese'        │
 │        10         │ 1008  │ 'Microsoft Zira Desktop - English (United States)'  │
 │        11         │ 1009  │ 'Microsoft David Desktop - English (United States)' │
 │        12         │ 1200  │        'Microsoft Ayumi - Japanese (Japan)'         │
 │        13         │ 1201  │     'Microsoft Mark - English (United States)'      │
 │        14         │ 1202  │     'Microsoft Zira - English (United States)'      │
 │        15         │ 1203  │     'Microsoft David - English (United States)'     │
 │        16         │ 1204  │        'Microsoft Haruka - Japanese (Japan)'        │
 │        17         │ 1205  │        'Microsoft Ichiro - Japanese (Japan)'        │
 │        18         │ 1206  │        'Microsoft Sayaka - Japanese (Japan)'        │
 │        19         │ 1207  │        'Microsoft Haruka Desktop - Japanese'        │
 │        20         │ 1208  │ 'Microsoft Zira Desktop - English (United States)'  │
 │        21         │ 1209  │ 'Microsoft David Desktop - English (United States)' │
 └───────────────────┴───────┴─────────────────────────────────────────────────────┘
```
キャラクターを取得します。データはMap型で返されます。  
キャラクターがいない場合は、スキャン対象を指定し、ProductScanを行っていることを確認してください。
### AvatorList2(キャラクターの詳細を取得)
```ts
Wcfclient.AvatorList2(): Promise<Map<number, Map<string, string>>>
```
**テストコード:**
```ts
await client.AvatorList2();
```
**実行結果:**
```
 ┌───────────────────┬───────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
 │ (iteration index) │  Key  │                                                     Values                                                     │
 ├───────────────────┼───────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
 │         0         │ 60000 │                 Map(3) { 'name' => '紲星 あかり', 'prod' => 'AIVOICEAPI', 'platform' => '64' }                 │
 │         1         │ 60051 │                 Map(3) { 'name' => '紲星 あかり', 'prod' => 'AIVOICEAPI', 'platform' => '64' }                 │
 │         2         │ 60052 │              Map(3) { 'name' => '紲星 あかり（蕾）', 'prod' => 'AIVOICEAPI', 'platform' => '64' }              │
 │         3         │ 1000  │        Map(3) { 'name' => 'Microsoft Ayumi - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32' }         │
 │         4         │ 1001  │     Map(3) { 'name' => 'Microsoft Mark - English (United States)', 'prod' => 'SAPI', 'platform' => '32' }      │
 │         5         │ 1002  │     Map(3) { 'name' => 'Microsoft Zira - English (United States)', 'prod' => 'SAPI', 'platform' => '32' }      │
 │         6         │ 1003  │     Map(3) { 'name' => 'Microsoft David - English (United States)', 'prod' => 'SAPI', 'platform' => '32' }     │
 │         7         │ 1004  │        Map(3) { 'name' => 'Microsoft Haruka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32' }        │
 │         8         │ 1005  │        Map(3) { 'name' => 'Microsoft Ichiro - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32' }        │
 │         9         │ 1006  │        Map(3) { 'name' => 'Microsoft Sayaka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32' }        │
 │        10         │ 1007  │        Map(3) { 'name' => 'Microsoft Haruka Desktop - Japanese', 'prod' => 'SAPI', 'platform' => '32' }        │
 │        11         │ 1008  │ Map(3) { 'name' => 'Microsoft Zira Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '32' }  │
 │        12         │ 1009  │ Map(3) { 'name' => 'Microsoft David Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '32' } │
 │        13         │ 1200  │        Map(3) { 'name' => 'Microsoft Ayumi - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64' }         │
 │        14         │ 1201  │     Map(3) { 'name' => 'Microsoft Mark - English (United States)', 'prod' => 'SAPI', 'platform' => '64' }      │
 │        15         │ 1202  │     Map(3) { 'name' => 'Microsoft Zira - English (United States)', 'prod' => 'SAPI', 'platform' => '64' }      │
 │        16         │ 1203  │     Map(3) { 'name' => 'Microsoft David - English (United States)', 'prod' => 'SAPI', 'platform' => '64' }     │
 │        17         │ 1204  │        Map(3) { 'name' => 'Microsoft Haruka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64' }        │
 │        18         │ 1205  │        Map(3) { 'name' => 'Microsoft Ichiro - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64' }        │
 │        19         │ 1206  │        Map(3) { 'name' => 'Microsoft Sayaka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64' }        │
 │        20         │ 1207  │        Map(3) { 'name' => 'Microsoft Haruka Desktop - Japanese', 'prod' => 'SAPI', 'platform' => '64' }        │
 │        21         │ 1208  │ Map(3) { 'name' => 'Microsoft Zira Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '64' }  │
 │        22         │ 1209  │ Map(3) { 'name' => 'Microsoft David Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '64' } │
 └───────────────────┴───────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
キャラクターの詳細(言語、プラットフォーム、製品)を取得します。データはMap型で返されます。
キャラクターがいない場合は、スキャン対象を指定し、ProductScanを行っていることを確認してください。

### AvatorListDetails2(より詳細なキャラクターデータを取得)
```ts
Wcfclient.AvatorListDetail2(): Promise<Map<number, Map<string, string>>>
```
**テストコード:**
```ts
await client.AvatorListDetails2();
```
**実行結果:**
```
 ┌───────────────────┬───────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
 │ (iteration index) │  Key  │                                                             Values                                                              │
 ├───────────────────┼───────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
 │         0         │ 60000 │                 Map(4) { 'name' => '紲星 あかり', 'prod' => 'AIVOICEAPI', 'platform' => '64', ... 1 more item }                 │
 │         1         │ 60051 │                 Map(4) { 'name' => '紲星 あかり', 'prod' => 'AIVOICEAPI', 'platform' => '64', ... 1 more item }                 │
 │         2         │ 60052 │              Map(4) { 'name' => '紲星 あかり（蕾）', 'prod' => 'AIVOICEAPI', 'platform' => '64', ... 1 more item }              │
 │         3         │ 1000  │        Map(4) { 'name' => 'Microsoft Ayumi - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }         │
 │         4         │ 1001  │     Map(4) { 'name' => 'Microsoft Mark - English (United States)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }      │
 │         5         │ 1002  │     Map(4) { 'name' => 'Microsoft Zira - English (United States)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }      │
 │         6         │ 1003  │     Map(4) { 'name' => 'Microsoft David - English (United States)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }     │
 │         7         │ 1004  │        Map(4) { 'name' => 'Microsoft Haruka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }        │
 │         8         │ 1005  │        Map(4) { 'name' => 'Microsoft Ichiro - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }        │
 │         9         │ 1006  │        Map(4) { 'name' => 'Microsoft Sayaka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }        │
 │        10         │ 1007  │        Map(4) { 'name' => 'Microsoft Haruka Desktop - Japanese', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }        │
 │        11         │ 1008  │ Map(4) { 'name' => 'Microsoft Zira Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item }  │
 │        12         │ 1009  │ Map(4) { 'name' => 'Microsoft David Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '32', ... 1 more item } │
 │        13         │ 1200  │        Map(4) { 'name' => 'Microsoft Ayumi - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }         │
 │        14         │ 1201  │     Map(4) { 'name' => 'Microsoft Mark - English (United States)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }      │
 │        15         │ 1202  │     Map(4) { 'name' => 'Microsoft Zira - English (United States)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }      │
 │        16         │ 1203  │     Map(4) { 'name' => 'Microsoft David - English (United States)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }     │
 │        17         │ 1204  │        Map(4) { 'name' => 'Microsoft Haruka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }        │
 │        18         │ 1205  │        Map(4) { 'name' => 'Microsoft Ichiro - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }        │
 │        19         │ 1206  │        Map(4) { 'name' => 'Microsoft Sayaka - Japanese (Japan)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }        │
 │        20         │ 1207  │        Map(4) { 'name' => 'Microsoft Haruka Desktop - Japanese', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }        │
 │        21         │ 1208  │ Map(4) { 'name' => 'Microsoft Zira Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item }  │
 │        22         │ 1209  │ Map(4) { 'name' => 'Microsoft David Desktop - English (United States)', 'prod' => 'SAPI', 'platform' => '64', ... 1 more item } │
 └───────────────────┴───────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
`AvatarList2`よりも詳細なキャラクター(言語、プラットフォーム、製品など)を取得します。データはMap型で返されます。
キャラクターがいない場合は、スキャン対象を指定し、ProductScanを行っていることを確認してください。

### GetCurrentParams2(指定したCIDの現在のスタイル、効果を取得)
```ts
Wcfclient.GetCurrentParams2(cid: number): Promise<Map<"effect" | "emotion", Map<string, Map<string, number>>>>
```
**テストコード:**
```ts
// A.I.VOICE Kizuna Akari
await client.GetCurrentParams2(60051);
```
**実行結果:**
```
 ┌───────────────────┬───────────┬────────────────────────────────────────────────────────────────────────────────────┐
 │ (iteration index) │    Key    │                                       Values                                       │
 ├───────────────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────┤
 │         0         │ 'effect'  │ Map(6) { 'volume' => [Map], 'speed' => [Map], 'pitch' => [Map], ... 3 more items } │
 │         1         │ 'emotion' │           Map(3) { '喜び' => [Map], '怒り' => [Map], '悲しみ' => [Map] }            │
 └───────────────────┴───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```
指定したCIDの現在のスタイル、効果を取得します。データはMap型で返されます。CIDは、キャラクターリストから探して指定してください。
エラーになる場合はCIDが存在することをキャラクターリストから確認してください。

### GetDefaultParams2
```ts
Wcfclient.GetDefaultParams2(cid: number): Promise<Map<"effect" | "emotion", Map<string, Map<string, number>>>>
```
**テストコード:**
```ts
// A.I.VOICE Kizuna Akari
await client.GetDefaultParams2(60051);
```
実行結果は[`GetCurrentParams2`](#getcurrentparams2指定したcidの現在のスタイル効果を取得)とほぼ同じです。おそらく現在のパラメータが取得される..?

### Talk(キャラクターをしゃべらせる)
```ts
Wcfclient.Talk(cid: number, talktext: string | string[], option?: {
    filepath?: string;
    effects?: Array<[string, number]>;
    emotions?: Array<[string, number]>;
}): Promise<number>
```
**テストコード:**
```ts
// A.I.VOICE Kizuna Akari
await client.Talk(
  60051,
  "こんにちは。きずなあかりです。のーどじぇいえすから実行しています。",
  { emotions: [["喜び", 0.3]] }
);
```
指定したCIDのキャラクターでTTSを行います。オプションとして感情パラメータ、効果パラメータの設定を行えます。

### Version(AssistantSeikaのバージョンを取得)
```ts
Wcfclient.Version(): Promise<string>
```
**テストコード:**
```ts
await client.Version();
```
**実行結果:**
```
20240813/c
```
AssistantSeikaのバージョンを取得します。