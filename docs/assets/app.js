const MONTH_PHASES = [
  ['M01','深冬水','水',['水'],'冬至前后 / 深冬','深冬水型季节底色：世界处在低温、闭藏、资源回收的阶段。欲望不急于显形，先追求安全、底层规律、长期储备与暗线掌握。','闭藏、回收、下潜、蓄势'],
  ['M02','孕木寒水','水木',['水','木'],'冬末 / 水向木转化','孕木寒水型季节底色：水气仍寒，但内部已经孕育生发。欲望表现为在低温中寻找新出口，把尚未展开的可能保存到可发动的时机。','封存、生芽、耐寒、预备'],
  ['M03','破土木','木',['木'],'初春','破土木型季节底色：生命从封存中突破，欲望指向开局、方向、出发与生长权。它倾向把世界理解为可以被打开的局面。','发动、破土、开局、伸展'],
  ['M04','舒展木','木',['木'],'仲春','舒展木型季节底色：生命开始分枝，欲望指向关系、生长、审美、连接与自然展开。它相信柔性扩张可以带来丰盛。','舒展、分枝、连接、生长'],
  ['M05','蓄火木','木火',['木','火'],'春末 / 木向火转化','蓄火木型季节底色：木气蓄满并向火推进。欲望已经不满足于生长本身，而开始要求显化、热度、舞台与更高强度的现实展开。','蓄势、升温、转燃、显化'],
  ['M06','升焰火','火',['火'],'初夏','升焰火型季节底色：世界正在快速变热，欲望指向扩张、运作、技术化、权力发动和现实价值的显现。','升温、加速、运作、点燃'],
  ['M07','盛阳火','火',['火'],'盛夏','盛阳火型季节底色：光热居于中心，欲望指向被看见、被承认、直接表达、显赫、舞台与高能量输出。','照耀、外放、极化、显赫'],
  ['M08','炼金火','火金',['火','金'],'夏末 / 火向金转化','炼金火型季节底色：火不再只是燃烧，而开始把热量压成形。欲望指向成器、标准、制度、技术、作品和可被留下的结构。','炼化、熟成、压形、成器'],
  ['M09','疏通金','金',['金'],'初秋','疏通金型季节底色：热退而路径显现，欲望指向接口、效率、道路、交换、技术性通达与资源再分配。','通达、切换、传导、分配'],
  ['M10','裁断金','金',['金'],'仲秋','裁断金型季节底色：世界进入结算、分割、定型与标准化。欲望指向准确、干净、边界、审美、裁断与成果定型。','裁断、成形、结算、定标'],
  ['M11','藏水金','金水',['金','水'],'秋末 / 金向水转化','藏水金型季节底色：金气裁断后转入闭藏。欲望指向防御、余烬清理、长期保存、撤回、风险隔离与深层蓄势。','收束、藏水、守界、回撤'],
  ['M12','回源水','水',['水'],'初冬','回源水型季节底色：生命重新回到深水，欲望指向想象、潜流、母体感、远方联结、隐性资源和下一轮孕育。','回源、溶解、孕育、潜入']
].map(([id,name,element,flow,season,desire,verb])=>({id,name,element,flow,season,desire,verb}));

