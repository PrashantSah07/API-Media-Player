import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows access from other devices
    port: 5173, // Default Vite port
  },
})
