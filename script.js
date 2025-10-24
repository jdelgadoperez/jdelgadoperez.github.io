// ASCII Art Easter Eggs
console.log(`
      J       DDDD      PPPP
      J       D   D     P   P
      J       D   D     PPPP
  J   J       D   D     P
   JJJ        DDDD      P

             \\
              \\
               \\\\
                \\\\
                 >\\/7
             _.-(6'  \\
            (=___._/\` \\
                 )  \\ |
                /   / |
               /    > /
              j    < _\\
          _.-' :      \`\`.
          \\ r=._\\        \`.
         <\`\\\\_  \\         .\`-.
          \\ r-7  \`-. ._  ' .  \`\\
           \\,      \`-.\\7  7)   )
            \\/         \\|  \\'  / \`-._
                       ||    .'
                        \\\\  (
                         >\\  >
                     ,.-' >.'
                    <.'_.''
                      <'
        `);

// Create subtle floating particles
const particlesContainer = document.getElementById('particles');
const particleCount = 25;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
    particlesContainer.appendChild(particle);
}
