// 키보 시작 파일: 올라온 vibe*.js 중 버전(ok vNN)이 가장 높은 걸 실행해요.
// 파일 이름이 "vibe (2).js" 처럼 바뀌어 올라가도 알아서 최신 걸 써요.
const fs = require('fs'), path = require('path');
let best = null;
for (const f of fs.readdirSync(__dirname)) {
  if (!/^vibe.*\.js$/i.test(f)) continue;
  try { const m = /ok v(\d+)/.exec(fs.readFileSync(path.join(__dirname, f), 'utf8')); const v = m ? +m[1] : 0; if (!best || v >= best.v) best = { f, v }; } catch (e) {}
}
if (!best) { console.error('vibe*.js 파일이 없어요'); process.exit(1); }
console.log('[시작] ' + best.f + ' (v' + best.v + ')');
require(path.join(__dirname, best.f));
