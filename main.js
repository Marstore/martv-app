const { app, BrowserWindow } = require('electron')
const path = require('path')
const client = require('./discord-rpc');

function createWindow () {
  // Crie uma janela do navegador.
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    autoHideMenuBar: true,
    title: 'MarTV | Melhor Site para assistir Filmes, Séries e Canais de TV',
    icon: 'icon.png'
  })

  win.webContents.on('did-finish-load', () => {
    let pageTitle = win.webContents.getTitle()
    win.setTitle(pageTitle)
  })

// Entrar no modo de tela cheia
win.setFullScreen(true)

// Sair do modo de tela cheia
win.setFullScreen(false)

// Verificar se a janela está em modo de tela cheia
if (win.isFullScreen()) {
  console.log('A janela está em modo de tela cheia!')
}

  // Carregue o site MarTV no webview.
  win.loadURL('https://martv.marstore.repl.co/home/')

  // Abre as DevTools (Ferramentas do Desenvolvedor).
//   win.webContents.openDevTools()
}



// Evento "ready" é acionado quando o Electron termina de inicializar e está pronto para criar janelas do navegador.
app.whenReady().then(createWindow)
