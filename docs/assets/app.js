const DATA = {
  "branches": [
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥"
  ],
  "branchData": {
    "子": {
      "name": "玄流",
      "e": "水",
      "desire": "潜流型欲望：欲望不急于显形，先在暗处搜集信息、确认安全、推演长期趋势。",
      "thinking": "潜思型思维：偏好下潜、观察、等待、归纳暗线。",
      "verb": "潜流、凝缩、暗中滋生"
    },
    "丑": {
      "name": "厚库",
      "e": "湿土",
      "desire": "库藏型欲望：欲望首先表现为储备、保全、积累和耐久。",
      "thinking": "蓄衡型思维：偏好把信息沉入库存，缓慢比较、反复称量。",
      "verb": "封存、积累、缓慢转化"
    },
    "寅": {
      "name": "启林",
      "e": "木",
      "desire": "开局型欲望：欲望天然指向突破、启动、开荒和方向确立。",
      "thinking": "破晓型思维：偏好先建立方向，再在行动中修正。",
      "verb": "发动、突破、开局"
    },
    "卯": {
      "name": "舒木",
      "e": "木",
      "desire": "舒展型欲望：欲望指向关系、成长、分枝、审美和自然展开。",
      "thinking": "开枝型思维：偏好联想、扩展、协商、关系感和生命感。",
      "verb": "打开、显形、生发、分枝"
    },
    "辰": {
      "name": "云仓",
      "e": "湿土",
      "desire": "系统容器型欲望：欲望指向整合复杂变量、建立容器、沉淀资料和掌握隐藏库存。",
      "thinking": "成局型思维：偏好建模、归档、分层、容纳矛盾。",
      "verb": "容纳、混杂、蓄水、系统化"
    },
    "巳": {
      "name": "升焰",
      "e": "火",
      "desire": "升温显化型欲望：欲望指向热度、技术化运作、现实价值、权力发动和目标显现。",
      "thinking": "炼机型思维：偏好操作、缠绕、试验、加热。",
      "verb": "运作、缠绕、加热、技术化"
    },
    "午": {
      "name": "照庭",
      "e": "火",
      "desire": "中心显赫型欲望：欲望指向被看见、被承认、直接表达、价值照耀和舞台中心。",
      "thinking": "明照型思维：偏好直接判断、公开表达、把复杂问题照亮。",
      "verb": "显赫、照耀、极化"
    },
    "未": {
      "name": "熟壤",
      "e": "燥土",
      "desire": "熟化承载型欲望：欲望指向成熟、照料、文明化、长期负重和可持续秩序。",
      "thinking": "熟成型思维：偏好消化过程、流程化、照料细节。",
      "verb": "熟化、承载、文明化、余热入土"
    },
    "申": {
      "name": "通锋",
      "e": "金",
      "desire": "通道博弈型欲望：欲望指向路径、接口、效率、竞争、切换和资源再分配。",
      "thinking": "通变型思维：偏好策略转向、技术接口、博弈判断。",
      "verb": "通达、切换、传导、博弈"
    },
    "酉": {
      "name": "镜裁",
      "e": "金",
      "desire": "标准精炼型欲望：欲望指向标准、审美、边界、精确、定型和结果结算。",
      "thinking": "定标型思维：偏好分类、裁断、删除冗余、用标准和审美完成定型。",
      "verb": "裁断、成形、对称、结算"
    },
    "戌": {
      "name": "燥垣",
      "e": "燥土",
      "desire": "守界清理型欲望：欲望指向安全边界、责任、防御、封存和残局处理。",
      "thinking": "守界型思维：偏好风险隔离、保守校验、清理余烬。",
      "verb": "收束、燥化、守门、清理"
    },
    "亥": {
      "name": "溟源",
      "e": "水",
      "desire": "回源孕育型欲望：欲望指向想象、包容、远方联结、生命回流和重新孕育。",
      "thinking": "回源型思维：偏好整体感知、隐喻联想、深层共情。",
      "verb": "回源、溶解、孕育、潜入"
    }
  },
  "suffix": {
    "子": "潜思",
    "丑": "蓄衡",
    "寅": "破晓",
    "卯": "开枝",
    "辰": "成局",
    "巳": "炼机",
    "午": "明照",
    "未": "熟成",
    "申": "通变",
    "酉": "定标",
    "戌": "守界",
    "亥": "回源"
  }
};

const HE = new Set([['子','丑'],['寅','亥'],['卯','戌'],['辰','酉'],['巳','申'],['午','未']].map(x=>x.sort().join('')));
const CHONG = new Set([['子','午'],['丑','未'],['寅','申'],['卯','酉'],['辰','戌'],['巳','亥']].map(x=>x.sort().join('')));
const SANHE = [['申','子','辰'], ['亥','卯','未'], ['寅','午','戌'], ['巳','酉','丑']];
const SHENG = {'水':'木','木':'火','火':'土','土':'金','金':'水'};
const KE = {'水':'火','火':'金','金':'木','木':'土','土':'水'};

function baseE(e) { return e.includes('土') ? '土' : e; }
function key(a,b) { return [a,b].sort().join(''); }

function relation(m,h) {
  if (m === h) return '同相放大';
  if (CHONG.has(key(m,h))) return '六冲张力';
  if (HE.has(key(m,h))) return '六合转译';
  if (SANHE.some(g => g.includes(m) && g.includes(h))) return '三合共振';
  const me = baseE(DATA.branchData[m].e), he = baseE(DATA.branchData[h].e);
  if (SHENG[me] === he) return '欲望生思维';
  if (SHENG[he] === me) return '思维生欲望';
  if (KE[me] === he) return '欲望规训思维';
  if (KE[he] === me) return '思维审查欲望';
  return '杂气并行';
}

