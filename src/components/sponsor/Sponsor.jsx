import React from 'react';

const sponsorImages = [
  'https://framerusercontent.com/images/PLTYT73253lEqR6NWGT2bAxIoL0.png?scale-down-to=512',
  'https://framerusercontent.com/images/HuQfVRPPCUYpx5pboXly6Wau4wI.png?scale-down-to=512',
  'https://framerusercontent.com/images/B5wgrJ2tnyhQYrbbVnZsFe9GxvE.png?scale-down-to=512',
  'https://framerusercontent.com/images/Ar0hF2gCUqoUa3lQMA8GLAnTgg.png?scale-down-to=512',
  'https://framerusercontent.com/images/Pe5oTGvJkziBHQq2nbdESIOxnlY.png',
  'https://framerusercontent.com/images/9MaipwvjDXeUs17Te69dZiUEExQ.png?scale-down-to=512',
  'https://framerusercontent.com/images/3ru5hMDFjsKOHmTVBMurZZkF4o.png?scale-down-to=512',
  'https://framerusercontent.com/images/qj3gk3otiDQDVVQfzY5cifBpc.png?scale-down-to=512',
  'https://framerusercontent.com/images/gxvHJ4YN1iIANlr76JttIhrax0.webp',
  'https://framerusercontent.com/images/IKCyLgsif5grbId9BBIH8Mw7fI.png',
];

const SponsorSlider = () => {
  return (
    <div className='container-fluid my-5' style={styles.sliderContainer}>
      <div style={styles.marquee}>
        <div style={styles.track}>
          {sponsorImages.map((src, index) => (
            <img src={src} alt={`Sponsor ${index + 1}`} key={index} style={styles.image} />
          ))}
          {/* Repeat images to create a seamless loop */}
          {sponsorImages.map((src, index) => (
            <img src={src} alt={`Sponsor ${index + 1}`} key={index + sponsorImages.length} style={styles.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '20px 0',
    width: "95%"
  },
  marquee: {
    display: 'flex',
    animation: 'scroll 20s linear infinite',
    width: '95%',
  },
  track: {
    display: 'flex',
    width: "150px",
    height: "70px"
  },
  image: {
    height: '100%',
    width: "100%",    // Adjust the height of sponsor logos
    margin: '0 20px',
    opacity: "0.3",
    objectFit: 'contain',
    transition: 'opacity 0.3s ease', // Smooth transition for hover effect
  },
};

// CSS Animation for the scrolling effect
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
`, styleSheet.cssRules.length);

// Hover effect: Increase opacity to 1 and add a white background overlay
styleSheet.insertRule(`
styles.image:hover {
  opacity: 1;
}
`, styleSheet.cssRules.length);

export default SponsorSlider;
