# 居中

## 基本原理

### 内联盒子

::: tip 水平居中

- 行级内容可设置

```css
[element] {
  text-align: center;
}
```

- 弹性布局可设置父级元素

```css
[element] {
  display: flex;
  justify-content: center;
}
```

:::

::: tip 垂直居中

- 单行文本 <Badge type="warning" text="父元素高度确定" />

```css
[element] {
  height: [line-height];
}
```

- 多行文本 <Badge type="warning" text="父元素高度确定" />

```css
[element] {
  display: table-cell;
  vertical-align: middle;
}
```

:::

### 块级盒子

::: tip 水平居中

- 固定宽度：`margin: 0 auto`

:::

::: tip 垂直居中

- 高度固定 + `position: absolute` + `left`、`top`、`margin-left`、`margin-top`
- 高度固定 + `position: fixed` + `margin: auto`
- `display: table-cell`
- `transform: translate(x, y)`
- 弹性布局 `flex`
- 网格布局 `grid`
:::

## 具体案例

### 固定宽高

<iframe src="https://codesandbox.io/embed/f5vqtg?view=editor+%2B+preview&module=%2Ffixed.html"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css 布局"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 不固定宽高

<iframe src="https://codesandbox.io/embed/f5vqtg?view=editor+%2B+preview&module=%2Fnot-fixed.html"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css 布局"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 图片定高或不定高垂直水平居中

<iframe src="https://codesandbox.io/embed/f5vqtg?view=editor+%2B+preview&module=%2Fimage.html"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css 布局"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