function mechanism(r) {
  return {
    '同相放大':'欲望模式与思维偏好互相加码。优势是纯度高、方向清楚；风险是单一气机过强。',
    '六冲张力':'欲望想走一端，思维把另一端拉入视野。优势是双极校验；风险是启动前消耗较大。',
    '六合转译':'欲望会通过思维换一种语言表达。优势是整合异质力量；风险是过度迁就结构。',
    '三合共振':'欲望与思维向同一元素场汇流。优势是叙事统一；风险是被同一解释吸走。',
    '欲望生思维':'欲望自然滋养思维工具。优势是推进顺；风险是思维替欲望服务。',
    '思维生欲望':'思维反过来滋养欲望。优势是越做越清楚；风险是反复维护旧叙事。',
    '欲望规训思维':'欲望压住思维入口。优势是聚焦高标准；风险是思维被预设限制。',
    '思维审查欲望':'思维反向审查欲望。优势是及时止损；风险是火候未足先被审判。',
    '杂气并行':'欲望与思维像两个模块并行。优势是适应性；风险是核心叙事不集中。'
  }[r];
}

function typeName(m,h) { return `${DATA.branchData[m].name}·${DATA.suffix[h]}型`; }
function docLink(m,h) {
  const mi = DATA.branches.indexOf(m)+1, hi = DATA.branches.indexOf(h)+1;
  return `./144-personality-types/${String(mi).padStart(2,'0')}-${m}月-${DATA.branchData[m].name}/${String(hi).padStart(2,'0')}-${m}月-${h}时-${typeName(m,h)}.md`;
}

function makeDetail(m,h) {
  const r = relation(m,h);
  const mb = DATA.branchData[m], hb = DATA.branchData[h];
  return `<div class="detail-card">
    <h3>${typeName(m,h)}</h3>
    <p class="meta">${m}月 × ${h}时｜${r}</p>
    <h4>月支欲望模式底色：${m}月｜${mb.name}</h4>
    <p>${mb.desire}</p>
    <h4>时支思维模式偏好底色：${h}时｜${DATA.suffix[h]}</h4>
    <p>${hb.thinking}</p>
    <h4>交互机制</h4>
    <p>${mechanism(r)} 具体表现为：先由${m}月决定“什么值得要”，再由${h}时决定“如何理解、拆解、推进或拒绝”。</p>
    <h4>最终表现</h4>
    <p>以${mb.name}式欲望选择目标，以${DATA.suffix[h]}式思维处理路径。高阶状态下，能把“${mb.verb}”与“${hb.verb}”组合成稳定方法论；低阶状态下，容易出现${r}带来的偏执、迟滞、过热、过冷或模块分裂。</p>
    <p class="check">核验：本型只描述精神动力结构，不直接判定现实吉凶。</p>
    <p><a href="${docLink(m,h)}">打开完整 Markdown 文档 →</a></p>
  </div>`;
}

function populateFilters() {
  for (const id of ['monthFilter','hourFilter']) {
    const el = document.getElementById(id);
    DATA.branches.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b; opt.textContent = `${b}｜${DATA.branchData[b].name}`;
      el.appendChild(opt);
    });
  }
  const rels = ['同相放大','六冲张力','六合转译','三合共振','欲望生思维','思维生欲望','欲望规训思维','思维审查欲望','杂气并行'];
  const rf = document.getElementById('relationFilter');
  rels.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r; opt.textContent = r;
    rf.appendChild(opt);
  });
}

function renderMatrix() {
  const mf = document.getElementById('monthFilter').value;
  const hf = document.getElementById('hourFilter').value;
  const rf = document.getElementById('relationFilter').value;
  const q = document.getElementById('searchBox').value.trim();

  const months = mf ? [mf] : DATA.branches;
  const hours = hf ? [hf] : DATA.branches;
  const table = document.getElementById('typeMatrix');
  table.innerHTML = '';
  const thead = document.createElement('thead');
  thead.innerHTML = `<tr><th>月支\\时支</th>${hours.map(h=>`<th>${h}<br><span class="mini">${DATA.suffix[h]}</span></th>`).join('')}</tr>`;
  table.appendChild(thead);
  const tbody = document.createElement('tbody');

  months.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${m}月<br><span class="mini">${DATA.branchData[m].name}</span></td>`;
    hours.forEach(h => {
      const r = relation(m,h), nm = typeName(m,h);
      const hay = `${m}月${h}时 ${nm} ${r} ${DATA.branchData[m].desire} ${DATA.branchData[h].thinking}`;
      const hidden = (rf && rf !== r) || (q && !hay.includes(q));
      const td = document.createElement('td');
      td.className = 'type-cell';
      td.style.display = hidden ? 'none' : '';
      td.innerHTML = `<div class="type-name">${nm}</div><div class="tag">${r}</div><div class="mini">${m}月欲望 × ${h}时思维</div>`;
      td.addEventListener('click', () => {
        document.querySelectorAll('.type-cell').forEach(x=>x.classList.remove('active'));
        td.classList.add('active');
        document.getElementById('detail').innerHTML = makeDetail(m,h);
      });
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

populateFilters();
renderMatrix();
document.querySelectorAll('select,input').forEach(el => el.addEventListener('input', renderMatrix));
document.getElementById('detail').innerHTML = makeDetail('巳','申');
