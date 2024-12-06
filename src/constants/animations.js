/*
let's make this trigger_animation_interval to be dependant on what time you see this website.

if you open it in the daytime, it should have lower interval of the 100 ms 
and linearly increase the interval to 500 ms when it goes to later part of day. 

- suggest here 

*/
export const TRIGGER_ANIMATION_INTERVAL = 2000; // Interval in milliseconds TO TRIGGER ANIMATIONS
export const ANIMATION_DURATION = 2000; // Duration in milliseconds

export const PARTICLE_COLORS = [
  '#FFD700',  // Gold
  '#FF6B6B',  // Coral
  '#4ECDC4',  // Turquoise
  '#45B7D1',  // Sky Blue
  '#96CEB4',  // Mint
  '#FFEEAD',  // Cream
  '#D4A5A5',  // Rose
  '#9370DB'   // Purple
];

export const MEDIA_BREAKPOINTS = {
  DESKTOP: '1200px',
  TABLET: '1024px',
  MOBILE: '768px'
};

export const PARTICLE_CONFIG = {
  COUNT: 20,  // Number of particles per animation
  MIN_SIZE: 1,  // Minimum particle size in pixels
  MAX_SIZE: 3,   // Maximum particle size in pixels
  VELOCITY: 1 // Particle velocity
};
