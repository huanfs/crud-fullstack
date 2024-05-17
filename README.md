# :computer: explicação detalhada a respeito do código

> abaixo seguem explicações tanto do front quanto do back end deste projeto que foi criado com a intenção de praticar as tecnologias utilizadas: 

![Static Badge](https://img.shields.io/badge/react-blue)
![Static Badge](https://img.shields.io/badge/express-green)
![Static Badge](https://img.shields.io/badge/mysql-sql-navy)
![Static Badge](https://img.shields.io/badge/sequelize-green)

- abaixo seguem as explicações sobre cada arquivo back-end e front-end:

---

1. # **API**

    1. # API/banco_dados/db.js

    > detalhamento de como está funcionando o arquivo db.js linha à linha.

    ## linha à linha:

    1. na linha 1 importamos o **Sequelize** do "sequelize" após instala-lo no projeto com o comando `npm install sequelize`.

    3. na linha 3 criamos uma váriavel e a exportamos, essa variável será uma referencia ao **Sequelize** que foi importado anteriormente. agora esta variável terá acesso a todos os métodos do sequelize. essa instancia do sequelize recebe 4 parâmetros importantes para que seja possível a conexão com o banco de dados:
        - _nome do banco de dados_
        - _usuário no banco de dados (geralmente 'root')_
        - _senha do usuário do banco de dados_
        - _um objeto que recebe 2 parâmetros_
            - _host_ : que é a URL onde encontra-se o banco de dados.
            - _dialect_ : que é qual banco de dados estamos usando (é importante assegurar de instalar o dialect expecifico para cada banco de dados, onde para o MySQL usamos o mysql2 `npm install mysql2`).

    ---

    2. # API/banco_dados/model.js

    > detalhamento do arquivo model.js que cria o modelo da tabela no banco de dados.

    1. na primeira linha importamos o **Sequelize** do "sequelize. (para que possamos ter acesso a alguns métodos. como por exemplo o método _type_ para definir o tipo dos valores de cada coluna na tabela).

    3. agora estamos importando o **{ sequelize }** do arquivo db.js (que é a instancia do sequelize que se conecta ao banco de dados).

    5. estamos criando e exportando uma variável que irá receber o método **define()** do **{sequelize}**, este método recebe dois argumentos, o primeiro é o nome da tabela dentro do banco de dados informado no arquivo **db.js** e o segundo é um objeto que recebe as configurações das colunas.
        - da linha 6 à linha 14 definimos o nome de cada coluna e passamos um onjeto para cada coluna que receberá suas configurações `nome: { type: Sequelize.STRING }` <- neste exemplo definimos uma tabela chamada _nome_ que recebe um objeto com a configuração de _type_ (já que estamos usando o sequelize devemos chamá-lo e definir o tipo a partir dele como está no exemplo).

    ---

    3. # API/banco_dados/server.js

    > Detalhamento de como está funcionando o arquivo server.js linha à linha.

    ## linha à linha:

    **Método .Create**

    1. importando o framework express, em projetos node puros a importação se dá pelo método **require** do node, e em outros casos basta usar a palavra reservada **import**.

    3. importando o **CORS**. após instalar o cors com o comando `npm install cors`, basta importar dentro do arquivo de servidor. o cors permite que diferentes aplicações possam se conectar através da internet a partir de algumas configurações.
    - 15. usamos o **cors** como middleware no app, podemos omitir quaisquer valores e assim permitir que o servidor possa ser acessado de qualquer origem, mas também podemos passar alguns parametros para controlar o acesso como os parametros **origin, methods e credentials**.

    5. importamos o **body-parser**, após instalar o body-parse com `npm install body-parser` o importamos dentro do servidor. o body-parser é respnsável por formatar os dados que são recebidos e enviados entre o front e o servidor e podem ser acessados através do parâmetro *REQ*.
    - 14. usamos o body-parser como um middleware para trabalhar com arquivos do tipo json `app.use(bodyParser.json())`.

    7. criamos uma váriável que recebe um número (8080) e este número será passado futuramente ao método **.listen** como a porta em que o servidor irá rodar.

    9. estamos importando **MeuBanco** que é o model da nossa tabela existente no nosso banco de dados, é através deste model que serão chamadas quaisquer operações de manipulaçao do banco de dados.

    11. criamos uma váriável e atribuimos para ela o objeto **express()**, agora esta variável tem acesso á todos os recursos do express, como manipulação de rotas entre outros.

    20. aqui estamos usandop a variável que referencia o express para criar a primeira rota, que neste caso é uma rota padrão "/". ela é do tipo get e após passar a rota, incluimos uma vírgula e passamos uma função de callback que irá receber como parametros os requisitos e as respostas. neste caso, estamos usando o argumento **res** para exibir uma mensagem no client através do método *send*.

    23. aqui temos uma segunda rota, desta vez usando o método *post* que é usado para enviar dados ao servidor, e está atuando na rota /adicionar, recebe então uma função assíncrona já que iremos realizar uma operação de crud que leva um tempo até ser realizada, então é fundamental que a função seja do tipo assíncrona.
    - 24. estamos (tentando) imprimir no client uma mensagem de olá.
    - 25. aqui iniciamos um bloco **try** para tratar os dados caso bem sucedidos
    - nas linhas 26, 27 e 38 temos 3 variáveis recebendo do argumento **REQ** e do body-parser as variáveis nome,email e idade respectivamente (ex: `const nome = req.body.nome`).

    30. na linha 30 criamos uma função assíncrona chamada **AdicionarValores** essa função é assíncrona pois vai realizar uma operação de crud que demanda tempo até ser concluída.

    31. aqui criamos uma variável NovosValores que irá receber o modelo da nossa tabela e usar o método .create nele: `const NovosValores = Model.create()`.
    - nas linhas 32,33 3 34 passamos para cada coluna os valores dentro das respectivas variáveis assimilando-as.

    36. ainda dentro desta função executamos ao final um console.log com uma mensagem que diz que a execução foi concluída com sucesso.

    38. por fim, na linha 38 chamamos a função (pois assim que a rota for acessada a função é disparada).

    39. ao finalizar o bloco **try** criamos o bloco **catch** que vai executar algo quando **try** não for possível.

    40. o bloco **catch** realiza um console.log de uma mensagem e exibe o erro obtido na tentativa do bloco **try**.

    ---

    **Método Update**

    44. criamos a rota **/atualizar** que utiliza o método **post** para enviar e receber dados do servidor. e passamos uma função assíncrona que recebe os parametros de requisição e resposta(**req e res**). a função passadaé assíncrona pois a rota /atualizar vai executar a função **update** que demora um tempo até ser concluída.

    45. criamos o bloco **try** para tratar caso tudo esteja correto.
    - nas linhas 46, 47 e 48 criamos 3 variáveis que vão respectivamente, receber o valor antigo da tabela, o novo valor a ser inserido na tabela e o nome da coluna onde estas informações serão atualizadas.

    50. na linha 50 criamos uma função assíncrona para atualizar os dados.

    51. na linha 51 criamos uma varável e passamos para ela `await MeuBanco.update()` que é o método de atualização de dados em tabelas.
    - nas linhas 52 e 53 nós estamos criando variáveis no servidor que vão receber as variáveis passadas pelo front-end através do **body-parser**
    > aqui nós temos alguns detalhes importantes onde, por exemplo, não é possível passar umva variável diretamente como nome da coluna, então aqui nós estamos passando onde é a especificação da coluna a variável correspondente a coluna dentro de colchetes (como se fosse um array) da seguinte forma: `{[variavel_coluna] : variavel_novo_valor}, {where : {[variavel_coluna] : variavel_novo_valor}}`. se não forem colocados os colchetes será impresso um erro onde o Sequelize não irá entender os valores da coluna da tabela!
    **whereClause** : o whereClause é uma forma de definir condições de busca (where) de forma dinâmica onde primeiro nós chamamos o whereClause da seguinte forma : `const whereClause = {}` agora podemos dentro do whereClause passar tanto a variável com o nome da coluna como o novo valor (ou o valor antigo) da seguinte forma: `whereClause[variavel_coluna] = variavel_novo_valor_ou_antigo_valor`.

    56. na linha 56 chamamos a função que acabamos de criar.

    57. aqui temos o bloco de tratamento de erros **catch** tratando as mensagens de erro caso haja algum problema com a atualização dos dados no banco de dados.

    ---

    **Método Destroy**

    62. aqui nós criamos uma rota **/remover** com o método post para enviar ou receber dados do servidor. passamos uma função assíncrona que recebe os parâmetros de requisição e de resposta (**req e res**) para realizar as operações de eliminação de dado na tabela.

    63. na linha 63 criamos o bloco de tratamento **try**.
    - nas linhas 64 e 65 nós criamos duas variáveis que vão receber 2 valores passados pelo front-end através do argumento de requisição (req) atravéas do **body-parser**.

    67. na linha 67 criamos uma função assíncrona que vai realizar as operações de CRUD com o método **destroy()**.
    - na linha 68 criamos a variável **whereClause** que cria as condições de busca de forma dinamica.
    -na linha 69 passamos para dentro da variável whereClause a variável que tem o nome da coluna e a variável que contém o valor exstente na tabela que deverá ser buscado e excluído: `whereClause[variavel_coluna] : variavel_valor_existente`.

    70. na linha 70 criamos a variável que vai receber o método **destroy** `const removerDados = await MeuBanco.destroy()`.
    - na linha 71 passamos para dentro do método destroy um objeto que recebe um where para buscar na tabela o nome da coluna e o valor contido nela, esses valores foram definidos previamente dentro da variável whereClause então passamos ela: `{where: whereClause}` (onde whereClause = [nome_coluna] : valor_coluna).

    74. na linha 74 chamamos a função RemoverValor() para iniciar a operação de esclusão no banco de dados.

    75. bloco catch para tratamento dos erros com a exclusão.

    79. finalizamos com o método **.listen** que recebe dois argumentos, sendo eles a porta que o servidor vai operar e uma função de callback que neste caso estará exibindo um console.log de sucesso ao conectar ao banco de dados (podemos linkar um .then ou .catch para tratar essa função)

    ---

    **Método FindAll**
    82. na linha 82 temos uma rota para **/listarTudo** e que revebe uma função assíncrona com os parametros de requisição e de resposta **(req, res)**.

    83. na linha 83 iniciamos um bloco **try** para tratamento do sucesso da requisição.
    - nas linhas 84 e 85 definimos duas variáveis dentro do servidor que irão receber os valores passados do front ao backend através do argumento **req** tratado pelo **body-parser**.

    86. na linha 86 criamos uma variável que vai receber o método **findAll()** .
    - nas linhas 87, 90 e 93 temos três blocos if/else que irão salvar na lista apenas os valores que correpondam a coluna especificada na condição.

    96. aqui na linha 96 estamos enviando de volta ao front end os dados obtidos com a requisição realizada através do argumento **res** e o método **send**: `res.send(dados_para_o_front)`;

    97. temos o bloco **catch** para tratamento dos erros.

2. # **src**

1. > detalhamento das funções de requisição de cada componente.

    1. **src/components/adicionar.jsx**:
    - Temos uma função assíncrona _AdicionarDados()_;
    - Criamos um objeto que recebe os estados _nome, email, idade_ ( é importante observar que ao enviar dados para o servidor, estes dados estejam dentro de um objeto).
    -  Iniciamos então os blocos de tratamento de erros **try/catch** para lidar com o sucesso e a falha de requisição.
    - criamos uma variável _AdicionarDados_ que irá realizar o **fetch()** para a url específica para adição de dados na API. `const AdicionarDados = await fetch("url")`.
        - o método _fetch_ recebe dois argumentos, o primeiro é a url para onde iremos fazer a requisição e o segundo são informações de cabeçalho como o _method, body, headers_.
    - Por fim o bloco **catch** apenas exibirá uma mensagem no console em caso de falha.

    2. **src/components/atualizar.jsx**
    - Temos uma função _AtualizarDados()_;
    - criamos uma variável _dados_ que recebe um objeto:
        ``
        const dados = {
            previousValue: dadoAntigo,
            newValue: dadoNovo,
            option: option,
        }
        ``
        >o objeto recebe pares de chave/valor onde a chave será chamada no backend e ela conterá o valor
    - Iniciamos o bloco de tratamento de erros **try/catch**.
    - Criamos uma variável _atualizarDados_ que irá receber o método **fetch()**, recebendo a url especifica para realizar o método **update()** no banco de dados e as informações de cabeçalho.
    - Pro fim temos o bloco **catch** tratando o erro exibindo uma mensagem no console.

    3. **src/components/atualizar.jsx**
    {!--continua a partir daqui!--}
















