import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps } from '@adonisjs/inertia/types'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    message: (ctx) => ctx.session?.flashMessages.get('message') ?? {},
    isAuth: (ctx) => ctx.auth?.isAuthenticated,
  },
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}
