export default {
  common: {
    operation: 'Operation',
    selectAll: 'Select All',
    multipleSelection: 'Multiple Selection',
    name: 'Name',
    cversion: 'Current Version',
    lversion: 'Latest Version',
    updateButtonMsg: 'Currently, only server upgrades are supported',
    switchAction: 'On',
    switchInactive: 'Off',
    inputText: 'Please input',
    selectText: 'Please select',
    startTimeText: 'Start time',
    endTimeText: 'End time',
    changePassword: 'Change Password',
    submit: 'Submit',
    update: 'One click update',
    updatemsg: 'Discovering new versions',
    querysyntax: 'Query Syntax',
    newPassword: 'New Password',
    statusStop: 'Stop',
    login: 'Login',
    edit: 'Edit',
    version: 'System version information',
    delete: 'Delete',
    new: 'New',
    view: 'View',
    state: 'State',
    config: 'Config',
    on: 'On',
    off: 'Off',
    save: 'Save',
    true: 'true',
    false: 'false',
    required: 'This is required',
    loginOut: 'Login out',
    document: 'Document',
    reminder: 'Reminder',
    loginOutMessage: 'Exit the system?',
    back: 'Back',
    ok: 'OK',
    cancel: 'Cancel',
    reload: 'Reload current',
    closeTab: 'Close current',
    closeTheLeftTab: 'Close left',
    closeTheRightTab: 'Close right',
    closeOther: 'Close other',
    closeAll: 'Close all',
    prevLabel: 'Prev',
    nextLabel: 'Next',
    skipLabel: 'Jump',
    doneLabel: 'End',
    menu: 'Menu',
    menuDes: 'Menu bar rendered in routed structure',
    collapse: 'Collapse',
    collapseDes: 'Expand and zoom the menu bar',
    tagsView: 'Tags view',
    tagsViewDes: 'Used to record routing history',
    tool: 'Tool',
    toolDes: 'Used to set up custom systems',
    query: 'Query',
    reset: 'Reset',
    shrink: 'Put away',
    expand: 'Expand',
    delMessage: 'Delete the selected data?',
    delWarning: 'Warning',
    delOk: 'OK',
    delCancel: 'Cancel',
    delNoData: 'Please select the data to delete',
    delSuccess: 'Deleted successfully',
    refresh: 'Refresh',
    fullscreen: 'Fullscreen',
    size: 'Size',
    columnSetting: 'Column setting',
    lengthRange: 'The length should be between {min} and {max}',
    notSpace: 'Spaces are not allowed',
    notSpecialCharacters: 'Special characters are not allowed',
    isEqual: 'The two are not equal'
  },
  export: {
    exportType: 'Export Type',
    exportTypeAll: 'All data',
    exportTypeSearch: 'Current search criteria',
    exportQuantity: 'Export data volume',
    exportRecords: 'Export Records',
    fileName: 'File Name',
    createTime: 'Create Time',
    endTime: 'Complete Time',
    fileSize: 'File Size',
    state: 'State',
    run: 'running',
    success: 'Success',
    fail: 'Fail',
    type: 'Type',
    download: 'Download'
  },
  searchHelp: {
    notice: 'Keywords need to be wrapped in double quotes',
    operator: 'Operator',
    meaning: 'Meaning',
    equal: 'Exact matching means querying only keyword assets.',
    notIn: 'Eliminate means to eliminate assets containing keywords.',
    like: 'Match, indicating that the query contains keyword assets(Supports regular input).',
    brackets: 'The content in brackets has the highest priority',
    and: 'and conditions',
    or: 'or condition',
    keywords: 'Keywords',
    explain: 'Explain',
    example: 'Example',
    app: 'Retrieve specified component',
    body: 'Retrieve HTTP response body',
    header: 'Retrieve HTTP request header',
    project: 'Retrieve by project name',
    title: 'Detect website title',
    statuscode: 'Retrieve response code, fuzzy search is not supported',
    icon: 'Retrieve by website icon hash',
    ip: 'Retrieve IP',
    length: 'Retrieve Respone Length',
    port: 'Retrieve port',
    domain: 'Retrieve domain',
    protocol: 'Retrieve by service',
    banner: 'Retrieve banner of non-HTTP assets',
    subdomainType: 'Retrieve record type',
    subdomainValue: 'Retrieve record value',
    url: 'Retrieve URL',
    input: 'Retrieve input source',
    source: 'Retrieve URL source',
    urlType: 'Retrieve URL type',
    method: 'Retrieve Method',
    crawlerBody: 'Retrieve POST data',
    sname: 'Retrieve sensitive information name',
    sinfo: 'Retrieve sensitive information',
    redirect: 'Retrieve redirect link',
    vulname: 'Retrieve vulnerability name',
    matched: 'Retrieve matched content',
    vulRequest: 'Retrieve request content',
    response: 'Retrieve response content',
    hash: 'Retrieve response hash',
    diff: 'Retrieve diff content',
    level: 'Retrieve vuln level(info、high、medium、critical、low、unknown)',
    sensMd5: 'Retrieve based on response body MD5',
    sensLevel: 'Search by sensitivity level (red, green, cyan, yellow, orange, gray, pink)',
    taskName: 'Search by task name, only supports exact search.'
  },
  lock: {
    lockScreen: 'Lock screen',
    lock: 'Lock',
    lockPassword: 'Lock screen password',
    unlock: 'Click to unlock',
    backToLogin: 'Back to login',
    entrySystem: 'Entry the system',
    placeholder: 'Please enter the lock screen password',
    message: 'Lock screen password error'
  },
  error: {
    noPermission: `Sorry, you don't have permission to access this page.`,
    pageError: 'Sorry, the page you visited does not exist.',
    networkError: 'Sorry, the server reported an error.',
    returnToHome: 'Return to home'
  },
  setting: {
    projectSetting: 'Project setting',
    theme: 'Theme',
    layout: 'Layout',
    systemTheme: 'System theme',
    menuTheme: 'Menu theme',
    interfaceDisplay: 'Interface display',
    breadcrumb: 'Breadcrumb',
    breadcrumbIcon: 'Breadcrumb icon',
    collapseMenu: 'Collapse menu',
    hamburgerIcon: 'Hamburger icon',
    screenfullIcon: 'Screenfull icon',
    sizeIcon: 'Size icon',
    localeIcon: 'Locale icon',
    tagsView: 'Tags view',
    logo: 'Logo',
    greyMode: 'Grey mode',
    fixedHeader: 'Fixed header',
    headerTheme: 'Header theme',
    cutMenu: 'Cut Menu',
    copy: 'Copy',
    clearAndReset: 'Clear cache and reset',
    copySuccess: 'Copy success',
    copyFailed: 'Copy failed',
    footer: 'Footer',
    uniqueOpened: 'Unique opened',
    tagsViewIcon: 'Tags view icon',
    // 开启动态路由
    dynamicRouter: 'Enable dynamic router',
    serverDynamicRouter: 'Server dynamic router',
    reExperienced: 'Please exit the login experience again',
    fixedMenu: 'Fixed menu'
  },
  size: {
    default: 'Default',
    large: 'Large',
    small: 'Small'
  },
  login: {
    welcome: 'Welcome to the system',
    message: 'Backstage management system',
    username: 'Username',
    password: 'Password',
    register: 'Register',
    checkPassword: 'Confirm password',
    login: 'Sign in',
    otherLogin: 'Sign in with',
    remember: 'Remember me',
    hasUser: 'Existing account? Go to login',
    forgetPassword: 'Forget password',
    usernamePlaceholder: 'Please input username',
    passwordPlaceholder: 'Please input password',
    code: 'Verification code',
    codePlaceholder: 'Please input verification code'
  },
  router: {
    assetinfo: 'Asset Information',
    taskManagement: 'Task',
    scanTask: 'Scan Tasks',
    scheduledTask: 'Scheduled Tasks',
    nodeManagement: 'Node',
    projectDetail: 'Project Detail',
    vulFingerprint: 'Vul-Fingerprint',
    projectManagement: 'Project',
    pocManagement: 'POC',
    fingerprintManagement: 'Fingerprint',
    sensitiveInformationRules: 'Sensitive Information',
    dictionaryManagement: 'Dictionary',
    subdomainDictionary: 'Subdomain',
    subfinder: 'Subfinder',
    rad: 'Rad',
    system: 'System',
    dirDictionary: 'Dir Scan',
    portDictionary: 'Port',
    configuration: 'Configuration',
    login: 'Login',
    level: 'Multi level menu',
    menu: 'Menu',
    menu1: 'Menu1',
    menu11: 'Menu1-1',
    menu111: 'Menu1-1-1',
    menu12: 'Menu1-2',
    menu2: 'Menu2',
    dashboard: 'Dashboard',
    analysis: 'Analysis',
    workplace: 'Workplace',
    guide: 'Guide',
    component: 'Component',
    icon: 'Icon',
    echart: 'Echart',
    countTo: 'Count to',
    watermark: 'Watermark',
    qrcode: 'Qrcode',
    highlight: 'Highlight',
    infotip: 'Infotip',
    form: 'Form',
    defaultForm: 'All examples',
    search: 'Search',
    table: 'Table',
    defaultTable: 'Basic example',
    editor: 'Editor',
    richText: 'Rich text',
    jsonEditor: 'JSON Editor',
    dialog: 'Dialog',
    imageViewer: 'Image viewer',
    descriptions: 'Descriptions',
    example: 'Example',
    exampleDialog: 'Example dialog',
    examplePage: 'Example page',
    exampleAdd: 'Example page - add',
    exampleEdit: 'Example page - edit',
    exampleDetail: 'Example page - detail',
    errorPage: 'Error page',
    authorization: 'Authorization',
    user: 'User management',
    role: 'Role management',
    document: 'Document',
    inputPassword: 'InputPassword',
    sticky: 'Sticky',
    treeTable: 'Tree table',
    PicturePreview: 'Table Image Preview',
    department: 'Department management',
    menuManagement: 'Menu management',
    // 权限测试页面
    permission: 'Permission test page',
    function: 'Function',
    multipleTabs: 'Multiple tabs',
    details: 'Details',
    iconPicker: 'Icon picker',
    request: 'Request',
    waterfall: 'Waterfall',
    imageCropping: 'Image cropping',
    videoPlayer: 'Video player',
    // 表格视频预览
    tableVideoPreview: 'Table video preview',
    cardTable: 'Card table'
  },
  permission: {
    hasPermission: 'Please set the operation permission value'
  },
  dashboard: {
    totalAssets: 'Total assets',
    subDomain: 'Subdomain',
    informationLeakage: 'Information leakage',
    URL: 'URL',
    nodeInfo: 'Node Status Information',
    taskInfo: 'Task Information'
  },
  node: {
    nodeName: 'Node Name',
    nodeStatus: 'Node Status',
    taskCount: 'Task Count',
    finished: 'finished Count',
    statusRun: 'Running',
    statusStop: 'Stop',
    statusError: 'Not connect',
    nodeUsageStatus: 'Node usage status',
    nodeUsageCpu: 'CPU',
    nodeUsageMemory: 'Memory',
    nodeUsageLoad: 'Load',
    createTime: 'Create Time',
    updateTime: 'Update Time',
    log: 'Log',
    onlineNodeMsg: 'No scanning node is connected'
  },
  task: {
    taskName: 'Task Name',
    taskCount: 'Task Count',
    taskProgress: 'Task Progress',
    createTime: 'Create Time',
    typeTask: 'Task Type',
    endTime: 'End Time',
    addTask: 'Add Task',
    addURL: 'Add URL',
    delURL: 'Delete URL',
    retest: 'Retest',
    delTask: 'Delete Task',
    delAsset: 'Delete assets at the same time:',
    lastTime: 'Last Run',
    nextTime: 'Next Run',
    taskCycle: 'Task Cycle',
    msgTaskName: 'Please enter the task name',
    taskTarget: 'Target',
    subdomainTakeover: 'Subdomain Takeover',
    assetMapping: 'Asset Mapping',
    msgTarget: 'Please enter the domain name or IP, one per line.',
    subdomainScan: 'Subdomain Scan',
    nodeMsg: 'Please select a scanning node',
    nodeSelect: 'Node Selection',
    config: 'Config',
    url: 'URL',
    msgUrl: 'Get more page entries',
    sensitiveInfoScan: 'SensitiveInfo Scan',
    msgPageMonitoringAll: 'Monitoring all pages',
    msgPageMonitoringJs: 'Monitoring JS pages only',
    msgCrawler:
      'The crawler obtains get and post parameters. It is recommended to enable URL scanning to obtain more website entries.',
    vulScan: 'Vulnerability Scan',
    vulList: 'Vul List',
    save: 'Save',
    data: 'Data',
    duplicatesSubdomain: 'Subdomain Duplicates',
    duplicates: 'Duplicates',
    portScan: 'Port Scan',
    portSelect: 'Select Port',
    selectNodeMsg:
      'Only when a new node is registered by clicking All to select the node, the task will be automatically added to the new node, otherwise the task will only run in the currently selected node!',
    duplicatesMsg: 'Subdomain names that have been queried in history will be skipped.',
    waybackUrlMsg: 'Get URL from Wayback Machine.',
    addPageMonitTask: 'New Page Monitoring',
    duplicatesPort: 'Port Duplicates',
    duplicatesPortMsg: 'Scan only undiscovered ports',
    runNow: 'Run Now'
  },
  asset: {
    assetName: 'Asset',
    banner: 'Banner',
    products: 'Products',
    IP: 'IP',
    domain: 'Domain',
    port: 'Port',
    service: 'Service',
    title: 'Title',
    status: 'Status',
    time: 'time',
    total: 'Total',
    p: '',
    detail: 'Detail',
    assetDetail: 'Asset Detail',
    assetTotalNum: 'Total Assets',
    responseHeader: 'Response Header',
    responseBody: 'Response Body',
    historyDiff: 'Historical changes',
    export: 'Export'
  },
  subdomain: {
    subdomainName: 'Subdomain',
    recordType: 'Record Type',
    recordValue: 'Record Value'
  },
  URL: {
    URLName: 'URL',
    source: 'Source',
    type: 'Type',
    input: 'Input'
  },
  crawler: {
    crawlerName: 'Crawler',
    getParameter: 'Get Parameter',
    postParameter: 'Post Parameter'
  },
  sensitiveInformation: {
    sensitiveInformationName: 'Sensitive Information',
    sensitiveName: 'Name',
    sensitiveColor: 'Color',
    sensitiveRegular: 'Regular',
    sensitiveNameMsg: 'Please enter a rule name',
    sensitiveRegularMsg: 'Please enter a regular expression'
  },
  dirScan: {
    dirScanName: 'DirScan',
    title: 'Title',
    status: 'Status',
    length: 'Length'
  },
  vulnerability: {
    vulnerabilityName: 'Vulnerability'
  },
  PageMonitoring: {
    pageMonitoringName: 'Page Monitoring',
    oldResponseBody: 'Old ResponseBody',
    currentResponseBody: 'Current ResponseBody'
  },
  project: {
    addProject: 'Add Project',
    totalAssets: 'Total Assets',
    projectName: 'Project Name',
    msgProject: 'Please enter the project name',
    projectScope: 'Project Scope',
    msgProjectScope: 'Enter the root domain name of the project, one per line.',
    msgScheduledTasks: 'Scheduled scanning',
    scheduledTasks: 'Scheduled Tasks',
    cycle: 'Monitoring Cycle',
    projectDetail: 'Project Detail',
    CreatTime: 'Creat Time',
    msgProjectTag: 'Please enter the project TAG'
  },
  poc: {
    pocName: 'POC Name',
    content: 'POC Content',
    level: 'Risk Level',
    critical: 'Critical',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    info: 'Info',
    unknown: 'Unknown',
    nameMsg:
      'Please enter the POC name. The POC name and the name in the POC content should be consistent.',
    contentMsg: 'Please enter poc content'
  },
  configuration: {
    subfinder: 'subfinder configuration',
    rad: 'rad configuration',
    system: 'system configuration',
    timezone: 'Timezone',
    maxTaskNum: 'Max Task Num',
    dirScanThread: 'DirScan Thread Num',
    portScanThread: 'PortScan Thread Num',
    crawlerThread: 'Crawlers Thread Num',
    urlThread: 'URL Scan Thread Num',
    maxUrlNum: 'Max URL Num',
    noticeConfig: 'Notification Configuration',
    newWebhookConfig: 'New configuration',
    threadMsg: 'Please configure the number of concurrencies according to the system memory',
    noticeHelp:
      '*msg* is the message parameter position. eg\\:http://example.com?msg=*mes* or POST "msg":"*msg*"',
    duplicationconfiguration: 'Deduplication Configuration',
    deduplicationHour: 'Deduplication cycle',
    deduplicationFlag: 'Deduplication switch',
    runNowOne: 'Run once immediately'
  },
  form: {
    input: 'Search:'
  },
  portDict: {
    name: 'Name',
    value: 'Value',
    nameMsg: 'Please enter name',
    valueMsg: 'Please enter value'
  },
  fingerprint: {
    name: 'Name',
    rule: 'Rule',
    category: 'Category',
    nameMsg: 'Please enter fingerprint name',
    ruleMsg: 'Please enter rule content',
    parentCategory: 'Parent Category',
    amount: 'Asset Quantity'
  },
  workplace: {
    goodMorning: 'Good morning',
    happyDay: 'Wish you happy every day!',
    toady: `It's sunny today`,
    project: 'Project',
    access: 'Project access',
    toDo: 'To do',
    introduction: 'A serious introduction',
    more: 'More',
    shortcutOperation: 'Shortcut operation',
    operation: 'Operation',
    index: 'Index',
    personal: 'Personal',
    team: 'Team',
    quote: 'Quote',
    contribution: 'Contribution',
    hot: 'Hot',
    yield: 'Yield',
    dynamic: 'Dynamic',
    push: 'push',
    pushCode: 'Archer push code to Github',
    follow: 'Follow'
  },
  formDemo: {
    input: 'Input',
    inputNumber: 'InputNumber',
    default: 'Default',
    icon: 'Icon',
    mixed: 'Mixed',
    password: 'Password',
    textarea: 'Textarea',
    remoteSearch: 'Remote search',
    slot: 'Slot',
    position: 'Position',
    autocomplete: 'Autocomplete',
    select: 'Select',
    optionSlot: 'Option Slot',
    selectGroup: 'Select Group',
    selectV2: 'SelectV2',
    cascader: 'Cascader',
    switch: 'Switch',
    rate: 'Rate',
    colorPicker: 'Color Picker',
    transfer: 'Transfer',
    render: 'Render',
    radio: 'Radio',
    radioGroup: 'Radio Group',
    button: 'Button',
    checkbox: 'Checkbox',
    checkboxButton: 'Checkbox Button',
    checkboxGroup: 'Checkbox Group',
    slider: 'Slider',
    datePicker: 'Date Picker',
    shortcuts: 'Shortcuts',
    today: 'Today',
    yesterday: 'Yesterday',
    aWeekAgo: 'A week ago',
    week: 'Week',
    year: 'Year',
    month: 'Month',
    dates: 'Dates',
    daterange: 'Date Range',
    monthrange: 'Month Range',
    dateTimePicker: 'DateTimePicker',
    dateTimerange: 'Datetime Range',
    timePicker: 'Time Picker',
    timeSelect: 'Time Select',
    inputPassword: 'input Password',
    passwordStrength: 'Password Strength',
    defaultForm: 'All examples',
    formDes:
      'The secondary encapsulation of form components based on ElementPlus realizes data-driven and supports all Form parameters',
    example: 'example',
    operate: 'operate',
    change: 'Change',
    restore: 'Restore',
    disabled: 'Disabled',
    disablement: 'Disablement',
    delete: 'Delete',
    add: 'Add',
    setValue: 'Set value',
    resetValue: 'Reset value',
    set: 'Set',
    subitem: 'Subitem',
    formValidation: 'Form validation',
    verifyReset: 'Verify reset',
    // 富文本编辑器
    richText: 'Rich text',
    jsonEditor: 'JSON Editor',
    form: 'Form',
    // 远程加载
    remoteLoading: 'Remote loading',
    // 聚焦
    focus: 'Focus',
    treeSelect: 'Tree Select',
    showCheckbox: 'Show Checkbox',
    selectAnyLevel: 'Select Any Level',
    multiple: 'Multiple',
    filterable: 'Filterable',
    // 自定义节点内容
    customContent: 'Custom content',
    // 懒加载
    lazyLoad: 'Lazy load',
    upload: 'Upload',
    // 用户头像
    userAvatar: 'User avatar',
    iconPicker: 'Icon picker'
  },
  guideDemo: {
    guide: 'Guide',
    start: 'Start',
    message:
      'The guide page is very useful for some people who enter the project for the first time. You can briefly introduce the functions of the project. The boot page is based on driver.js'
  },
  iconDemo: {
    icon: 'Icon',
    localIcon: 'Local Icon',
    iconify: 'Iconify component',
    recommendedUse: 'Recommended use',
    recommendeDes:
      'Iconify component basically contains all icons. You can query any icon you want. And packaging will only package the icons used.',
    accessAddress: 'Access address'
  },
  echartDemo: {
    echart: 'Echart',
    echartDes:
      'Based on the secondary packaging components of eckarts, the width is adaptive. The corresponding chart can be displayed by passing in the options and height attributes.'
  },
  countToDemo: {
    countTo: 'CountTo',
    countToDes:
      'The transformation is based on vue-count-to and supports all vue-count-to parameters.',
    suffix: 'Suffix',
    prefix: 'Prefix',
    separator: 'Separator',
    duration: 'Duration',
    endVal: 'End val',
    startVal: 'Start val',
    start: 'Start',
    pause: 'Pause',
    resume: 'Resume'
  },
  watermarkDemo: {
    watermark: 'Watermark',
    createdWatermark: 'Created watermark',
    clearWatermark: 'Clear watermark',
    resetWatermark: 'Reset watermark'
  },
  qrcodeDemo: {
    qrcode: 'Qrcode',
    qrcodeDes: 'Secondary packaging based on qrcode',
    basicUsage: 'Basic usage',
    imgTag: 'Img tag',
    style: 'Style config',
    click: 'Click event',
    asynchronousContent: 'Asynchronous content',
    invalid: 'Invalid',
    logoConfig: 'Logo config',
    logoStyle: 'Logo style',
    size: 'size config'
  },
  highlightDemo: {
    highlight: 'Highlight',
    message: 'The best time to plant a tree is ten years ago, followed by now.',
    keys1: 'ten years ago',
    keys2: 'now'
  },
  infotipDemo: {
    infotip: 'Infotip',
    infotipDes: 'Secondary packaging of components based on Highlight',
    title: 'matters needing attention'
  },
  levelDemo: {
    menu: 'Multi level menu cache'
  },
  searchDemo: {
    search: 'Search',
    searchDes:
      'Based on the secondary encapsulation of form components, the functions of query and reset are realized',
    operate: 'operate',
    change: 'Change',
    grid: 'grid',
    button: 'Button',
    restore: 'Restore',
    inline: 'inline',
    bottom: 'Bottom',
    position: 'position',
    left: 'left',
    center: 'center',
    right: 'right',
    dynamicOptions: 'Dynamic options',
    // 删除单选框
    deleteRadio: 'Delete radio',
    // 还原单选框
    restoreRadio: 'Restore radio',
    loading: 'Loading',
    reset: 'Reset'
  },
  stickyDemo: {
    sticky: 'Sticky'
  },
  tableDemo: {
    table: 'Table',
    tableDes: 'Secondary packaging of Table components based on ElementPlus',
    index: 'Index',
    title: 'Title',
    author: 'Author',
    displayTime: 'Display time',
    importance: 'Importance',
    pageviews: 'Pageviews',
    action: 'Action',
    important: 'Important',
    good: 'Good',
    commonly: 'Commonly',
    operate: 'operate',
    example: 'example',
    show: 'Show',
    hidden: 'Hidden',
    pagination: 'pagination',
    reserveIndex: 'Reserve index',
    restoreIndex: 'Restore index',
    showSelections: 'Show selections',
    hiddenSelections: 'Restore selections',
    showExpandedRows: 'Show expanded rows',
    hiddenExpandedRows: 'Hidden expanded rows',
    changeTitle: 'Change title',
    header: 'Header',
    selectAllNone: 'Select all / none',
    delOrAddAction: 'Delete or add action',
    showOrHiddenStripe: 'Show or hidden stripe',
    showOrHiddenBorder: 'Show or hidden border',
    fixedHeaderOrAuto: 'Fixed header or auto',
    getSelections: 'Get selections',
    preview: 'Preview',
    showOrHiddenSortable: 'Show or hidden sortable',
    videoPreview: 'Video preview',
    cardTable: 'Card table'
  }
}
