import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 这里用于按需导入样式组件
    createStyleImportPlugin({
      resolves: [AntdResolve()]
   })
  ],
  resolve:{
    alias:{
      // 这里用于将来配置别名
    }
  },
  server:{
    host:'0.0.0.0',
    proxy:{
      // 这里用于将来配置代理
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 更改主题在这里
          'primary-color': '#52c41a',
          //'primary-color': 'red',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  }
})
