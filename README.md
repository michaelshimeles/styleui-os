# StyleUI Components

StyleUI Components is a collection of reusable UI components built with Next.js, TailwindCSS, and shadcn/ui. This project showcases various custom components that can be easily integrated into your Next.js applications.

## Features

- Animated Card
- Custom Buttons
- Floating Navbar
- ChatGPT Carousel
- Custom Video Player
- Typography Demo
- ShadCN Dark mode support
- Responsive design

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/michaelshimeles/styleui-os.git
cd styleui-os
yarn add
```

Then, run the development server:


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prerequisites

To use these components, you need to have shadcn/ui installed in your project. Follow these steps:

1. Run `npx shadcn@latest init` in your project directory
2. Follow the prompts to set up shadcn/ui
3. Install necessary components using `npx shadcn-ui@latest add [component-name]`

For more detailed instructions, visit the [shadcn/ui documentation](https://ui.shadcn.com/docs/installation).

## Project Structure

- `app/`: Contains the main application code
  - `page.tsx`: The main page component showcasing all the StyleUI components
  - `layout.tsx`: The root layout component
- `components/`: Contains all the custom components
- `lib/`: Contains utility functions and configurations

## Usage

Each component is showcased on the main page with a "View Code" button that reveals the component's source code. You can easily copy the code and integrate it into your own projects.

## Customization

You can customize the components by modifying their respective files in the `components/` directory. The project uses TailwindCSS for styling, so you can easily adjust the appearance by changing the Tailwind classes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.