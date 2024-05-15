# server.js

> Detalhamento de como está funcionando o arquivo server.js linha à linha.

---

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











