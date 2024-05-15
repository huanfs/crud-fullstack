# server.js

> Detalhamento de como está funcionando o arquivo server.js linha à linha.

---

## linha à linha:

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

44. usamos o método **.listen** para indicar em qual rota o servidor inteiro irá rodar passando como primeiro argumento a rota, este método tambem recebe uma função de callback que pode ser executada quando o servidor estiver rodando.

