# modern-numerology

现代命理学研究资料库。

本仓库当前主轴已经重构为：

```text
二十四节气令 × 日内光热段 = 288 种长期认知—行动结构
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

旧版体系曾使用“十二个月度季节五行 × 十二个日内光热五行 = 144 类型”。这一层级已经降为历史版本。

新版体系使用更细、更有天文锚点的节气令：

```text
节气令：出生时太阳所处的二十四节气段
日内段：出生时地方太阳时所处的光热相位
```

### 核心变化

- 年度端不再依赖十二个月份、农历月份或十二月支作为主要解释主语。
- 年度端改为二十四节气令，描述长期认知行为偏好。
- 月份、季度、季节只作为较粗粒度的长期行为倾向层，不再承担精密人格分类。
- “欲望生成方式”相关旧叙述已被替换为“长期认知行为偏好”。
- 例如秋分令不再被解释为某种欲望底色，而是解释为长期倾向于总结、分割、衡量、归类、设定边界与完成对称化判断。
- 日内端仍使用地方太阳时、太阳高度、温度滞后、日落、入夜、最低温与破晓来描述行动入口。
- 土被定义为相位缓冲、承载与转化介质，不作为年度端独立主季节。

### 文档入口

- 网页矩阵：`docs/index.html`
- 节气令说明：`docs/solar-terms/二十四节气命理学.md`
- 理论说明：`docs/theory/五行性格相位模型.md`
- 认知行为偏好说明：`docs/theory/节气令与长期认知行为偏好.md`
- 新版文档目录：`docs/288-solar-term-types/`
- 生成入口：`tools/generate_288_solar_term_personality_docs.py`

> `docs/144-five-element-types/` 属于旧版目录语义，仅保留为历史入口。新版页面与生成器使用 `docs/288-solar-term-types/`。
