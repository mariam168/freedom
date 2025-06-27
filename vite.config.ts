import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <-- يستخدم الحزمة الصحيحة

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})