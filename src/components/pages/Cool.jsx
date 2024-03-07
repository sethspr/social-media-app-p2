import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';

const videoIds = [
  'NP4Eff_-LA0?si=2fiJY8BPuXzfzDld',
  'RhvtYH-zkPk?si=1WvmI_FlRRvOjp9W',
  'R1rVTOHWhYc?si=H8paVKAUVVxtz3pw',
  'QtKGMfeyPUE?si=KlsYonMWZvcco5Ed',
  '_fhDVVfELsM?si=bECD-9xrbvdYBRqY',
];

const getRandomVideoId = () => {
  return videoIds[Math.floor(Math.random() * videoIds.length)];
};

const CoolRandomizer = () => {
  const [randomVideoId, setRandomVideoId] = useState('');

  useEffect(() => {
    const randomId = getRandomVideoId();
    setRandomVideoId(randomId);
  }, []);

  const handleRefresh = () => {
    window.location.reload()
  };

  return (
    <div>
        <NavBar />
        <div style={styles.container}>
        <h1>Cool Realm</h1>
        <button style={styles.refreshButton} onClick={handleRefresh}>Refresh</button>
        <div style={styles.profileContainer}>
            <div style={styles.profileImageContainer}>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${randomVideoId}`}
                title="Random Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
        </div>
        </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  refreshButton: {
    backgroundColor: '#606c38', 
    color: '#fff', 
    border: 'none',
    borderRadius: '5px',
    padding: '8px 8px', 
    fontSize: '14px', 
    cursor: 'pointer',
    fontFamily: 'Nunito, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '400',
    fontStyle: 'normal',
    width: '90px',
    marginBottom: '10px'
  }
};



export default CoolRandomizer;
