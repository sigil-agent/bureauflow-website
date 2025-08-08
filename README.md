# Bureau Flow

## Overview
Bureau Flow is an AI-driven consulting and IT outsourcing platform that specializes in strategic AI consulting, IT developer outsourcing, and custom AI-agent solutions. This project aims to provide a modern, responsive web interface that allows users to learn about our services, meet the team, and get in touch with us.

## Project Structure
The project consists of the following key files and directories:

- **.github/workflows/main.yml**: CI/CD pipeline configuration for automated deployment to Netlify.
- **app.js**: JavaScript file that handles language switching functionality.
- **de.json**: JSON file containing German translations for the website's text.
- **en.json**: JSON file containing English translations for the website's text.
- **index.html**: Main HTML document that structures the webpage.
- **styles.css**: Custom CSS file that overrides Bootstrap styles for a unique look and feel.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd bureau-flow
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then, install the necessary packages:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   You can run a local server to preview the website:
   ```bash
   live-server
   ```

4. **Deploying to Netlify**
   The CI/CD pipeline is set up to automatically deploy the site to Netlify whenever changes are pushed to the `main` branch. Ensure that your Netlify credentials are set in the GitHub repository secrets.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.