const DAY_PHASES = [
  ['D01','强劲木','木',['木'],'日出后 / 迎来完整白昼','强劲木型日内底色：出生后首先经验到光明展开，身体相信世界会继续打开。行动入口偏恢复、展开、再生与不绝望。','展开、恢复、生长、重新开始'],
  ['D02','朝气火','火',['火'],'日出完全后至上午十点','朝气火型日内底色：社会活动与自然光合作用全面启动。行动入口偏主动、兴奋、建设、参与和快速升温。','启动、参与、升温、建设'],
  ['D03','热情火','火',['火'],'上午十点至正午','热情火型日内底色：太阳接近最高，光照清明。行动入口偏自信、表达、公开、热情和愿意被看见。','表达、照亮、推进、显现'],
  ['D04','爆火','火',['火'],'正午至午后最热前','爆火型日内底色：光照已顶，热量继续累积。行动入口偏爆发、强烈、冲动、压迫感与低启动阈值。','爆发、冲顶、燃烧、压强'],
  ['D05','疏通金','金',['金'],'午后热退至约四点','疏通金型日内底色：热度转舒适，道路、信息、接口变顺。行动入口偏路径感、技术性、机变、通道与交换。','疏通、传导、换路、接驳'],
  ['D06','裁断金','金',['金'],'下午四点至日落前','裁断金型日内底色：光斜影长，一天开始结算。行动入口偏边界、判断、切割、归类和提前看见终局。','裁断、分割、归类、结算'],
  ['D07','残照土金','土金',['土','金'],'日落至天全黑','残照土金型日内底色：光被切断，热仍滞留，最长黑夜即将展开。行动入口带有土的执着与金的裁断，既看见落幕，又不愿松手。','守持、执着、裁断、抗夜'],
  ['D08','躁动土金','土金',['土','金'],'刚入夜 / 夜初仍热','躁动土金型日内底色：外界已关门，身体热量仍在撞门。行动入口带有黏滞、烦躁、余热、边界反抗和坚韧硬撑。','滞留、撞击、硬撑、磨损'],
  ['D09','沉降水','水',['水'],'二十一点至二十三点','沉降水型日内底色：人类活动止息，意识开始入水。行动入口偏整理、吸收、私密化、内流和把白天经验沉入记忆。','沉降、吸收、内流、归巢'],
  ['D10','感性水','水',['水'],'深夜','感性水型日内底色：深夜潜流活跃，梦性、隐秘性与情绪潮汐增强。行动入口偏感受、想象、暗线和潜意识判断。','感受、潜流、做梦、隐秘连接'],
  ['D11','冰冷水','水',['水'],'凌晨 / 一日最低温附近','冰冷水型日内底色：生命活动压低，温度接近谷底。行动入口偏冷静、封存、防御、低表达、高耐受和长期保存。','冻结、封存、防御、耐受'],
  ['D12','先知土木','土木',['土','木'],'日出前 / 光未至而阳先动','先知土木型日内底色：土中含木，将出未出。行动入口带有预感、等待、含藏、先发意识和黑暗中确认光会到来的结构。','含藏、预感、生芽、待发']
].map(([id,name,element,flow,time,action,verb])=>({id,name,element,flow,time,action,verb}));

const MECHANISMS = {
  '同气放大':'两端进入同一主气，季节欲望与日内行动入口互相加码。优势是纯度高、启动阻力低；风险是单一相位过强，容易把世界压缩成一种问题。',
  '土性承载':'一端或两端带有土性承载，核心不是对抗，而是把相邻相位的力量含住、拖住、转化。优势是耐受、守持、孕育；风险是黏滞、延迟、难以迅速释放。',
  '土性转译':'两端主气不同，但至少一端承担连接、孕育或相位转换。优势是能把异质力量转成可承载的过程；风险是中间态过长，行动容易卡在将出未出、将断未断。',
  '炼化成器':'火将金逼出形态，热度服务于结构。优势是能把激情、欲望、野心压成作品、制度、标准和技术；风险是火候过强导致焦灼，或过度以成果证明自身。',
  '结构回火':'金反向要求火服从结构、标准与终局判断。优势是高标准、可成器、能提前止损；风险是行动尚未升温就被审判。',
  '水火时间冲突':'水与火代表相反时间箭头：一个回流、延迟、潜入，一个显化、加速、外放。优势是能同时理解欲望与虚无；风险是内在温差大，容易在爆发与撤回之间摆荡。',
  '裁断生长':'金对木形成切割与修枝。优势是能把生长欲纳入边界、结构与审美；风险是过早裁剪，生命力尚未展开就被标准压住。',
  '生长遇裁':'木向外伸展时遭遇金的标准与边界。优势是生长不至于散乱；风险是扩张过程频繁自我否定。',
  '顺势推进':'季节欲望自然推动日内行动入口，二者像前后相位接力。优势是推进顺、心理阻力低；风险是惯性过强，校验不足。',
  '逆势回流':'日内行动入口把季节欲望拉回前一相位，形成回看、复盘与逆向滋养。优势是能补足根基；风险是启动后反复回撤。',
  '并行调和':'两端不形成强冲突，也不形成强生发，像两个模块并行。优势是适应性高；风险是核心叙事不够集中。'
};

const NEXT = {'水':'木','木':'火','火':'金','金':'水'};
const primary = p => p.flow.find(e => e !== '土') || p.flow[p.flow.length - 1];
const transitional = p => p.flow.length > 1 || p.flow.includes('土');

function relation(m,d){
  const me=primary(m), de=primary(d);
  if((m.name===d.name)||(me===de&&m.element===d.element)) return '同气放大';
  if(transitional(m)||transitional(d)){
    if(me===de) return '土性承载';
    if(me==='火'&&de==='金') return '炼化成器';
    if(me==='金'&&de==='火') return '结构回火';
    if(new Set([me,de]).has('水')&&new Set([me,de]).has('火')) return '水火时间冲突';
    return '土性转译';
  }
  if(me==='火'&&de==='金') return '炼化成器';
  if(me==='金'&&de==='火') return '结构回火';
  if(new Set([me,de]).has('水')&&new Set([me,de]).has('火')) return '水火时间冲突';
  if(me==='金'&&de==='木') return '裁断生长';
  if(me==='木'&&de==='金') return '生长遇裁';
  if(NEXT[me]===de) return '顺势推进';
  if(NEXT[de]===me) return '逆势回流';
  return '并行调和';
}

