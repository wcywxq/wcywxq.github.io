import type { DefaultTheme } from 'vitepress'

const materialEndorsementSidebar: DefaultTheme.Config['sidebar'] = {
  '/material/endorsement/programming-concept': [
    {
      text: '面向对象',
      link: '/material/endorsement/programming-concept/oop'
    },
    {
      text: '设计模式',
      link: '/material/endorsement/programming-concept/design-mode'
    }
  ],
  '/material/endorsement/os': [
    {
      text: '进程和线程',
      link: '/material/endorsement/os/processes-threads'
    },
  ],
  '/material/endorsement/browser-network': [
    {
      text: 'TCP',
      link: '/material/endorsement/browser-network/tcp'
    },
    {
      text: 'HTTP',
      items: [
        {
          text: 'HTTP 请求方法',
          link: '/material/endorsement/browser-network/http/request-methods'
        }
      ]
    },
  ],
  '/material/endorsement/framework': [
    {
      text: 'React',
      items: [
        {
          text: 'fiber',
          link: '/material/endorsement/framework/react/fiber'
        },
        {
          text: '常见面试题',
          link: 'https://notes.fe-mm.com/analysis/react/interview'
        }
      ]
    },
    {
      text: 'Vue',
      items: [
        {
          text: 'v3 优化内容',
          link: '/material/endorsement/framework/vue/v3-optimizing-content'
        }
      ]
    },
    {
      text: 'Svelte',
      items: [
      ]
    },
  ],
  '/material/endorsement/css': [
    {
      text: 'CSS',
      items: [
        {
          text: '居中',
          link: '/material/endorsement/css/center.md'
        },
        {
          text: '布局',
          link: '/material/endorsement/css/layout.md'
        },
      ]
    }
  ],
  '/material/endorsement/ts': [
    {
      text: 'TypeScript',
      items: [
        {
          text: 'TS 内置类型',
          link: '/material/endorsement/ts/built-in-types'
        },
      ]
    }
  ]
}

const materialProgrammingSidebar: DefaultTheme.Config['sidebar'] = {
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
    },
    {
      text: '深浅拷贝(克隆)',
      link: '/material/programming/source-code/depth-copy'
    },
    {
      text: '获取通用类型',
      link: '/material/programming/source-code/get-generic-type'
    },
    {
      text: '是否朴素对象',
      link: '/material/programming/source-code/is-plain-object'
    }
  ],
  '/material/programming/business-scenarios': [
    {
      text: 'Promise 异步',
      items: [
        {
          "text": "保证 url 打印顺序并支持 retry",
          "link": "/material/programming/business-scenarios/promise-async/order-print-url-and-support-retry"
        },
        {
          "text": "异步串行",
          "link": "/material/programming/business-scenarios/promise-async/async-serial"
        },
        {
          "text": "实现 Promise 并发",
          "link": "/material/programming/business-scenarios/promise-async/implement-promise-concurrency"
        },
        {
          "text": "并发限制图片加载数量",
          "link": "/material/programming/business-scenarios/promise-async/limit-concurrency-images"
        },
        {
          "text": "并发调度器",
          "link": "/material/programming/business-scenarios/promise-async/concurrent-scheduler"
        },
        {
          "text": "实现 mergePromise",
          "link": "/material/programming/business-scenarios/promise-async/implement-merge-promise"
        },
        {
          "text": "使用 addRemote 实现 add",
          "link": "/material/programming/business-scenarios/promise-async/use-add_remote-to-implement-add"
        },
        {
          "text": "options 调用转换为 promise 调用",
          "link": "/material/programming/business-scenarios/promise-async/options-calls-to-promise-calls"
        },
        {
          "text": "Promise 缓存",
          "link": "/material/programming/business-scenarios/promise-async/promise-cache"
        },
        {
          "text": "循环打印红-黄-绿",
          "link": "/material/programming/business-scenarios/promise-async/cycle-printing-red-yellow-green"
        },
      ]
    },
    {
      text: '框架核心功能实现',
      items: [
        {
          "text": "EventBus",
          "link": "/material/programming/business-scenarios/framework-core/event-bus"
        },
        {
          "text": "实现极简 vue",
          "link": "/material/programming/business-scenarios/framework-core/implement-simple-vue"
        },
      ]
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
      "text": "随机数",
      "link": "/material/programming/business-scenarios/random-number"
    },
    {
      "text": "日期格式化",
      "link": "/material/programming/business-scenarios/date-format"
    },
    {
      "text": "解析 url 参数",
      "link": "/material/programming/business-scenarios/parse-url-query"
    },
    {
      "text": "千分位分隔数字字符串",
      "link": "/material/programming/business-scenarios/thousandth-separated-number-string"
    },
    {
      "text": "对象是否循环引用",
      "link": "/material/programming/business-scenarios/object-is-or-not-circular-reference"
    },
    {
      "text": "长列表虚拟滚动",
      "link": "/material/programming/business-scenarios/vitrual-scroll-list"
    },
    {
      "text": "lodash.get",
      "link": "/material/programming/business-scenarios/lodash-get"
    },
    {
      "text": "sku 算法实现",
      "link": "/material/programming/business-scenarios/sku"
    },
    {
      "text": "计算对象占用字节数",
      "link": "/material/programming/business-scenarios/calcuate-object-bytes"
    },
    {
      "text": "记忆化请求函数 - 可缓存请求函数",
      "link": "/material/programming/business-scenarios/memorize-request"
    },
    {
      "text": "倒计时",
      "link": "/material/programming/business-scenarios/countdown"
    },
    {
      "text": "实现前端路由",
      "link": "/material/programming/business-scenarios/frontend-route"
    },
    {
      "text": "内容中出现频率最高的字符",
      "link": "/material/programming/business-scenarios/most-frequent-characters-in-content"
    },
    {
      "text": "图片格式转换",
      "link": "/material/programming/business-scenarios/image-format-conversion"
    },
    {
      "text": "xhr hook 实现打印日志",
      "link": "/material/programming/business-scenarios/xhr-hook-to-log"
    },
    {
      "text": "整数分割",
      "link": "/material/programming/business-scenarios/split-number"
    },
    {
      "text": "富文本内容转换",
      "link": "/material/programming/business-scenarios/rich-text-content-conversion"
    }
  ],
  '/material/programming/type-challenges': [
    {
      "text": "No.10 元组转合集(联合类型)",
      "link": "/material/programming/type-challenges/medium-tuple-to-union"
    },
  ]
}

export const materialSidebar: DefaultTheme.Config['sidebar'] = {
  '/material/endorsement': [
    {
      text: '操作系统',
      items: [
        {
          text: '进程和线程',
          link: '/material/endorsement/os/processes-threads'
        }
      ]
    },
    {
      text: '浏览器和网络',
      items: [
        {
          text: 'TCP',
          link: '/material/endorsement/browser-network/protocol/tcp'
        },
        {
          text: 'HTTP',
          link: '/material/endorsement/browser-network/protocol/http'
        },
      ]
    },
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
        },
        {
          text: '事件循环',
          link: '/material/endorsement/js/event-loop'
        },
      ]
    },
    {
      text: 'React',
      items: [
        {
          text: 'react18',
          link: 'https://notes.fe-mm.com/analysis/react/18'
        },
        {
          text: 'fiber',
          link: '/material/endorsement/react/fiber.md'
        },
        {
          text: '过时的 API',
          link: 'https://zh-hans.react.dev/reference/react/legacy'
        },
      ]
    }
  ],
  ...materialEndorsementSidebar,
  ...materialProgrammingSidebar
}
