import { Wcfclient } from "node-seika";

const client = new Wcfclient();

// NodeSeikaのバージョン取得
console.log("[INFO] NodeSeika Version:");
const version = await client.Version();
console.log(version);

// VOICEROID製品のスキャン
console.log("[INFO] Scanning All VOICEROID Products...");
await client.ProductScan();

// 検出完了したキャラクター一覧を取得
console.log("[INFO] Listing scanned VOICEROID Products...");
const ver = await client.AvatorList();
console.table(ver);

// 最初のキャラの詳細を取得
const firstEntry = ver.entries().next().value?.[0];
if (firstEntry === undefined) {
  throw new Error("No entries found in ver");
}
const logs = await client.GetDefaultParams2(firstEntry);
console.table(logs);

// しゃべらせる
console.log("[INFO] tts running");
await client.Talk(
  firstEntry,
  "こんにちは。きずなあかりです。のーどじぇいえすから実行しています。",
  { filepath: undefined, emotions: [["喜び", 0.3]] }
);
