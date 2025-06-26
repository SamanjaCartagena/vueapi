import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';

export default defineConfig(({mode})=>{
  dotenv.config();
  const env = loadEnv(mode, process.cwd());

  return{
    plugins: [vue()],
    build:{
       outDir:"./wwwroot/app/", sourcemap:true
    },
  server: {
    
    proxy: {
      "^/api": {
        
        changeOrigin: true,
        secure: false,
        withCredentials: true,
        rewrite: (path) => path.replace(/^\/api/, ``),
      },
      
      
       
      
     
    },
     port:3080
  },
}
})