// src/components/BlogPost.jsx
import React from 'react';
import ImageGallery from './ImageGallery';

// Import images from assets folder
import visit1 from '../assets/Picture1.jpg';
import visit2 from '../assets/Picture2.jpg';
import solution1 from '../assets/Picture3.jpg';
import solution2 from '../assets/Scan3.jpg';

const BlogPost = () => {
  const visitImages = [visit1, visit2];
  const solutionImages = [solution1, solution2];

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      {/* Introduction */}
      <h1>Introduction</h1>
      <p>
        This blog presents our research journey. We started by visiting the site to understand the problem better.
      </p>

      {/* Evidence: Visit Images */}
      <h2>Evidence from Our Visit</h2>
      <ImageGallery images={visitImages} />

      {/* Research Description */}
      <h2>Our Research</h2>
      <p>
        Here we explain what we researched. Include details about the issue, data collected, and insights gathered.
      </p>

      {/* Solution */}
      <h2>Our Proposed Solution</h2>
      <p>
        Based on our findings, here's the solution we developed to address the problem.
      </p>

      {/* Solution Images */}
      <h2>Images of Our Solution</h2>
      <ImageGallery images={solutionImages} />
    </div>
  );
};

export default BlogPost;