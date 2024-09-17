<h1>London Brew Co - Frontend</h1>
<p>Welcome to the <strong>London Brew Co</strong> frontend! This repository contains the React application for the London Brew Co coffee shop.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#setup-and-installation">Setup and Installation</a></li>
  <li><a href="#environment-variables">Environment Variables</a></li>
  <li><a href="#deployment">Deployment</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="overview">Overview</h2>
<p>The frontend provides the user interface for browsing coffee items, signing in, and managing orders.</p>

<h2 id="features">Features</h2>
<ul>
  <li>User Authentication (Sign up, Sign in, and Logout)</li>
  <li>Display coffee items and their details</li>
  <li>Manage orders and cart items</li>
  <li>Fully responsive and mobile-first design</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
  <li><strong>React (Vite)</strong>: Modern frontend framework for building fast user interfaces.</li>
  <li><strong>Tailwind CSS</strong>: Utility-first CSS framework for responsive designs.</li>
  <li><strong>Firebase</strong>: For authentication and frontend deployment.</li>
  <li><strong>React Router</strong>: For client-side routing.</li>
  <li><strong>SweetAlert2</strong>: For interactive pop-up alerts and confirmations.</li>
</ul>

<h2 id="setup-and-installation">Setup and Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li><strong>Node.js</strong> and <strong>npm</strong> installed on your machine.</li>
  <li>A <strong>Firebase</strong> project set up for authentication.</li>
</ul>

<h3>Steps</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/Jamil-Aktar-Ifat/London-Brew-Co-Client.git
cd London-Brew-Co-Client
    </code></pre>
  </li>
  <li>Install the dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file at the root of the project with the following content:
    <pre><code>VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
    </code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<h2 id="environment-variables">Environment Variables</h2>
<p>The frontend requires the following environment variables to connect with Firebase. Add these variables to the <code>.env</code> file:</p>
<pre><code>VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
</code></pre>

<h2 id="deployment">Deployment</h2>
<p>This frontend is deployed using <strong>Firebase Hosting</strong>.</p>

<p>To deploy:</p>
<ol>
  <li>Install Firebase CLI:
    <pre><code>npm install -g firebase-tools</code></pre>
  </li>
  <li>Login to Firebase:
    <pre><code>firebase login</code></pre>
  </li>
  <li>Initialize Firebase in your project:
    <pre><code>firebase init</code></pre>
  </li>
  <li>Deploy:
    <pre><code>firebase deploy</code></pre>
  </li>
</ol>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License.</p>
