# Setting Up the Project
Instead of running npm react start, use ```npm create vite@latest ./ -- --template react```.
## Dependencies Installation
- Tailwind CSS: ```npm install -D tailwindcss``` and ```npx tailwindcss init```
- Other dependencies: ```npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-time line-component @emailjs/browser framer-motion react-router-dom```

There might be a bug where Tailwind does not apply due to Vite. So, use: ```npm install -D tailwindcss postcss autoprefixer``` and ```npx tailwindcss init -p```.