// * {
//   box-sizing: border-box;
// }

// html,
// body {
//   margin: 0;
//   padding: 0;
//   scroll-behavior: smooth;
//   overflow-x: hidden;
//   max-width: 100vw;
//   font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
//   background-color: #fef9f4;
//   color: #2a2a2a;
// }

// /* Page containers */
// .page1, .page2, .about-me {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
//   flex-direction: column;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
//   color: white;
//   text-align: center;
//   box-sizing: border-box;
// }

// /* Navigation */
// .navbar {
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1000;
//   background-color: white;
// }

// .navbar-inner {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// }

// .nav-left {
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: rgb(60, 54, 54);
// }

// .nav-left a, .nav-right a {
//   color: rgb(60, 54, 54);
//   text-decoration: none;
// }

// .nav-right {
//   display: flex;
//   gap: 1.5rem;
// }

// .nav-right a:hover {
//   color: #2a2a2a;
// }

// /* Hero section */
// .hero {
//   width: 100%;
//   max-width: 1200px;
//   padding: 1rem;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   margin-top: 4rem;
// }

// .hero h1 {
//   font-size: 2.5rem;
//   margin-bottom: 1.5rem;
//   color: white;
// }

// .hero p {
//   font-size: 1.2rem;
//   max-width: 600px;
//   margin-bottom: 2rem;
// }

// /* Portrait image */
// .portrait {
//   margin: 2rem auto;
//   display: flex;
//   justify-content: center;
// }

// .portrait img {
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 50%;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// }

// /* Social links */
// .sociallinks, .emailme {
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
//   margin: 1.5rem 0;
//   flex-wrap: wrap;
// }

// .sociallinks a, .emailme a {
//   color: #8dbef0;
//   text-decoration: none;
// }

// .sociallinks a:hover, .emailme a:hover {
//   color: #d2cbcb;
// }

// /* Page 2 - Projects */
// .page2-title {
//   font-size: 2rem;
//   margin-bottom: 2rem;
// }

// .card {
//   background-color: white;
//   border-radius: 15px;
//   padding: 1.5rem;
//   margin: 1rem;
//   max-width: 800px;
//   color: #2a2a2a;
//   text-align: left;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// }

// .tech-tags {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   margin-top: 1rem;
// }

// .tech-tags span {
//   background-color: #e8f0fe;
//   color: #277dc9;
//   padding: 0.3rem 0.7rem;
//   border-radius: 999px;
//   font-size: 0.9rem;
// }

// /* About Me section */
// .about-me {
//   flex-direction: column;
// }

// .about-me-container {
//   width: 90%;
//   max-width: 800px;
//   padding: 2rem;
//   margin: 1rem;
//   text-align: left;
// }

// .about-me-container h1 {
//   font-size: 2rem;
//   margin-bottom: 1.5rem;
// }

// .about-me-container h2 {
//   font-size: 1.5rem;
//   margin: 1.5rem 0 1rem;
// }

// .about-me-container p {
//   line-height: 1.6;
//   margin-bottom: 1rem;
// }

// /* Photo gallery */
// .photo-gallery {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 1rem;
//   margin: 2rem 0;
// }

// .photo-gallery img {
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   transition: transform 0.3s ease;
// }

// /* Button */
// .button button {
//   background-color: #788084;
//   color: white;
//   padding: 0.8rem 1.5rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;
//   margin: 1rem 0;
// }

// .button button:hover {
//   background-color: #8dbef0;
// }

// /* Media Queries for Mobile */
// @media (max-width: 768px) {
//   .navbar-inner {
//     flex-direction: column;
//     padding: 0.5rem;
//   }
  
//   .nav-left {
//     margin-bottom: 0.5rem;
//   }
  
//   .nav-right {
//     gap: 1rem;
//   }
  
//   .hero h1 {
//     font-size: 2rem;
//   }
  
//   .hero p {
//     font-size: 1rem;
//   }
  
//   .portrait img {
//     width: 150px;
//     height: 150px;
//   }
  
//   .about-me-container {
//     padding: 1rem;
//   }
  
//   .photo-gallery img {
//     width: 120px;
//     height: 120px;
//   }
  
//   /* Reset all image rotations on mobile */
//   .photo-gallery img {
//     transform: none !important;
//   }
// }

// @media (max-width: 480px) {
//   .hero h1 {
//     font-size: 1.8rem;
//   }
  
//   .page2-title, .about-me-container h1 {
//     font-size: 1.5rem;
//   }
  
//   .photo-gallery img {
//     width: 100px;
//     height: 100px;
//   }
// }