import timeManagerAssistantWidgets from '../assets/projects/time-manager/assistant-widgets.jpg'
import timeManagerAssistant from '../assets/projects/time-manager/assistant.jpg'
import timeManagerCalendar from '../assets/projects/time-manager/calendar.jpg'
import timeManagerSettings from '../assets/projects/time-manager/settings-redacted.jpg'
import timeManagerStats from '../assets/projects/time-manager/stats.jpg'
import timeManagerTasks from '../assets/projects/time-manager/tasks.jpg'
import timeManagerTracking from '../assets/projects/time-manager/tracking.jpg'
import printingAdmin from '../assets/projects/remote-printing/admin-redacted.jpg'
import printingOrders from '../assets/projects/remote-printing/orders.jpg'
import printingSubmit from '../assets/projects/remote-printing/submit-print.jpg'
import pomodoroAppearance from '../assets/projects/pomodoro/appearance.jpg'
import pomodoroFocus from '../assets/projects/pomodoro/focus.jpg'
import pomodoroLongBreak from '../assets/projects/pomodoro/long-break.jpg'
import pomodoroSettings from '../assets/projects/pomodoro/settings.jpg'
import pomodoroShortBreak from '../assets/projects/pomodoro/short-break.jpg'

export type ProjectStatusTone = 'live' | 'paused' | 'workflow' | 'desktop'
export type ProjectImageFrame = 'desktop' | 'phone' | 'app-window'
export type GalleryCoverLayout = 'desktop-stack' | 'device-stack' | 'app-stack'

export interface ProjectImage {
  src: string
  alt: string
  caption: string
  frame: ProjectImageFrame
}

export interface GalleryVisual {
  kind: 'gallery'
  coverLayout: GalleryCoverLayout
  images: ProjectImage[]
  featured: number[]
}

export interface WorkflowStage {
  index: string
  label: string
  title: string
  items: string[]
}

export interface WorkflowVisual {
  kind: 'workflow'
  stages: WorkflowStage[]
  fileTree: string[]
  artifacts: string[]
}

export type ProjectVisual = GalleryVisual | WorkflowVisual

export interface ProjectDetail {
  label: 'Why' | 'Build' | 'Challenge' | 'Future'
  title: string
  text: string
}

export interface Project {
  number: string
  slug: string
  eyebrow: string
  title: string
  summary: string
  status: string
  statusTone: ProjectStatusTone
  technologies: string[]
  githubUrl?: string
  visual?: ProjectVisual
  details: ProjectDetail[]
}

export interface SkillGroup {
  id: 'ai' | 'programming' | 'tools'
  eyebrow: string
  title: string
  description: string
  items: string[]
}

export interface LabLog {
  index: string
  title: string
  subtitle: string
  description: string
  practices: string[]
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  tags: string[]
  current?: boolean
}

export const profile = {
  name: 'yisan',
  chineseName: '王奕',
  email: 'kkwsswangyi@gmail.com',
  github: 'https://github.com/yi-san-spce',
  website: 'https://yi-san-spce.github.io',
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai',
    eyebrow: '01 / Intelligence',
    title: 'AI Development',
    description: '借助大语言模型完成需求分析、任务拆解与智能应用开发，让 AI 成为真实工作流的一部分。',
    items: ['LLM Application', 'Prompt Engineering', 'AI Workflow Design', 'AI Agent Exploration', 'API Integration'],
  },
  {
    id: 'programming',
    eyebrow: '02 / Foundation',
    title: 'Programming',
    description: '在项目实践中建立软件开发基础，从界面交互、业务逻辑到本地数据持久化持续深入。',
    items: ['Python', 'C Language', 'TypeScript', 'JavaScript', 'HTML / CSS'],
  },
  {
    id: 'tools',
    eyebrow: '03 / Workflow',
    title: 'Development Tools',
    description: '组合不同 AI 与工程工具，加速从模糊想法、原型验证到可运行产品的迭代过程。',
    items: ['ChatGPT', 'Claude', 'Cursor', 'Trae', 'VS Code', 'GitHub', 'Git'],
  },
]

