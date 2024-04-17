
# streamU-A video sharing paltform

streamU is a web application that allows users to create channels, share videos, and engage with other users through tweets. Similar to YouTube, users can discover and watch a wide range of videos, create their own channels to showcase their content, and interact with the community through tweets.


## Features

- User Authentication: Secure user authentication system allows users to sign up, log in, and manage their accounts.
- Channel Creation: Users can create their own channels, upload videos, and customize channel details such as name, description, and profile picture.
- Video Sharing: Share videos with the community by uploading them to your channel. Users can browse, search, and watch videos uploaded by other users.
- Tweeting: Engage with other users by posting tweets, replying to tweets, and liking tweets. Tweets can include text, images, and links.
- Discover and Explore: Explore a wide range of videos and channels through the home page, trending section, and recommended content.
- Responsive Design: The application is fully responsive, ensuring a seamless user experience across desktop, tablet, and mobile devices.


## Tech Stack

**Client:** 
- React.js: JavaScript library for building user interfaces.
- React Router: Declarative routing for React applications.
- Axios: HTTP client for making API requests.
- Styled-components: DaisyUI component library for styling React components.

**Server:** 
- Node.js: JavaScript runtime environment for server-side code.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user data, videos, and tweets.
- JWT Authentication: JSON Web Tokens for user authentication and authorization.

**Additional Tools:**
- Cloudinary: Cloud-based media management platform for storing and serving video and image content.


## Getting Started

To run the MyTube web application locally, follow these steps:

Clone the project

```bash
  https://github.com/kazisadman/video-streaming-client.git
```

Go to the project directory

```bash
  cd video-streaming-client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Set up environment variables:
- Create a .env file in the root directory.
- Add environment variables such as database connection URL, API keys, and other configuration settings.

Run the development server:
```bash
npm run dev
```

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.


## Acknowledgements

 - Special thanks to [Chai aur Code](https://www.youtube.com/@chaiaurcode) for inspiring this project.
 - Built with love and passion by Sadman Nafe
