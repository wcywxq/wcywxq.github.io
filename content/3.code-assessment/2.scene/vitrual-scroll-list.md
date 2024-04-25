---
title: 长列表虚拟滚动
---

## vue

```vue
<template>
  <div class="virtual-list">
    <section class="container" ref="containerRef" @scroll="scrollView">
      <div class="scroll-bar" ref="scrollBarRef"></div>
      <ul ref="listRef" class="list">
        <li v-for="item in showList" :key="item">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const childrenHeight = 30;
const maxCount = 10;

const containerRef = ref<HTMLElement | null>(null);
const scrollBarRef = ref<HTMLElement | null>(null);
const listRef = ref<HTMLElement | null>(null);
const list = ref<number[]>([]);
const start = ref<number>(0);
const end = ref<number>(10);

const showList = computed(() => {
  return list.value.slice(start.value, end.value);
});

onMounted(() => {
  list.value = Array.from({ length: 100000 }, (_, v) => v);
  // 计算滚动容器高度
  containerRef.value!.style.height = `${childrenHeight * maxCount}px`;
  // 计算总的数据需要的高度，构造滚动条高度
  scrollBarRef.value!.style.height = `${childrenHeight * list.value.length}px`;
});

const scrollView = () => {
  let scrollTop = containerRef.value!.scrollTop;
  start.value = Math.floor(scrollTop / childrenHeight);
  end.value = start.value + maxCount;
  listRef.value!.style.top = `${start.value * childrenHeight}px`;
};
</script>

<style lang="css">
.virtual-list {
  text-align: center;
}

ul,
li {
  list-style: none;
}

.container {
  position: relative;
  overflow: scroll;
  border-bottom: 1px solid #ddd;
}

.list {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  text-align: left;
}

.list li {
  margin-bottom: 10px;
  line-height: 1.5;
  width: 100%;
  border-bottom: 1px dashed #1890ff;
  color: #52c41a;
  font-weight: bold;
}
</style>
```

## react

```jsx
import { useState, useRef, useMemo, useEffect } from "react"

export default function App() {
    const containerRef = useRef<HTMLElement>(null)
    const scrollBarRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLListElement>(null)

    const childrenHeight = 30
    const maxCount = 10

    const [list, setList] = useState<number[]>([])
    const [start, setStart] = useState<number>(0)
    const [end, setEnd] = useState<number>(10)

    const sliceList = useMemo(() => {
        return list.slice(start, end)
    }, [list, start, end])

    useEffect(() => {
        setList(prev => {
            prev = Array.from({ length: 100000 }, (k, v) => v)
            containerRef.current!.style.height = `${childrenHeight * maxCount}px`
            scrollBarRef.current!.style.height = `${childrenHeight * prev.length}px`
            return prev
        })
    }, [])

    const scrollView = () => {
        let scrollTop = containerRef.current!.scrollTop
        const startIndex = Math.floor(scrollTop / childrenHeight)
        console.log(startIndex, "start===")
        setStart(startIndex)
        console.log(startIndex, "end===")
        const endIndex = startIndex + maxCount
        setEnd(endIndex)
        listRef.current!.style.top = `${start * childrenHeight}px`
    }

    return (
        <div className="App">
            <section className="container" ref={containerRef} onScroll={scrollView}>
                <div className="scroll-bar" ref={scrollBarRef}></div>
                <ul className="list" ref={listRef}>
                    {sliceList.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
```
