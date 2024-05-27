# Slideshow Web Application

This project is a simple web application that displays images in a random order with fade animations. It runs a Node.js server to serve the images and the web page.

## Prerequisites

Before you start, make sure you have Git and Node.js installed on your system.

### Install Git

Download and install Git from [git-scm.com](https://git-scm.com/). Follow the installation instructions for your operating system.

### Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/). Make sure to download the LTS version. Follow the installation instructions for your operating system.

### Verify Installation

After installing Git and Node.js, verify the installation by running the following commands in your terminal or command prompt:

```sh
git --version
node --version
npm --version
```

## Installation

1. **Clone the Repository**

   Open your terminal or command prompt and clone the repository using Git:

   ```sh
   git clone https://github.com/r3m00n/slideshow.git
   ```

2. **Navigate to the Project Directory**

   ```sh
   cd slideshow
   ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

## Running the Project

1. **Start the Server**

   Run the following command to start the Node.js server:

   ```sh
   node server.js
   ```

2. **Open the Web Application**

   Open your web browser and navigate to:

   ```sh
   http://localhost:3000
   ```

   The slideshow should now be running, displaying images in a random order with fade animations.

## Project Structure

- `server.js`: The Node.js server script.
- `index.html`: The main HTML file for the slideshow.
- `images/`: A folder containing the images to be displayed.

## Additional Notes

- Ensure all your images are placed in the `images/` folder before starting the server.
- The server script dynamically lists and serves all images from the images folder.

## Troubleshooting

- If you encounter any issues, make sure you have installed the correct versions of Node.js and Git.
- Check that your firewall or antivirus software is not blocking the server.

## License

This project is licensed under the MIT License.
