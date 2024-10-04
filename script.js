const image = document.querySelector('.tilt-image');

image.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY, target } = e;
  const width = target.clientWidth;
  const height = target.clientHeight;

  // Normalize the offsetX and offsetY to get rotation values based on the mouse position
  const xRotation = ((offsetY / height) - 0.5) * 30; // Tilt up/down based on vertical position
  const yRotation = ((offsetX / width) - 0.5) * -30; // Tilt left/right based on horizontal position

  // Apply the transform to the image
  target.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});
image.addEventListener('mouseleave', () => {
  // Reset the transform when the mouse leaves the image
  image.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

const image2 = document.querySelector('.tilt-image2');

image2.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY, target } = e;
  const width = target.clientWidth;
  const height = target.clientHeight;

  // Normalize the offsetX and offsetY to get rotation values based on the mouse position
  const xRotation = ((offsetY / height) - 0.5) * 30; // Tilt up/down based on vertical position
  const yRotation = ((offsetX / width) - 0.5) * -30; // Tilt left/right based on horizontal position

  // Apply the transform to the image
  target.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});
image2.addEventListener('mouseleave', () => {
  // Reset the transform when the mouse leaves the image
  image2.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
