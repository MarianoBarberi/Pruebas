import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Function to create a new user chat container
    function createUserChatContainer(message) {
      var userChatContainer = document.createElement('div');
      userChatContainer.classList.add('w-layout-blockcontainer', 'container-6');
      var userChatMessage = document.createElement('p');
      userChatMessage.classList.add('paragraph-2');
      userChatMessage.textContent = message;
      userChatContainer.appendChild(userChatMessage);
      document.getElementById('containerChat').appendChild(userChatContainer);
    }

    // Handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent default form submission behavior
      var input = document.getElementById('ChatInput').value.trim();
      if (input !== '') {
        createUserChatContainer(input);
        document.getElementById('ChatInput').value = ''; // Reset input field after submission
      }
    }

    // Attach event listener to form on component mount
    document.getElementById('formChatbot').addEventListener('submit', handleSubmit);

    // Clean up by removing event listener on component unmount
    return () => {
      document.getElementById('formChatbot').removeEventListener('submit', handleSubmit);
    };
  }, []); 
  return (
    <body class="body-5">
      <section class="section-32">
        <div class="w-layout-blockcontainer container-4" id="toggleChat">
          <img src="images/b3hK11RR.ico" loading="lazy" alt="" class="image-40" />
        </div>
        <div class="w-layout-blockcontainer container-5" id="chat">

          <div class="containerChat" id="containerChat">

            <div id="BotChatContainer" class="w-layout-blockcontainer container-6 bot">
              <p id="BotChat" class="paragraph-2"></p>
            </div>

          </div>

          <div class="formContainer">
            <form id="formChatbot" class="form-2">
              <input class="text-field-8" placeholder="Hazme una pregunta" type="text" id="ChatInput" required="" />
              <button type="submit" class="submit-button-2">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
