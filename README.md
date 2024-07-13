# PhotoFolio

___

## Live

- <a href='https://photofolioreact.netlify.app/' target=_blank>Live</a>
___

## Overview
PhotoFolio is an online photo album react app that allows users to upload, organize and share their digital photos.
___

## Features:

- Add, update, and delete images within albums

- Search and filter images by title

- View images in a carousel

- Responsive design for mobile and desktop devices

- Notifications for successful and failed operations

___

### Technologies Used

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,html,css,js,react,firebase" />
  </a>
</p>
- **Frontend**: React, CSS Modules, Toastify, Spinner-Material
- **Backend**: Firebase Cloud Firestore

___

## Installation

1. Clone the repository:

  ```bash
   git clone https://github.com/MdIrfan-ul/PhotoFolio.git
2. Navigate to the Project Directory:
```bash
   cd photofolio
   ```
3. Install Dependencies:
```bash
npm install
```
4. Create a Firebase project and configure Firestore. Add your Firebase configuration to a config/fireBase.config.js file:

 ```bash

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```  


5. Start the development server:

```bash
npm start
```
6. Open your browser and navigate to http://localhost:3000 to view the application.

___

## Usage

- Navigate to the homepage to see a list of photo albums.
- Click "Add Album" to create a new album.
- Select an album to view and manage images within it.
- Use the search bar to filter images by title.
- Click on an image to view it in a carousel.
- Use the "Edit" and "Delete" icons to update or remove images.

___

## Components

- **App**: The main component that manages the state and renders AlbumList and ImageList components.
- **AlbumList**: Displays a list of albums and allows users to add new albums.
- **ImageList**: Displays a list of images within a selected album and allows users to perform CRUD operations.
- **AlbumForm**: Form component for adding a new album.
- **ImageForm**: Form component for adding and editing images.
- **Carousel**: Component for viewing images in a carousel.

___

## Reducers

- **albumReducer**: Manages the state of albums.
- **imageReducer**: Manages the state of images.

___

## Firebase Operations

- **addAlbum**: Adds a new album to Firestore.
- **addImage**: Adds a new image to Firestore.
- **updateImage**: Updates an existing image in Firestore.
- **deleteImage**: Deletes an image from Firestore.
- **onSnapshot**: Listens for real-time updates from Firestore.
___
## Styling
- Custom CSS Modules are used for styling components.
- Responsive design is implemented to ensure compatibility with mobile and desktop devices.
___

Developed with ❤️ by [Mohamed Irfanullah M]