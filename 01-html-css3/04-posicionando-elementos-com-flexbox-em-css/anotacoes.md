## Flex Container
### **Propriedades relacionadas:**
- ```display```
Inicializador do container

- ```flex-direction```
Fazer o direcionamento dos itens, seja em linhas ou colunas

- ```flex-wrap```
Direcionar para quebra de linha ou não

- ```flex-flow```
Abreviação para direction ou wrap

- ```justify-content```
Alinhar os itens do container de acordo com a sua direção

  - ```flex-start``` 
  Alinhar os itens no início do container

  - ```flex-end```
  Final do container

  - ```center```
  Ao centro do container

  - ```space-between```
  Cria um espaçamento igual entre os elementos

  - ```space-around```
  Os espaçamentos do meio são duas vezes maiores que o inicial e final

- ```align-items```
Alinhar os itens de acordo com o eixo do container

- ```align-content```
Alinhar as linhas do container

## Flex Item
##### _São os elementos filhos do Flex Container. E também podem se tornar Flex Container._

### **Propriedades relacionadas:**
- ```flex-grow```
Definir o fator do crescimento

- ```flex-basis```
Definir o tamanho inicial do item antes da distribuição de espaço restante dentro do container

- ```flex-shrink```
Define a capacidade de redução

- ```flex```
Abreviação para as últimas 3 propriedades

- ```order```
Ordem de distribuição e listagem do itens

- ```align-self```
Alinhamento de um item específico do container

## Eixo do Container
- ```row``` (padrão)
À direção do texto, esquerda para direita

1 - 2 - 3 - 4
     ===>
     
- ```row-reverse```
Sentido oposto à direção do texto

4 - 3 - 2 - 1
    <===

- ```column```
Ordenação de cima para baixo, em coluna única

- ```column-reverse```
Ordenação inversa, de baixo para cima
