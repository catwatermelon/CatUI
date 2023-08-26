import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import MeowUI from 'meow-ui-vite';
import 'meow-ui-vite/style';
import './style/var.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        useComponents(ctx.app)
        ctx.app.use(MeowUI);
    }
}