export const projects: Project[] = [
  {
    number: '01',
    slug: 'ai-time-manager',
    eyebrow: 'Featured Build',
    title: 'AI Time Manager',
    summary: '一款隐私优先的 Windows 桌面时间管理工具，把日程规划、任务专注、真实时间追踪与 AI 复盘连接成完整闭环。',
    status: 'Active Development',
    statusTone: 'live',
    technologies: ['Electron', 'React', 'TypeScript', 'SQLite', 'OpenAI / Claude'],
    githubUrl: 'https://github.com/yi-san-spce/time-manager',
    visual: {
      kind: 'gallery',
      coverLayout: 'desktop-stack',
      featured: [2, 3, 4, 5],
      images: [
        {
          src: timeManagerCalendar,
          alt: 'AI Time Manager 周日程界面',
          caption: 'Calendar · 以周视图规划学习日程',
          frame: 'desktop',
        },
        {
          src: timeManagerAssistantWidgets,
          alt: 'AI Time Manager 即时专注与 AI 助手悬浮窗口',
          caption: 'Floating widgets · 在桌面保持任务与 AI 助手随时可用',
          frame: 'app-window',
        },
        {
          src: timeManagerAssistant,
          alt: 'AI Time Manager AI 助手执行日程和任务规划',
          caption: 'AI Assistant · 从自然语言生成日程与子任务',
          frame: 'desktop',
        },
        {
          src: timeManagerTracking,
          alt: 'AI Time Manager 今日追踪时间线',
          caption: 'Activity tracking · 以横向时间线还原真实投入',
          frame: 'desktop',
        },
        {
          src: timeManagerStats,
          alt: 'AI Time Manager 时间统计与应用使用分析',
          caption: 'Statistics · 查看分类、应用与窗口使用分布',
          frame: 'desktop',
        },
        {
          src: timeManagerTasks,
          alt: 'AI Time Manager 任务列表与专注入口',
          caption: 'Tasks · 将任务拆解、优先级与专注计时连接起来',
          frame: 'desktop',
        },
        {
          src: timeManagerSettings,
          alt: 'AI Time Manager 分类与 AI Provider 设置页面，服务端点已脱敏',
          caption: 'Settings · 本地配置分类与 AI Provider（敏感字段已脱敏）',
          frame: 'desktop',
        },
      ],
    },
    details: [
      {
        label: 'Why',
        title: '连接计划与真实投入',
        text: '很多工具只能做计划或统计。我希望把任务拆解、番茄专注、活动追踪和复盘放进同一条链路，看见计划与现实之间的差距。',
      },
      {
        label: 'Build',
        title: '本地优先的桌面架构',
        text: '使用 React 构建界面，Electron 主进程承载提醒、追踪与 AI 服务，通过类型化 IPC 连接 SQLite 数据层，并适配 OpenAI 与 Claude。',
      },
      {
        label: 'Challenge',
        title: '可靠追踪与跨窗口一致性',
        text: '需要在窗口切换、锁屏与应用退出等边界中正确结算时间，同时让任务、日程与悬浮窗保持同步，并限制外部链接权限。',
      },
      {
        label: 'Future',
        title: '从工具走向个人工作系统',
        text: '继续提升 AI 复盘质量与报告体验，完善发行签名，并探索更丰富的自动化建议和跨平台支持。',
      },
    ],
  },
  {
    number: '02',
    slug: 'remote-printing',
    eyebrow: 'Campus Product',
    title: 'Remote Self-service Printing',
    summary: '面向校园打印场景设计的微信小程序 MVP，让用户能够远程提交文件与打印需求，减少线下排队和重复沟通。',
    status: 'MVP · Backend Paused',
    statusTone: 'paused',
    technologies: ['WeChat Mini Program', 'JavaScript', 'Supabase', 'Product Design'],
    visual: {
      kind: 'gallery',
      coverLayout: 'device-stack',
      featured: [0, 1, 2],
      images: [
        {
          src: printingSubmit,
          alt: '校园自助打印小程序文件选择与打印设置页面',
          caption: 'Submit · 上传文件并设置份数、页码与单双面参数',
          frame: 'phone',
        },
        {
          src: printingOrders,
          alt: '校园自助打印小程序我的订单页面',
          caption: 'Orders · 按状态查看打印任务与处理进度',
          frame: 'phone',
        },
        {
          src: printingAdmin,
          alt: '校园自助打印小程序管理后台订单处理页面，地点已脱敏',
          caption: 'Admin · 审核、打印、拒绝与改派订单（地点已脱敏）',
          frame: 'phone',
        },
      ],
    },
    details: [
      {
        label: 'Why',
        title: '从真实校园摩擦出发',
        text: '校园打印常伴随排队、文件传递和参数确认。这个项目尝试把提交需求的过程移动到线上，验证更顺畅的自助打印体验。',
      },
      {
        label: 'Build',
        title: '原生小程序与云端数据',
        text: '使用原生微信小程序技术构建交互，以 JavaScript 云函数组织业务逻辑，并将数据与文件存储接入 Supabase。',
      },
      {
        label: 'Challenge',
        title: '重新选择可用的数据服务',
        text: '最初反复排查腾讯云数据库接口，后来确认免费资源并不包含所需能力，于是调整方案迁移到 Supabase，完成数据链路验证。',
      },
      {
        label: 'Future',
        title: '先验证闭环，再设计变现',
        text: '当前 Supabase 服务暂停。下一步是恢复稳定后端、继续验证校园真实需求，再基于使用反馈探索可持续的服务与商业模式。',
      },
    ],
  },
  {
    number: '03',
    slug: 'ai-course-design',
    eyebrow: 'AI Workflow',
    title: 'AI Course Design Workflow',
    summary: '一套面向程序设计学习的可复用 Vibe Coding 流程，用 AI 协同完成需求拆解、模块化 C 代码、标准图表与课程报告。',
    status: 'Open Source Workflow',
    statusTone: 'workflow',
    technologies: ['LLM', 'Prompt Engineering', 'C', 'Python', 'python-docx', 'matplotlib'],
    githubUrl: 'https://github.com/yi-san-spce/data-structure-course-design',
    visual: {
      kind: 'workflow',
      stages: [
        {
          index: '01',
          label: 'INPUT',
          title: 'Course Context',
          items: ['实验指导书', '报告模板', '待填草稿'],
        },
        {
          index: '02',
          label: 'ORCHESTRATE',
          title: 'AI Workflow',
          items: ['Claude Code Skill', '任务拆解', '质量检查'],
        },
        {
          index: '03',
          label: 'DELIVER',
          title: 'Verified Output',
          items: ['模块化 C 工程', '标准程序设计图', 'DOCX 报告'],
        },
      ],
      fileTree: [
        'course-design-report/SKILL.md',
        'scripts/figure_lib.py',
        'scripts/docx_helpers.py',
        'example-shared-bike/源代码/',
      ],
      artifacts: ['Hash Table · O(1)', 'Doubly Linked List', 'Quick Sort · O(n log n)'],
    },
    details: [
      {
        label: 'Why',
        title: '设计学习流程，而非只生成代码',
        text: '目标不是让 AI 直接交付答案，而是把指导书、报告模板和草稿转化为一条可检查、可复用的协作流程。',
      },
      {
        label: 'Build',
        title: '从三件套输入到完整交付',
        text: '通过提示与脚本就地改写 DOCX、生成标准流程图，并产出可编译的模块化 C 工程；共享单车调度系统是这套流程的完整实例。',
      },
      {
        label: 'Challenge',
        title: '让多种输出保持一致',
        text: '代码、运行结果、数据结构图和报告必须相互对应，同时保留模板样式，并确保 C 工程通过严格编译检查。',
      },
      {
        label: 'Future',
        title: '扩展为通用学习工作流',
        text: '继续抽象输入规范与质量检查，让流程适配更多课程题目，并加入更明确的人工审阅节点和结果验证。',
      },
    ],
  },
  {
    number: '04',
    slug: 'pomodoro-timer',
    eyebrow: 'Desktop Utility',
    title: 'Pomodoro Timer',
    summary: '基于番茄工作法打造的桌面专注工具，以清晰的状态切换、个性化设置和轻量桌面体验帮助建立专注节奏。',
    status: 'Desktop App · v2.0',
    statusTone: 'desktop',
    technologies: ['Electron', 'JavaScript', 'HTML / CSS', 'electron-store'],
    githubUrl: 'https://github.com/yi-san-spce/pomodoro-timer',
    visual: {
      kind: 'gallery',
      coverLayout: 'app-stack',
      featured: [0, 3, 4],
      images: [
        {
          src: pomodoroFocus,
          alt: 'Pomodoro Timer 专注计时主界面',
          caption: 'Focus · 25 分钟专注计时与完成记录',
          frame: 'app-window',
        },
        {
          src: pomodoroShortBreak,
          alt: 'Pomodoro Timer 短休计时界面',
          caption: 'Short break · 在专注周期之间自动进入短休息',
          frame: 'app-window',
        },
        {
          src: pomodoroLongBreak,
          alt: 'Pomodoro Timer 长休计时界面',
          caption: 'Long break · 完成多个番茄后进入长休息',
          frame: 'app-window',
        },
        {
          src: pomodoroAppearance,
          alt: 'Pomodoro Timer 外观自定义页面',
          caption: 'Appearance · 调整主题、颜色、透明度与背景',
          frame: 'app-window',
        },
        {
          src: pomodoroSettings,
          alt: 'Pomodoro Timer 名言设置页面',
          caption: 'Settings · 配置轮换策略与自定义名言',
          frame: 'app-window',
        },
      ],
    },
    details: [
      {
        label: 'Why',
        title: '把方法变成顺手的日常工具',
        text: '番茄工作法结构简单，但真正坚持需要低干扰、随时可用的桌面体验，因此我把计时、提醒与个性化整合进独立应用。',
      },
      {
        label: 'Build',
        title: '明确的计时状态机',
        text: '使用 Electron 与原生 JavaScript 拆分计时、声音、通知、设置和主题模块，实现工作、短休息与长休息的自动循环。',
      },
      {
        label: 'Challenge',
        title: '处理连续计时状态',
        text: '需要正确处理暂停、跳过、自动开始、长休息间隔和托盘控制，让界面状态与桌面行为在不同操作路径中保持一致。',
      },
      {
        label: 'Future',
        title: '加入更有价值的专注反馈',
        text: '计划扩展任务关联与专注统计，让每一次计时不仅完成倒数，也能沉淀为可回顾的效率记录。',
      },
    ],
  },
]

