# modern-numerology

现代命理学研究资料库。

## GitHub Pages 网页

网页入口：`docs/index.html`

启用后访问地址通常为：

```text
https://eateralspirial.github.io/modern-numerology/
```

部署 workflow：`.github/workflows/deploy-pages.yml`

如果 Pages 没有自动启用，需要在 GitHub 仓库设置中选择：

```text
Settings → Pages → Source → GitHub Actions
```

## 144 人格类型体系

本仓库的 144 人格类型体系已经从旧版“双十二地支”框架更新为：

```text
月度季节五行底色 × 日内光热五行底色 = 144 种人格结构
```

### 核心变化

- 旧地支月名、旧地支时名只保留为历史索引，不作为当前体系的主要表达层。
- 月度系统挂靠到一年中的季节相位、温度趋势、光照趋势与五行性格。
- 日内系统挂靠到地方太阳时、日出、太阳中天、温度滞后、日落、入夜、最低温与破晓。
- 月度系统弱化土：土主要表示前后季节之间的连接、孕育、转化与相位缓冲。
- 日内系统保留性格化土：先知土木、残照土金、躁动土金代表“含藏未出”“执着守持”“余热黏滞”等人格底色。

### 文档入口

- 网页矩阵：`docs/index.html`
- 理论说明：`docs/theory/五行性格相位模型.md`
- 新版文档目录：`docs/144-five-element-types/`
- 生成入口：`tools/generate_144_personality_docs.py`

> `docs/144-personality-types/` 属于旧版目录语义。新版页面与生成器使用 `docs/144-five-element-types/`。
