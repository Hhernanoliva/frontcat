
const load = () => {
 
    // Button General
    const buttons = document.querySelectorAll('button');
    function handleClick(e) {
    const { layerX, layerY } = e;
    const { width, height } = this.getBoundingClientRect();

    this.style.setProperty('--top', `${(layerY / height) * 100}%`);
    this.style.setProperty('--left', `${(layerX / width) * 100}%`);

    const dx = layerX > width / 2 ? layerX : width - layerX;
    const dy = layerY > height / 2 ? layerY : height - layerY;
    const size = Math.sqrt(dx ** 2 + dy ** 2) * 2;
    this.style.setProperty('--size', `${size}px`);
    }
    buttons.forEach(button => {
    button.addEventListener('mousedown', handleClick);
    });

  
    AOS.init({
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'line', // default easing for AOS animations
      
      });

      var myWave = wavify( document.querySelector('#myId'), {
        height: 60,
        bones: 3,
        amplitude: 40,
        color: 'rgba(216,173,80,0.9)',
        speed: .25
      })

// make some waves.


} // Fin OnLoad()




    