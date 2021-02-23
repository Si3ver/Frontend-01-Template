## 布局

### 1. 盒模型

[🌰](./css-demo-01.html)

### 2. margin重叠

[🌰](./css-demo-02.html)

### 3. margin负值

对 margin 的 top/left/right/bottom 设置负值，会有何效果？

1. margin-top、margin-left 设置负值，元素向上、左移动
2. margin-right 设置负值，自身不受影响，右侧元素左移
3. margin-bottom 设置负值，自身不受影响，下侧元素上移

[🌰](./css-demo-03.html)

### 4. BFC

什么是BFC，如何应用？

1. 定义：Block format context, 块级格式化上下文。是一块独立的渲染区域，内部元素的渲染不会影响边界以外的元素。
2. 如何形成BFC
  1. float 不是 none
  2. position 是 absolute 或 fixed
  3. overflow 不是 visible

[🌰](./css-demo-04.html)

### 5. float、clearfix

**如何实现圣杯布局和双飞翼布局？**

+ 目标（一般用于PC网页）
  1. 三栏布局 中间一栏最先加载和渲染
  2. 两侧内容固定，中间内容随着宽度自适应
+ 技术总结
  1. 使用 float 布局
  2. 两侧使用 margin 负值，以便和中间内容横向重叠
  3. 防止中间内容被两侧覆盖，一个用 padding，一个用margin

[圣杯布局🌰](./css-demo-05.html)
[双飞翼布局🌰](./css-demo-06.html)

**手写clearfix**

```css
.clearfix:after {
  content: '';
  display: table;
  clear: both;
}
```

### 6. flex

flex实现一个三点的骰子

