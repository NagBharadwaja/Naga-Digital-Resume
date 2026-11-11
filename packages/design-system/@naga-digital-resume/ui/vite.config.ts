import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: 'index.ts',
            formats: ['es'],
            fileName: 'index',
            cssFileName: 'styles'
        },
        rolldownOptions: {
            external: ['react', 'react/jsx-runtime']
        }
    }
});