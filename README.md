
## Como usar

Antes de tudo, é recomendado baixar o gitbash para o pc: https://gitforwindows.org/ 
	Clicar em download e instalar tudo no padrão mesmo
 

Instalar o docker desktop docker desktop: https://www.docker.com/products/docker-desktop/ 
 
	Se aparecer esse erro ao tentar inicializar o docker desktop (docker desktop requires a newer wsl kernel version.), baixar e instalar o seguinte: https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

### Criar uma pasta qualquer e com o gitbash ou seu terminal, acessá-la, você também pode clicar com o botão direito dentro da pasta e clicar em "Abrir no Terminal"
 

### Com o terminal aberto, dentro da pasta que você criou, rodar os comandos:

git clone https://github.com/FillipeCO/superlogica-backend.git
- Isso vai clonar o repositório remoto para a sua máquina.
 

cd superlogica-backend
- Esse comando vai mover você para o repositório recém clonado.
 

### Instalar o node, se não tiver instalado, com o seguinte comando:

npm install -g npm
- Isso vai instalar o node e o npm de maneira global na sua máquina
 
### Instalar as dependências do projeto com o comando:

npm install
- Isso vai instalar todas as dependências necessárias para o projeto

### Docker:

docker run --name facilita_backend -d -p 27017:27017 mongo:latest
- Cria o container superlogica_backend no seu docker
 

docker start facilita_backend
- Coloca o seu container para rodar

### Rodando o projeto:

npm run dev
- Faz rodar o servidor backend e o projeto vai estar pronto pra teste via postman


------------------------------------------------------------------------------------------------------------------------------------
