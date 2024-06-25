---
title: 离线存储
---

离线存储指的是：在用户没有网络连接时，可以正常访问站点或应用，在用户有网络连接时，更新用户机器行的缓存文件

## 工作原理

html5 的离线存储是基于一个新建的 .appache 文件的缓存机制，通过这个文件的解析清单来离线存储资源，这些资源可以像 cookie 一样被存储，当网络处于断开情况时，浏览器就会通过被离线存储的数据进行页面展示

## 工作流程

在线的情况下，浏览器发现 html 头部有 mainfest 属性，它会请求 mainfest 文件，如果是第一次访问页面，那么浏览器就会根据 mainfest 文件的内容下载相应的资源并进行离线存储。

如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 mainfest 文件与旧的 mainfest 文件，如果文件没有发生改变，则不做任何操作；如果文件发生了改变，就会重新下载文件中的资源并进行离线存储。

在离线的情况下，浏览器会直接使用离线存储的资源。

## 主意事项

1. 浏览器对缓存数据的容量限制可能不太一样。某些浏览器设置的限制是每个站点 5MB
2. 如果 manifest 文件或者内部列举的某一个文件不能正常下载，那么整个更新过程都将会失败，浏览器将继续使用旧的缓存
3. 引用 manifest 的 html 必须与 manifest 文件同源
4. FALLBACK 中的资源必须与 manifest 文件同源
5. 当一个资源被缓存后，该浏览器直接请求这个绝对路径时也会访问缓存中的资源
6. 站点中的其他页面，即使没有设置 manifest 属性，请求的资源如果在缓存中，则也会从缓存中访问
7. 当 manifest 文件发生改变时，资源请求本身也会触发更新

## 例子

### 1. 创建 manifest.appcache 文件

- CACHE：表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面本身也列出来
- NETWORK：表示在它下面列出来的资源只有在在线的情况下才能访问，它们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也可以说 CACHE 的优先级更高
- FALLBACK：表示如果访问第一个资源失败，那么就使用第二个资源来替换它。例如：/ /offline.html 表示用 offline.html 替换 /

```shell
CACHE MANIFEST
# 版本号或注释

CACHE:
/index.html
/app.js

NETWORK:
*

FALLBACK:
/ /offline.html
```

在这个清单中，我们列出了要缓存的文件（index.html 和 app.js），以及网络请求的策略。NETWORK: \* 表示其他文件都需要联网获取。FALLBACK: / /offline.html 表示如果访问任何未缓存的页面，则显示离线页面 offline.html

### 2. 更新 HTML 文件

```html
<!DOCTYPE html>
<html manifest="manifest.appcache">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Offline Todo List</title>
  </head>
  <body>
    <h1>Offline Todo List</h1>

    <form id="todoForm">
      <label for="task">Task:</label>
      <input type="text" id="task" required />
      <button type="submit">Add Task</button>
    </form>

    <ul id="taskList"></ul>

    <script src="app.js"></script>
  </body>
</html>
```

### 3. 创建一个离线页面

```html [offline.html]
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Offline</title>
  </head>
  <body>
    <h1>You are offline</h1>
  </body>
</html>
```

### 4. 更新 js 文件

```js [app.js]
// 获取任务列表
const taskListElement = document.getElementById("taskList");

// 从 localStorage 中加载任务
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task));
}

// 将任务添加到任务列表和 localStorage
function addTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTaskToDOM(task);
}

// 将任务添加到任务列表
function addTaskToDOM(task) {
  const taskItem = document.createElement("li");
  taskItem.textContent = task;
  taskListElement.appendChild(taskItem);
}

// 处理表单提交
document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("task");
    const task = taskInput.value.trim();
    if (task !== "") {
      addTask(task);
      taskInput.value = "";
    }
  });

// 初始化时加载任务
loadTasks();
```

在这个例子中，我们使用 Application Cache 的 manifest 文件，并且增加了一个离线页面。当用户离线时，如果访问缓存中不存在的页面，将显示离线页面。在在线状态下，仍然可以添加和查看任务
