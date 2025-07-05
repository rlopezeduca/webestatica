// Array con varios saludos
const greetings = [
  '¡Hola! ¿Qué tal?',
  '¡Bienvenido a bordo!',
  '¡Qué bueno tenerte por aquí!',
  '¡Un saludo desde el código!',
  '¡Gracias por visitarnos!',
  '¡Es un placer verte!',
  '¡Que tengas un día genial!',
  '¡Explora todo lo que quieras!',
  '¡La web te da la bienvenida!',
  '¡Hola mundo... y a ti también!'
];

// Elementos del DOM donde se mostrará el mensaje y el botón para cambiarlo
const welcomeMessage = document.getElementById('welcome-message');
const changeButton = document.getElementById('change-message-btn');

// Añadimos un listener al botón para el evento 'click'
changeButton.addEventListener('click', () => {
  // Obtenemos un saludo aleatorio y actualizamos el mensaje de bienvenida
  const randomIndex = Math.floor(Math.random() * greetings.length);
  welcomeMessage.textContent = greetings[randomIndex];
});