const typeName = (m,d) => `${m.name}·${d.name}型`;
const safe = s => s.replace(/[\\/:*?"<>|，。；：、\s]+/g,'-').replace(/^-+|-+$/g,'');
function docLink(m,d){
  const mi=MONTH_PHASES.indexOf(m)+1, di=DAY_PHASES.indexOf(d)+1;
  return `./144-five-element-types/${String(mi).padStart(2,'0')}-${safe(m.name)}/${String(di).padStart(2,'0')}-${safe(m.name)}-x-${safe(d.name)}-${safe(typeName(m,d))}.md`;
}

function makeDetail(m,d){
  const r=relation(m,d);
  return `<div class="detail-card">
    <h3>${typeName(m,d)}</h3>
    <p class="meta">${m.id} ${m.name} × ${d.id} ${d.name}｜${r}</p>
    <h4>月度季节五行底色：${m.name}</h4><p>${m.desire}</p>
    <p class="meta">季节位置：${m.season}｜五行相位：${m.element}｜动态：${m.verb}</p>
    <h4>日内光热五行底色：${d.name}</h4><p>${d.action}</p>
    <p class="meta">日内位置：${d.time}｜五行相位：${d.element}｜动态：${d.verb}</p>
    <h4>交互机制：${r}</h4><p>${MECHANISMS[r]}</p>
    <h4>最终表现</h4><p>以「${m.name}」生成欲望，以「${d.name}」进入行动、感知、判断或防御。高阶状态下，能把“${m.verb}”与“${d.verb}”组合成稳定方法论；低阶状态下，容易出现${r}带来的温差、迟滞、过热、过冷或相位错位。</p>
    <p class="check">核验：本型只描述人格底色，不直接判定现实吉凶。</p>
    <p><a href="${docLink(m,d)}">打开完整 Markdown 文档 →</a></p>
  </div>`;
}

function populateFilters(){
  const mf=document.getElementById('monthFilter');
  MONTH_PHASES.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=`${p.id}｜${p.name}｜${p.element}`;mf.appendChild(o);});
  const df=document.getElementById('dayFilter');
  DAY_PHASES.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=`${p.id}｜${p.name}｜${p.element}`;df.appendChild(o);});
  const rf=document.getElementById('relationFilter');
  Object.keys(MECHANISMS).forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent=r;rf.appendChild(o);});
}

function renderMatrix(){
  const mv=document.getElementById('monthFilter').value;
  const dv=document.getElementById('dayFilter').value;
  const rv=document.getElementById('relationFilter').value;
  const q=document.getElementById('searchBox').value.trim();
  const table=document.getElementById('typeMatrix');
  table.innerHTML='';
  const header=document.createElement('tr');
  header.innerHTML='<th>月度\\日内</th>'+DAY_PHASES.map(d=>`<th>${d.name}<br><small>${d.element}</small></th>`).join('');
  table.appendChild(header);
  MONTH_PHASES.forEach(m=>{
    if(mv&&m.id!==mv) return;
    const tr=document.createElement('tr');
    const th=document.createElement('th'); th.innerHTML=`${m.name}<br><small>${m.element}</small>`; tr.appendChild(th);
    DAY_PHASES.forEach(d=>{
      const r=relation(m,d), name=typeName(m,d);
      const hay=[m.id,d.id,m.name,d.name,m.element,d.element,r,name,m.season,d.time].join(' ');
      const show=(!dv||d.id===dv)&&(!rv||r===rv)&&(!q||hay.includes(q));
      const td=document.createElement('td');
      if(show){td.innerHTML=`<button class="type-cell" title="${r}"><strong>${name}</strong><span>${r}</span></button>`;td.querySelector('button').addEventListener('click',()=>{document.getElementById('detail').innerHTML=makeDetail(m,d);});}
      else{td.classList.add('muted');td.textContent='—';}
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  populateFilters();
  ['monthFilter','dayFilter','relationFilter','searchBox'].forEach(id=>document.getElementById(id).addEventListener('input',renderMatrix));
  renderMatrix();
  document.getElementById('detail').innerHTML=makeDetail(MONTH_PHASES[5],DAY_PHASES[5]);
});
