window.watsonAssistantChatOptions = {
      integrationID: "668774a5-69a3-4f89-9dd9-23fee372c806", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "a9389917-eff1-4a41-ae8f-af748e6ab5f8", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t = document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
