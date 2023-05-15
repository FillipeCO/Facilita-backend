# Financial Control API

This is a REST API for a financial control application.

## Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cors]

## How To Use

Antes de tudo, é recomendado baixar o gitbash para o pc: https://gitforwindows.org/ 
	Clicar em download e instalar tudo no padrão mesmo
 

Instalar o docker desktop docker desktop: https://www.docker.com/products/docker-desktop/ 
 
	Se aparecer esse erro ao tentar inicializar o docker desktop (docker desktop requires a newer wsl kernel version.), baixar e instalar o seguinte: https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

Criar uma pasta qualquer e com o gitbash ou seu terminal, acessá-la, você também pode clicar com o botão direito dentro da pasta e clicar em "Abrir no Terminal"
 

Com o terminal aberto, dentro da pasta que você criou, rodar os comandos:

git clone https://github.com/FillipeCO/organizy.git
- Isso vai clonar o repositório remoto para a sua máquina.
 

cd organizy
- Esse comando vai mover você para o repositório recém clonado.
 

npm install -g npm
- Isso vai instalar o node e o npm na sua máquina
 

npm install --global yarn
- Isso vai instalar o yarn na sua máquina
 

yarn install
- Isso vai instalar todas as dependências necessárias para o projeto
 

docker run --name mongo_organizy -d -p 27017:27017 mongo:latest
- Cria o container mongo_organizy no seu docker
 

docker start mongo_organizy
- Coloca o seu container para rodar
 

yarn dev
- Faz rodar o servidor backend e o projeto vai estar pronto pra teste
 

------------------------------------------------------------------------------------------------------------------------------------


Integrantes:

BRENDA GIOVANNA MACHADO RIOS

FILLIPE DIAS CORREIA

RENATA RIBEIRO CAVALCANTE

WILKER PEREIRA SILVEIRA