export const labLogs: LabLog[] = [
  {
    index: 'LOG 01',
    title: 'Vibe Coding Practice',
    subtitle: 'From intent to working software',
    description: '探索如何把模糊想法转化为清晰任务，并在 AI 协作中持续验证、迭代与收敛。',
    practices: ['需求分析', '任务拆解', '代码生成', '功能迭代'],
  },
  {
    index: 'LOG 02',
    title: 'Prompt Engineering',
    subtitle: 'Structure changes the output',
    description: '记录上下文组织、约束表达与输出检查方法，让模型结果从“可用”走向“可靠”。',
    practices: ['Prompt 设计', '上下文管理', '输出优化', '结果验证'],
  },
  {
    index: 'LOG 03',
    title: 'AI Product Thinking',
    subtitle: 'Technology needs a real problem',
    description: '从校园打印、时间管理等具体场景出发，练习用 MVP 验证需求而不是堆叠功能。',
    practices: ['用户需求', 'MVP 设计', '产品迭代', '商业探索'],
  },
]

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'Started Programming',
    description: '从 Python 与 C 语言基础开始，建立编程思维并完成最初的练习项目。',
    tags: ['Python', 'C Language', 'Foundation'],
  },
  {
    year: '2026',
    title: 'Exploring AI Development',
    description: '把 AI 加入真实开发流程，独立构建桌面应用、课程工作流与校园产品 MVP。',
    tags: ['AI Application', 'Independent Projects', 'Vibe Coding'],
    current: true,
  },
  {
    year: 'Future',
    title: 'Build Deeper, Ship Further',
    description: '继续深入 AI Agent、软件工程与产品化能力，让原型成长为真正可持续的产品。',
    tags: ['AI Agent', 'Software Engineering', 'Productization'],
  },
]
