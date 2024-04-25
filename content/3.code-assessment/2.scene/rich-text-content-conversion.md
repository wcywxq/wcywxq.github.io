---
title: 富文本内容转换
---

## 文本中识别敏感词、表情包、链接、数字、字母并高亮

```js
// 匹配等级，从左向右依次降低
var levels = ["link", "emoji", "joke", "numberalphabet"];
// 对应规则下的正则，样式和渲染内容
var rulesMap = {
  link: {
    tag: "a",
    regex:
      /(((ht|f)tps?):\/\/)+[\w-]+(\.[\w-]+)+([\w.,@?^=%&:;/~+#-]*[\w@?^=%&;/~+#-])?/,
    regexAttribute: "gi",
    attr: {
      target: "_blank",
      href: (content) => content,
    },
  },
  emoji: {
    tag: "img",
    regex: /\[.*?\]/,
    regexAttribute: "g",
    single: true,
    attr: {
      style: "width: 25px; height: 25px",
      src: (content) => content || "",
      alt: "",
    },
  },
  joke: {
    tag: "span",
    regex: "",
    regexAttribute: "g",
    attr: {
      style: "color: #ff0; background-color: #f00",
    },
  },
  numberalphabet: {
    tag: "span",
    regex: /[a-zA-Z0-9]/,
    regexAttribute: "g",
    attr: {
      style: "color: #ff0; background-color: #f00",
    },
  },
};

function isFunction(val) {
  return Object.prototype.toString.call(val) === "[object Function]";
}

function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}

function isArray(val) {
  return Object.prototype.toString.call(val) === "[object Array]";
}

function isString(val) {
  return Object.prototype.toString.call(val) === "[object String]";
}

/**
 * 生成标签内容
 * @param {*} type
 * @param {*} content
 */
function renderHtmlTag(type, content) {
  var { tag, single, attr } = rulesMap[type];
  var attributesArr = Object.entries(attr).map(([key, value]) => {
    if (isFunction(value)) {
      return `${key}="${value()}"`;
    } else {
      return `${key}="${value}"`;
    }
  });

  return single
    ? `<${tag} ${attributesArr.join(" ")} />`
    : `<${tag} ${attributesArr.join(" ")}>${content}</${tag}>`;
}

/**
 * @function
 * @description 获取高亮内容
 * @param content 内容
 * @param jokeMatchWords 敏感词数组
 */
function getHighlight(content = [], jokeMatchWords) {
  var renderArray = [content];
  // 敏感词去重 + 排序
  var noRepeatJokeMatchWords = Array.from(new Set(jokeMatchWords)).sort(
    (a, b) => b.length - a.length
  );
  // 生成正确匹配规则下的带有类型的正则匹配规则
  var regExpArrWithType = getFlatRegExpArr(levels, noRepeatJokeMatchWords);
  // 根据匹配规则生成对应匹配到的内容
  regExpArrWithType.forEach(({ type, regExp }) => {
    renderArray = recursiveSplitContent(type, regExp, renderArray);
  });
  var renderHtml = this.renderHtmlByJudgeType(renderArray, "");

  return renderHtml;
}

/**
 * 根据类型将 html 结构进行拼接
 * @param {*} renderContent
 * @param {*} htmlString
 */
function renderHtmlByJudgeType(renderContent, htmlString) {
  if (isArray(renderContent)) {
    renderContent.forEach((item) => {
      htmlString += renderHtmlByJudgeType(item, "");
    });
  } else if (isObject(renderContent)) {
    var { type, content } = renderContent;
    htmlString += renderHtmlTag(type, content);
  } else if (isString(renderContent)) {
    htmlString += renderContent;
  }
  return htmlString;
}

/**
 * 递归分割内容
 * @param {*} type
 * @param {*} regExp
 * @param {*} renderContent
 */
function recursiveSplitContent(type, regExp, renderContent) {
  if (isArray(renderContent)) {
    renderContent = renderContent.map((item) =>
      recursiveSplitContent(type, regExp, item)
    );
  } else if (isString(renderContent)) {
    var findWords = renderContent.match(regExp);
    if (findWords) {
      // findWords 去重
      findWords = Array.from(new Set(findWords));
      var nextRoundContentArray = [];
      findWords.forEach((word) => {
        if (nextRoundContentArray.length) {
          nextRoundContentArray = nextRoundContentArray.map((item) =>
            recursiveSplitContent(type, word, item)
          );
        } else {
          var currentSplitArray = renderContent.split(word);
          currentSplitArray.forEach((item, index) => {
            if (index !== 0) {
              nextRoundContentArray.push({ type, content: word });
            }
            nextRoundContentArray.push(item);
          });
        }
      });
      renderContent = nextRoundContentArray;
    }
  }
  return renderContent;
}

/**
 * 扁平化后的一维带有类型的正则匹配数组
 * @param {*} levels
 * @param {*} jokeMatchWords
 */
function getFlatRegExpArr(levels, jokeMatchWords) {
  var arr = levels.map((level) => ({
    type: level,
    regExp: getRegExpRoundJokeArr(level, jokeMatchWords),
  }));
  return arr
    .map(({ type, regExp }) => {
      return regExp.map((item) => ({ type, regExp: item }));
    })
    .flat(Infinity);
}

/**
 * 生成包含敏感词的匹配规则数组
 * @param {*} type
 * @param {*} jokeMatchWords
 */
function getRegExpRoundJokeArr(type, jokeMatchWords) {
  var { regex, regexAttribute } = rulesMap[type],
    regExpArray = [];
  if (type === "joke") {
    jokeMatchWords.forEach((word) => {
      regExpArray.push(new RegExp(word, regexAttribute));
    });
  } else {
    regExpArray.push(new RegExp(regex, regexAttribute));
  }
  return regExpArray;
}

// ========== 测试 ==========
var jokeMatchWords = ["共产党", "习近平", "习近平的1", "嘻嘻", "哈哈", "色情"];
var text =
  "https://www.google.com共产党的内容有习近平1231真的习近平https://www.google.com3你妹的习近平的1234sd2情['沮丧']的https://www.baidu.com图片4124色情的人还有aab色bccdd嘻嘻和span>哈哈哈https://www.google.com";
document.querySelector("#highlight").innerHTML = getHighlight(
  text,
  jokeMatchWords
);
```
