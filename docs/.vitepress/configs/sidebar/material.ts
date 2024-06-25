import type { DefaultTheme } from 'vitepress'

export const materialSidebar: DefaultTheme.Config['sidebar'] = {
  '/material/endorsement': [
    {
      text: '面向对象',
      items: [
        {
          text: '基本概念',
          link: '/material/endorsement/oop/basic-concept'
        },
        {
          text: '设计模式',
          link: '/material/endorsement/oop/design-mode'
        }
      ]
    },
    {
      text: 'JS',
      items: [
        {
          text: '语法和数据类型',
          link: '/material/endorsement/js/grammar-data-types'
        }
      ]
    }
  ],
  '/material/programming/source-code': [
    {
      text: '原生 API',
      items: [
        {
          text: 'Ajax',
          link: '/material/programming/source-code/native-api/ajax'
        },
        {
          text: 'Fn.call & Fn.apply & Fn.bind',
          link: '/material/programming/source-code/native-api/call-apply-bind'
        },
        {
          text: '操作符 new',
          link: '/material/programming/source-code/native-api/new'
        },
        {
          text: '关键字 instanceof',
          link: '/material/programming/source-code/native-api/instanceof'
        },
        {
          text: '定时器',
          link: '/material/programming/source-code/native-api/timer'
        },
        {
          text: 'JSON.stringify',
          link: '/material/programming/source-code/native-api/json-stringify'
        },
        {
          text: '迭代器 iterator',
          link: '/material/programming/source-code/native-api/iterator'
        },
        {
          text: '关键字 extends',
          link: '/material/programming/source-code/native-api/extends'
        },
        {
          text: 'Promise',
          link: '/material/programming/source-code/native-api/promise'
        },
        {
          text: 'Polyfill 差异化抹平',
          link: '/material/programming/source-code/native-api/polyfill'
        },
      ]
    },
    {
      text: '函数 Function',
      items: [
        {
          text: '函数防抖',
          link: '/material/programming/source-code/function/debounce'
        },
        {
          text: '函数节流',
          link: '/material/programming/source-code/function/throttle'
        },
        {
          text: '函数柯理化',
          link: '/material/programming/source-code/function/curry'
        },
        {
          text: '函数睡眠',
          link: '/material/programming/source-code/function/sleep'
        }
      ]
    },
    {
      text: '数组 Array',
      items: [
        {
          text: '数组去重',
          link: '/material/programming/source-code/array/remove-duplicate'
        },
        {
          text: '数组扁平化',
          link: '/material/programming/source-code/array/flat'
        },
        {
          text: '数组原型方法',
          link: '/material/programming/source-code/array/prototype-method'
        },
        {
          text: '数组集合关系',
          link: '/material/programming/source-code/array/set-relations'
        },
        {
          text: '互转数组和树',
          link: '/material/programming/source-code/array/swap-array-tree'
        },
        {
          text: '类数组转换',
          link: '/material/programming/source-code/array/arraylike-convert'
        },
        {
          text: '数组乱序',
          link: '/material/programming/source-code/array/out-of-order'
        },
        {
          text: '二维数组',
          link: '/material/programming/source-code/array/two-dimension'
        },
      ]
    },
    {
      text: '字符串 String',
      items: [
        {
          text: 'repeat 实现',
          link: '/material/programming/source-code/string/repeat'
        }
      ]
    },
    {
      text: '集合 Set',
      items: [
        {
          text: '遍历集合',
          link: '/material/programming/source-code/set/traverse'
        }
      ]
    }
  ],
  '/material/programming/business-scenarios': [
    {
      text: 'Promise 异步',
      items: []
    },
    {
      text: '框架核心功能实现',
      items: []
    },
    {
      "text": "原型链输出",
      "link": "/material/programming/business-scenarios/prototype-chain-output"
    },
    {
      "text": "阿拉伯数字和中文互转",
      "link": "/material/programming/business-scenarios/arabic-numerals-and-chinese-converted"
    },
    {
      "text": "计算对象占用字节数",
      "link": "/material/programming/business-scenarios/calcuate-object-bytes"
    },
    {
      "text": "倒计时",
      "link": "/material/programming/business-scenarios/countdown"
    },
    {
      "text": "日期格式化",
      "link": "/material/programming/business-scenarios/date-format"
    },
    {
      "text": "实现前端路由",
      "link": "/material/programming/business-scenarios/frontend-route"
    },
    {
      "text": "图片格式转换",
      "link": "/material/programming/business-scenarios/image-format-conversion"
    },
    {
      "text": "lodash.get",
      "link": "/material/programming/business-scenarios/lodash-get"
    },
    {
      "text": "记忆化请求函数 - 可缓存请求函数",
      "link": "/material/programming/business-scenarios/memorize-request"
    },
    {
      "text": "内容中出现频率最高的字符",
      "link": "/material/programming/business-scenarios/most-frequent-characters-in-content"
    },
    {
      "text": "对象是否循环引用",
      "link": "/material/programming/business-scenarios/object-is-or-not-circular-reference"
    },
    {
      "text": "解析 url 参数",
      "link": "/material/programming/business-scenarios/parse-url-query"
    },
    {
      "text": "随机数",
      "link": "/material/programming/business-scenarios/random-number"
    },
    {
      "text": "富文本内容转换",
      "link": "/material/programming/business-scenarios/rich-text-content-conversion"
    },
    {
      "text": "sku 算法实现",
      "link": "/material/programming/business-scenarios/sku"
    },
    {
      "text": "整数分割",
      "link": "/material/programming/business-scenarios/split-number"
    },
    {
      "text": "千分位分隔数字字符串",
      "link": "/material/programming/business-scenarios/thousandth-separated-number-string"
    },
    {
      "text": "长列表虚拟滚动",
      "link": "/material/programming/business-scenarios/vitrual-scroll-list"
    },
    {
      "text": "xhr hook 实现打印日志",
      "link": "/material/programming/business-scenarios/xhr-hook-to-log"
    }
  ],
}
