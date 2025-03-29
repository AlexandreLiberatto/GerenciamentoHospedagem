# Gerenciamento de Hospedagem

## Visão Geral
Este é um sistema de gerenciamento de hospedagem desenvolvido com **Spring Boot** no backend e **Angular 19** no frontend. O sistema permite a gestão de reservas, quartos e usuários, oferecendo funcionalidades diferenciadas para administradores e clientes.

## Tecnologias Utilizadas
- **Backend**: Java com Spring Boot
- **Frontend**: Angular 19
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT (JSON Web Token)

## Estrutura do Projeto

### Backend (Spring Boot)
Localização: `PousadaServer`

Principais arquivos e diretórios:
- `configs/`
  - `JwtAuthenticationFilter.java`: Filtro de autenticação JWT
  - `SimpleCorsFilter.java`: Configuração de CORS
  - `WebSecurityConfiguration.java`: Configuração de segurança
- `controller/admin/`
  - `ReservationController.java`: Gerenciamento de reservas (admin)
  - `RoomsController.java`: Gerenciamento de quartos
- `controller/auth/`
  - `AuthController.java`: Autenticação e cadastro de usuários
- `controller/customer/`
  - `BookingController.java`: Reserva de quartos (usuário)
  - `RoomController.java`: Consulta de quartos
- `dto/`
  - DTOs para comunicação entre frontend e backend
- `entity/`
  - `Reservation.java`: Entidade de reserva
  - `Room.java`: Entidade de quarto
  - `User.java`: Entidade de usuário
- `enun/`
  - `ReservationStatus.java`: Status das reservas
  - `UserRole.java`: Perfis de usuários

### Frontend (Angular 19)
Localização: `PousadaClient`

Principais módulos e componentes:
- `src/app/modules/auth/`
  - Tela de login e cadastro de usuários
- `src/app/modules/admin/`
  - Painel administrativo para gerenciar quartos e reservas
- `src/app/modules/customer/`
  - Interface para clientes realizarem reservas
- `src/app/services/`
  - Serviços para comunicação com o backend

## Manual de Uso

### Tela de Login
Ao iniciar o sistema, o usuário acessa a tela de login. Aqui, é possível:
- Fazer login como administrador ou usuário comum
- Criar uma conta caso ainda não tenha
<br><br>
![Tela de Login](PousadaWeb/src/assets/img/tela-login.png)
<br><br>
### Menu do Administrador
Após o login como **administrador**, as seguintes opções estão disponíveis:

#### Cadastrar Quartos
O administrador pode cadastrar novos quartos informando nome, tipo e valor da diária.
<br><br>
![Cadastro de Quartos](PousadaWeb/src/assets/img/cadastro-de-quartos.png)
<br><br>
#### Gerenciar Quartos
Permite editar e excluir quartos cadastrados.
<br><br>
![Lista de Quartos](PousadaWeb/src/assets/img/quartos.png)
<br><br>
#### Gerenciar Reservas
Visualização e gerenciamento de reservas:
- **Aguardando confirmação**
- **Aprovadas**
- **Rejeitadas**
<br><br>
![Reservas](PousadaWeb/src/assets/img/reservas.png)
<br><br>
### Menu do Usuário
Após o login como **usuário comum**, as seguintes opções estão disponíveis:

#### Fazer Reserva
O usuário pode escolher um quarto disponível e realizar uma reserva.
<br><br>
![Fazer Reserva](PousadaWeb/src/assets/img/fazer-reserva.png)
<br><br>
#### Minhas Reservas
Permite visualizar todas as reservas feitas, com detalhes:
- Nome do quarto
- Tipo de quarto
- Data de entrada e saída
- Valor total
- Status da reserva
<br><br>
![Minhas Reservas](PousadaWeb/src/assets/img/minhas-reservas.png)
<br><br>
## Instalação e Execução

### Backend (Spring Boot)
1. Clone o repositório:
   ```sh
   git clone https://github.com/AlexandreLiberatto/GerenciamentoHospedagem.git
   ```
2. Acesse o diretório do backend:
   ```sh
   cd PousadaServer
   ```
3. Configure o banco de dados no `application.properties`.
4. Execute o projeto:
   ```sh
   mvn spring-boot:run
   ```

### Frontend (Angular 19)
1. Acesse o diretório do frontend:
   ```sh
   cd PousadaWeb
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute o projeto:
   ```sh
   ng serve
   ```
4. Acesse o sistema no navegador: `http://localhost:4200`

## Contribuição
Se desejar contribuir com melhorias, siga estes passos:
1. Fork o repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Minha nova feature'`)
4. Envie para o repositório remoto (`git push origin minha-feature`)
5. Abra um Pull Request

<br><br>
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="100%">
<br><br>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Incoming%20Envelope.webp" alt="Incoming Envelope" width="32" height="32" /> Contatos

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=+5548991604054)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexandre-liberato-32179624b/)
[![E-mail](https://img.shields.io/badge/E--mail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:alexandreliberatto@gmail.com)
