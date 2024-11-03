# Oya-Clone

## Overview

**Oya-Clone** is a Vue.js 3 web app built to showcase the use of GSAP for creating engaging animations and interactions. It features reusable components and a modular structure, focusing on clean code and scalability while replicating the core functionalities of the original Oya platform.

## Technologies Used

- Vue.js 3
- Vue Router
- GSAP (GreenSock Animation Platform)

## Demo

[Explore Oya-Clone App](https://oya-nine.vercel.app/)

## Features

- **GSAP Animations**: Explore a variety of animations and interactive elements created using the GSAP library.
- **Vue.js 3**: Utilizes the latest version of Vue.js for building reactive and interactive components.
- **Responsive Design**: Ensures the application works seamlessly across different screen sizes.
- **Practice Project**: Developed as a practice exercise to enhance skills in Vue.js and GSAP animation development.
- **Modular Components**: Includes components for layout and UI elements to enhance reusability.
- **Routing**: Provides navigation between views using Vue Router.
- **Scalable Structure**: Organized project files to facilitate easy maintenance and scalability.

## Project Structure

- `src/`: The source code for the application.

  - `components/`: Reusable components used across the application.
    - `layout/`: Layout components for the main structure of the app.
      - `TheFooter.vue`: Footer component.
      - `TheHeader.vue`: Header component.
    - `ui/`: Base UI components for consistent styling.
      - `baseButton.vue`: Button component for user interactions.
      - `baseCard.vue`: Card component for displaying content in a card layout.
      - `baseSlide.vue`: Slide component for carousel or slider functionality.
  - `router/`: Vue Router configuration.
    - `index.js`: Defines the routes and navigation logic.
  - `views/`: Main view pages for the application.
    - `HomeView.vue`: The main homepage view.
  - `App.vue`: The main application component.
  - `main.js`: Entry point of the Vue application.

## Installation and Setup

Follow these steps to get the project up and running locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/loaymady/Oya.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Oya
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run serve
   ```

5. Open your browser and navigate to http://localhost:8080/ to view the application.
