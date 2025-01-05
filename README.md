# Interactive Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring smooth animations, 3D elements, and responsive design.

## Features

- Smooth scrolling navigation
- Dynamic cursor-driven interactions
- Animated profile section with rotating elements
- 3D background effects using Three.js
- Responsive design for all devices
- Modern UI with glassmorphism effects

## Technologies Used

- Next.js 13+ (App Router)
- React 18
- TypeScript
- Three.js / React Three Fiber
- GSAP for animations
- Tailwind CSS
- React Scroll

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd interactive-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   └── sections/
│       ├── HelloSection.tsx
│       ├── AboutSection.tsx
│       └── ExperienceSection.tsx
```

## Customization

1. Update the profile information in each section component
2. Modify the color scheme in `globals.css`
3. Add or remove sections as needed
4. Customize animations and transitions

## Performance Considerations

- Three.js components are dynamically imported to reduce initial bundle size
- Images are optimized using Next.js Image component
- Animations are handled with GSAP for smooth performance
- CSS animations are used for simpler transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 