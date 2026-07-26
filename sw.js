const CACHE_NAME = 'voto-consciente-v2'; // Mude para um número de versão novo (ex: v2, v3...)

// Instalação: força o worker a pular a espera e assumir o controle
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Ativação: limpa os caches antigos e assume o controle das abas abertas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Apaga o cache velho
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
