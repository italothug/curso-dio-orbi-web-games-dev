## Flex Container

### **Propriedades relacionadas:**

- `display`
  Inicializador do container

- `flex-direction`
  Fazer o direcionamento dos itens, seja em linhas ou colunas

- `flex-wrap`
  Direcionar para quebra de linha ou não

- `flex-flow`
  Abreviação para direction ou wrap

- `justify-content`
  Alinhar os itens do container de acordo com a sua direção

  - `flex-start`
    Alinhar os itens no início do container

  - `flex-end`
    Final do container

  - `center`
    Ao centro do container

  - `space-between`
    Cria um espaçamento igual entre os elementos

  - `space-around`
    Os espaçamentos do meio são duas vezes maiores que o inicial e final

- `align-items`
  Alinhar os itens de acordo com o eixo do container

  _Tipos de alinhamento_

  - `center`
    Alinhamentos dos itens no centro

  - `stretch`
    Padrão, e os flex itens crescem igualmente

  - `flex-start`
    Alinhamento dos itens no início

  - `flex-end`
    Alinhamento dos itens no final

  - `baseline`
    Alinhamento de acordo com a linha base da tipografia dos itens

- `align-content`
  Alinhar as linhas do container em relação ao eixo vertical do container

  _Precisamos que:_

  - _O container utilize quebra de linhas_

  - _A altura do container seja maior que a soma das linhas dos itens_

  _Tipos de alinhamento_

  - `center`
    Alinhamentos dos itens no centro

  - `stretch`
    Padrão, e os flex itens crescem igualmente

  - `flex-start`
    Alinhamento dos itens no início

  - `flex-end`
    Alinhamento dos itens no final

  - `space-between`
    Cria um espaçamento igual entre os elementos

  - `space-around`
    Os espaçamentos do meio são duas vezes maiores que o inicial e final

## Flex Item

_São os elementos filhos do Flex Container. E também podem se tornar Flex Container._

### **Propriedades relacionadas:**

- `flex-grow`
  Definir o fator do crescimento

- `flex-basis`
  Definir o tamanho inicial do item antes da distribuição de espaço restante dentro do container

  _Valores possíveis:_

  - `auto`
    Caso o item não tenha tamanho, este será proporcional ao conteúdo do item

  - `px, %, em, ...`
    São valores exatos previamente definidos

  - `0 (zero)`
    Terá relação com a definição do flew-grow

- `flex-shrink`
  Define a capacidade de redução ou compressão do tamanho de um item

- `flex`
  Abreviação para as últimas 3 propriedades

  - `flex-grow / flex-shrink / flex-basis`

  - Esta propriedade é um atalho ou abreviação de escrita, podendo dar valor aos 3 no mesmo tempo usando `1 (valor para grow), 0 (valor para shrink), auto (valor para basis)`

- `order`
  Ordem de distribuição e listagem do itens

- `align-self`
  Alinhamento de um item específico do container

  - `auto`
  Valor padrão, irá respeitar a definição de align-items do container

  - `flex-start`
  Ao início do container

  - `flex-end`
  Ao final do container

  - `center`
  Relativo ao centro de acordo com o eixo

  - `stretch`
  Ocupa todo os espaço relativo

  - `baseline`
  Utiliza a linha base da tipografia

## Eixo do Container

- `row` (padrão)
  À direção do texto, esquerda para direita

1 - 2 - 3 - 4
===>

- `row-reverse`
  Sentido oposto à direção do texto

4 - 3 - 2 - 1
<===

- `column`
  Ordenação de cima para baixo, em coluna única

1

2

3

4

- `column-reverse`
  Ordenação inversa, de baixo para cima

4

3

2

1
