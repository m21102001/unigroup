// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import "./CircularIndeterminate.css";


// export default function CircularIndeterminate() {
//   let progressBar = document.querySelectorAll(".circular-progress");
// let valueContainer = document.querySelectorAll(".value-container");

// let progressValue = 0;
// let progressEndValue = 100;
// let speed = 30;

// for (let i = 0; i < 1; i++) {
//   // const element = valueContainer[i]
//     let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.25}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.25}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i+1].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.5}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.5}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i+2].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.75}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.75}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;

//   progressBar[i+3].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${progressValue * 3.6}deg,
//       #1c3d1c ${progressValue * 3.6}deg
//   )`;
  
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);
// }

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* <CircularProgress /> */}
// <div class="progress-box">
//     <div class="Circular-box">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//   </div>
//     </Box>
//   );
// }


import {useState,useEffect} from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 50 ? 0 : prevProgress + 10));
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      {/* <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} /> */}
      <CircularProgress variant="determinate" value={progress} />
      <CircularProgress variant="determinate" value={progress} />
      <CircularProgress variant="determinate" value={progress} />
      <CircularProgress variant="determinate" value={progress} />
    </Stack>
  );
}