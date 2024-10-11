<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>

  <h1>Streamflix - Movies App</h1>

  <p><strong>Streamflix</strong> is a modern, interactive movie search app built with React and TypeScript. The app allows users to search for movies, watch trailers, and enjoy a sleek, animated interface. It features a dynamic home slider showcasing the latest movies, and users can toggle between light and dark modes for a personalized browsing experience. Additionally, the app features sections for Trending Movies, Top Rated Movies, Trending Series, and Top Rated Series.</p>

 

  <h2 id="features">Features</h2>
  <ul>
        <li><strong>Movie Search:</strong> Search for movies by title.</li>
        <li><strong>Movie Details:</strong> View detailed information about each movie, including the cast.</li>
        <li><strong>Watch Trailers:</strong> Watch movie trailers directly on the movie detail page.</li>
        <li><strong>Home Slider:</strong> A visually engaging carousel showing the latest movies on the home page.</li>
        <li><strong>Trending Movies:</strong> View a list of trending movies currently popular.</li>
        <li><strong>Top Rated Movies:</strong> View a list of top-rated movies.</li>
        <li><strong>Trending Series:</strong> See the currently trending TV series.</li>
        <li><strong>Top Rated Series:</strong> View the top-rated TV series.</li>
        <li><strong>Light and Dark Mode:</strong> Switch between light and dark themes for a customized viewing experience.</li>
        <li><strong>Responsive Design:</strong> Optimized for mobile and desktop views.</li>
        <li><strong>Smooth Animations:</strong> Dynamic animations with <a href="https://www.framer.com/motion/">Framer Motion</a> for a better user experience.</li>
        <li><strong>Modern UI:</strong> Stylish and clean design built with <a href="https://tailwindcss.com/">TailwindCSS</a>.</li>
        <li><strong>Lazy Loading:</strong> Improved performance with <a href="https://github.com/Aljullu/react-lazy-load-image-component">react-lazy-load-image-component</a>.</li>
        <li><strong>State Management:</strong> <a href="https://redux-toolkit.js.org/">Redux Toolkit</a> for managing global state effectively.</li>
    </ul>

  <h2 id="technologies">Technologies</h2>
    <ul>
        <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
        <li><strong>TypeScript:</strong> A superset of JavaScript that adds static types.</li>
        <li><strong>Vite:</strong> A modern build tool for faster development.</li>
        <li><strong>Redux Toolkit:</strong> For managing global state.</li>
        <li><strong>React Router:</strong> For handling routing and navigation.</li>
        <li><strong>TailwindCSS:</strong> A utility-first CSS framework for fast styling.</li>
        <li><strong>Framer Motion:</strong> A library for animations in React.</li>
        <li><strong>Swiper:</strong> A mobile-friendly carousel component for browsing content.</li>
        <li><strong>React Icons:</strong> For adding icons in the UI.</li>
        <li><strong>React Lazy Load Image:</strong> For performance optimization via lazy loading of images.</li>
        <li><strong>YouTube API (or similar):</strong> For watching movie trailers directly in the app.</li>
        <li><strong>TMDb API:</strong> For retrieving movie and TV series data (using The Movie Database API).</li>
    </ul>

  <h2 id="installation">Installation</h2>
    <p>To run the project locally, follow the steps below:</p>
  <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/Shahzar-Ali/StreamFlix.git</code></pre>
        </li>
        <li><strong>Navigate to the project folder:</strong>
            <pre><code>cd streamflix</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Run the development server:</strong>
            <pre><code>npm run dev</code></pre>
            <p>This will start the app on <code>http://localhost:3000</code>. You can view the app in your browser.</p>
        </li>
    </ol>

  <h2 id="configuration">Configuration</h2>
    <p>Before running the project, you need to configure your API keys. The app uses <strong>The Movie Database (TMDb)</strong> API to fetch movie and series data. You'll need to add your API key in an environment file.</p>
  <ol>
        <li><strong>Create a <code>.env</code> file in the root directory.</strong></li>
        <li><strong>Add the following environment variables to your <code>.env</code> file:</strong>
            <pre><code>VITE_API_KEY=<YOUR_TMDB_API_KEY>
VITE_TMDB_API_BASE_URL=https://api.themoviedb.org/3</code></pre>
            <p>Replace <code> YOUR_TMDB_API_KEY </code> with your actual TMDb API key. You can obtain it by signing up at <a href="https://www.themoviedb.org/">TMDb</a>.</p>
        </li>
        <li><strong>Ensure the environment variables are properly loaded.</strong> The Vite build tool will automatically read these variables when the app runs.</li>
    </ol>

  <h2 id="usage">Usage</h2>
  <ul>
    <li><strong>Home Slider:</strong> The home page features a dynamic slider that showcases the latest movies. Swipe through or use navigation arrows to explore the latest content.</li>
      <li><strong>Trending Movies:</strong> View a list of movies that are currently trending.</li>
        <li><strong>Top Rated Movies:</strong> View a list of top-rated movies.</li>
        <li><strong>Trending Series:</strong> See the currently trending TV series.</li>
        <li><strong>Top Rated Series:</strong> View the top-rated TV series.</li>
        <li><strong>Search:</strong> Enter a movie title in the search bar to find movies.</li>
        <li><strong>Movie Details:</strong> Click on a movie or series title to see detailed information such as the synopsis, cast, and watch the movie trailer.</li>
        <li><strong>Watch Trailers:</strong> Movie trailers can be played directly on the movie details page.</li>
        <li><strong>Light/Dark Mode:</strong> Toggle between light and dark mode for a custom viewing experience.</li>
        <li><strong>Responsive Design:</strong> The app is fully responsive, offering an optimized experience for both mobile and desktop devices.</li>
  </ul>


  <h2 id="license">License</h2>
  <p>This project is open-source and available under the <a href="LICENSE">MIT License</a>.</p>

  <h2 id="acknowledgements">Acknowledgements</h2>
  <ul>
        <li><strong>Vite:</strong> For its fast build times and optimized development experience.</li>
        <li><strong>Framer Motion:</strong> For smooth and engaging animations.</li>
        <li><strong>TailwindCSS:</strong> For rapid and responsive styling.</li>
        <li><strong>Redux Toolkit:</strong> For simplified state management.</li>
        <li><strong>YouTube API (or similar):</strong> For movie trailer integration.</li>
        <li><strong>TMDb API:</strong> For movie and TV series data (Movie details, images, trailers, etc.).</li>
        <li><strong>Swiper:</strong> For the beautiful home slider showcasing the latest movies.</li>
    </ul>

</body>
</html>
