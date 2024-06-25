# 数组和树互转

## 树转数组

对于给定的对象数组结构，描述的是一颗树的节点关系，要求实现一个函数，找出这颗树所有的链路，以二维数组形式输出。

- 例如：

```js
const list = [
    { id: 6 },
    { id: 2, children: [5] },
    { id: 13 },
    { id: 5, children: [10, 11] },
    { id: 1, children: [2, 3, 4] },
    { id: 10 },
    { id: 8, children: [13] },
    { id: 4, children: [8, 9] },
    { id: 9 },
    { id: 3, children: [6, 7] },
    { id: 11, children: [14] },
    { id: 14 },
    { id: 7, children: [12] },
    { id: 12 }
]
```

- 输出：

```js
// [
//   [ 1, 3, 6 ],
//   [ 1, 4, 8, 13 ],
//   [ 1, 2, 5, 10 ],
//   [ 1, 4, 9 ],
//   [ 1, 2, 5, 11, 14 ],
//   [ 1, 3, 7, 12 ]
// ]
```

- 实现：

```js
function parseArrToTree(arr) {
  const dfs = (tree, path = [], res = []) => {
    tree.forEach(node => {
      path.push(node.id)
      node.children && node.children.length
        ? dfs(
          node.children.map(id => arr.find(item => item.id === id)),
          path,
          res
        )
        : res.push([...path])
      path.pop()
    })
    return res
  }
  return dfs(arr)
}
```

## 数组转树

将 flat 数组变成 tree 型结构

```ts
/**
* 将 flat 数组变成 tree 型结构
* @param arr
* @param isChild
* @param customizer
*/
type LoopTree<T> = T & {
  children?: LoopTree<T>[];
};
type IsChildFunction<T> = (parentNode: T, childNode: T) => boolean;
type IsChildConfig = {
  parentKey: string;
  key: string;
};
export function array2tree<
  NodeValue extends { [key: string]: any },
  CustomizerReturn,
  ReadonlyNodeValue extends Readonly<NodeValue>
>(
  arr: ReadonlyNodeValue[],
  isChild: IsChildFunction<ReadonlyNodeValue> | IsChildConfig,
  customizer?: (node: ReadonlyNodeValue) => CustomizerReturn
) {
  const root = {} as ReadonlyNodeValue;
  const innerIsChildFunc: IsChildFunction<ReadonlyNodeValue> =
    typeof isChild === "function"
      ? isChild
      : (pNode, node) => pNode[isChild.key] === node[isChild.parentKey];
  const innerCustomizer = (node: ReadonlyNodeValue) =>
    customizer ? customizer(node) : node;
  const validateSelf = (node: ReadonlyNodeValue) => {
    return innerIsChildFunc(node, node);
  };
  const pushedFlag: Array<boolean> = [];
  const func = (
    parent: ReadonlyNodeValue,
    isRoot: boolean = true
  ): LoopTree<CustomizerReturn | NodeValue> => {
    const node = [];
    for (let i = 0; i < arr.length; i++) {
      if (!isRoot && validateSelf(parent)) break;
      if (pushedFlag[i]) continue;
      const item = arr[i];
      if (innerIsChildFunc(parent, item)) {
        pushedFlag[i] = true;
        const child = func(item, false);
        node.push(child);
      }
    }
    return {
      ...innerCustomizer(parent),
      children: node.length > 0 ? node : undefined,
    };
  };
  const result = func(root);
  return result.children || [];
}
```
