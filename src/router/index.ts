import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
import { NO_RESET_WHITE_LIST } from '@/constants'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'RedirectParent',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    name: 'DashboardParent',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Dashboard/Analysis.vue'),
        name: 'Dashboard',
        meta: {
          title: t('router.dashboard'),
          icon: 'ant-design:dashboard-filled',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/asset-information',
    component: Layout,
    name: 'AssetInformationParent',
    redirect: '/asset-information/index',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Asset/Asset.vue'),
        name: 'AssetInformation',
        meta: {
          title: t('router.assetinfo'),
          icon: 'carbon:view',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/task-management',
    component: Layout,
    name: 'TaskManagement',
    meta: {
      title: t('router.taskManagement'),
      icon: 'bi:list-task'
    },
    children: [
      {
        path: 'ScanTask',
        component: () => import('@/views/Task/Task.vue'),
        name: 'ScanTask',
        meta: {
          title: t('router.scanTask'),
          icon: 'emojione:eye',
          noCache: true
        }
      },
      {
        path: 'ScheduledTask',
        component: () => import('@/views/Task/ScheduledTask.vue'),
        name: 'ScheduledTask',
        meta: {
          title: t('router.scheduledTask'),
          icon: 'mdi:invoice-scheduled-outline',
          noCache: true
        }
      },
      {
        path: 'ScanTemplate',
        component: () => import('@/views/Task/ScanTemplate.vue'),
        name: 'ScanTemplate',
        meta: {
          title: t('router.scanTemplate'),
          icon: 'icon-park:page-template',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/plugin-management',
    component: Layout,
    name: 'PluginManagementParent',
    redirect: '/plugin-management/index',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Plugins/plugin.vue'),
        name: 'PluginManagement',
        meta: {
          title: t('router.pluginsManager'),
          icon: 'mingcute:plugin-2-fill',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/node-management',
    component: Layout,
    name: 'NodeManagementParent',
    redirect: '/node-management/index',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Node/Node.vue'),
        name: 'NodeManagement',
        meta: {
          title: t('router.nodeManagement'),
          icon: 'material-symbols:network-node',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/project-management',
    component: Layout,
    name: 'ProjectManagementParent',
    redirect: '/project-management/index',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Project/Project.vue'),
        name: 'ProjectManagement',
        meta: {
          title: t('router.projectManagement'),
          icon: 'eos-icons:project-outlined',
          noCache: true
        }
      },
      {
        path: 'project-detail',
        component: () => import('@/views/Project/detail/ProjectDetail.vue'),
        name: 'ProjectDetail',
        meta: {
          title: t('asset.assetDetail'),
          noTagsView: true,
          noCache: true,
          hidden: true,
          canTo: true,
          activeMenu: '/project-management'
        }
      }
    ]
  },
  {
    path: '/poc-management',
    component: Layout,
    name: 'POCManagementParent',
    redirect: '/poc-management/index',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Poc/Poc.vue'),
        name: 'POCManagement',
        meta: {
          title: t('router.pocManagement'),
          icon: 'ant-design:bug-filled',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/fingerprint-management',
    component: Layout,
    name: 'FingerprintManagementParent',
    redirect: '/fingerprint-management/index',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Fingerprint/Fingerprint.vue'),
        name: 'FingerprintManagement',
        meta: {
          title: t('router.fingerprintManagement'),
          icon: 'material-symbols:fingerprint',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/sensitive-information-rules',
    component: Layout,
    name: 'SensitiveinformationRulesParent',
    redirect: '/sensitive-information-rules/index',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Sensitive/Sensitive.vue'),
        name: 'SensitiveinformationRules',
        meta: {
          title: t('router.sensitiveInformationRules'),
          icon: 'carbon:deploy-rules',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/dictionary-management',
    component: Layout,
    name: 'DictionaryManagementParent',
    meta: {
      title: t('router.dictionaryManagement'),
      icon: 'material-symbols:dictionary'
    },
    children: [
      {
        path: 'manage',
        component: () => import('@/views/DictionaryManagement/manage.vue'),
        name: 'DictionaryManagement',
        meta: {
          title: t('router.dictionaryManagement'),
          icon: 'arcticons:dictionaryformids',
          noCache: true
        }
      },
      // {
      //   path: 'subdomain',
      //   component: () => import('@/views/DictionaryManagement/SubdomainDictionary.vue'),
      //   name: 'Subdomain management',
      //   meta: {
      //     title: t('router.subdomainDictionary'),
      //     icon: 'iconoir:dns',
      //     noCache: true
      //   }
      // },
      // {
      //   path: 'dir',
      //   component: () => import('@/views/DictionaryManagement/DirDictionary.vue'),
      //   name: 'Dir management',
      //   meta: {
      //     title: t('router.dirDictionary'),
      //     icon: 'octicon:file-directory-24',
      //     noCache: true
      //   }
      // },
      {
        path: 'port',
        component: () => import('@/views/DictionaryManagement/PortDictionary.vue'),
        name: 'PortDictionary management',
        meta: {
          title: t('router.portDictionary'),
          icon: 'jam:beatport',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/configuration',
    component: Layout,
    name: 'ConfigurationParent',
    meta: {
      title: t('router.configuration'),
      icon: 'tdesign:system-setting'
    },
    children: [
      {
        path: 'system',
        component: () => import('@/views/Configuration/system.vue'),
        name: 'SystemConfiguration',
        meta: {
          title: t('router.system'),
          icon: 'uil:setting',
          noCache: true
        }
      },
      {
        path: 'subfinder',
        component: () => import('@/views/Configuration/Subfinder.vue'),
        name: 'SubfinderConfiguration',
        meta: {
          title: t('router.subfinder'),
          icon: 'ri:tools-line',
          noCache: true
        }
      },
      {
        path: 'rad',
        component: () => import('@/views/Configuration/rad.vue'),
        name: 'RadConfiguration',
        meta: {
          title: t('router.rad'),
          icon: 'game-icons:web-spit',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    name: 'AboutParent',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/about.vue'),
        name: 'About',
        meta: {
          title: 'About',
          icon: 'carbon:deploy-rules',
          noCache: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !NO_RESET_WHITE_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
