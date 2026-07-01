# modern-numerology

现代命理学研究资料库。

本仓库当前主轴已经重构为：

```text
二十四节气令 × 日内光热时段 = 288 种认知—行动结构
```

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

## 288 认知—行动类型体系

新版体系继续摆脱传统术语依赖，使用更直接的现代命名方式：

```text
节气令：出生时太阳所处的二十四节气段
日内段：出生时地方太阳时所处的光热时段
类型名：节气令 · 日内光热段
```

例如：

```text
夏至·日出
秋分·日落前
冬至·深夜
立春·破晓前
```

### 核心变化

- 年度端不再依赖十二个月份、农历月份或十二月支作为主要解释主语。
- 年度端使用二十四节气令，描述长期认知行为偏好。
- 日内端使用地方太阳时、日出、正午、午后高热、日落、夜初、深夜、黎明前等光热时段。
- 旧版传统元素表述已从当前主体系中移除，只保留为历史解释层。
- 类型命名改为“节气 · 日内时段”，例如 `夏至·日出`。
- 月份、季度、季节只作为粗粒度辅助层，不再承担精密人格分类。

### 文档入口

- 网页矩阵：`docs/index.html`
- 节气令说明：`docs/solar-terms/二十四节气命理学.md`
- 理论说明：`docs/theory/节气光热时段模型.md`
- 认知行为偏好说明：`docs/theory/节气令与长期认知行为偏好.md`
- 新版文档目录：`docs/288-solar-term-types/`
- 生成入口：`tools/generate_288_solar_term_personality_docs.py`

> `docs/144-five-element-types/` 属于旧版历史入口。当前主体系以 `docs/288-solar-term-types/` 为准。
