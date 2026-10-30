# Curadoria das imagens

Ferramenta: image_gen integrada, com uma geração individual por referência. As imagens foram refeitas com IA e identificadas como recriações no site. Não são novos registros fotográficos dos serviços. As nove referências foram utilizadas, nenhuma foi descartada.

| Referência | Arquivo em src/assets | Uso |
| --- | --- | --- |
| 1 | pastilha-usada.webp | Galeria, detalhe de desgaste |
| 2 | freios.webp | Galeria, peça nova junto ao conjunto de freio |
| 3 | pintura.webp | Seção de serviços e abertura da galeria |
| 4 | insulfilm.webp | Galeria, comparação da película no vidro |
| 5 | kawasaki-orla.webp | Seção exclusiva de motos |
| 6 | kawasaki-patio.webp | Primeira foto da seção de motos |
| 7 | honda-orla.webp | Seção exclusiva de motos |
| 8 | peugeot.webp | Galeria, após fotos de processo |
| 9 | volvo.webp | Hero e final da galeria de carros |

A sequência das pastilhas mostra desgaste e peça nova, sem afirmar que as fotos documentam o mesmo reparo. A comparação do insulfilm mantém a deterioração original e a área limpa, removendo os símbolos sobrepostos. As imagens antigas deixaram de ser referenciadas pela página.

## Prompts utilizados

Direção comum: recriar a fotografia de referência do zero como fotografia documental natural de alta qualidade, preservando cena, veículo, peças, ângulo e contexto. Primeiro remover interface do Instagram, setas, pontos, ícones de áudio, perfil e reels e bordas de captura. Melhorar resolução percebida, detalhe óptico, exposição e cores naturais, mantendo materiais reais. Remover marcas d'água, textos sobrepostos e identificação de outros negócios. Não adicionar objetos, redesenhar peças ou criar texturas sintéticas, brilho artificial ou colagens.

Especificações individuais enviadas junto da direção comum:

1. Mão segurando diagonalmente a mesma pastilha de freio rachada e desgastada sobre mesa escura, com objeto redondo claro no canto superior direito. Preservar desgaste, danos, composição e perspectiva.
2. Mão segurando pastilha nova ao lado do disco exposto sobre brita. Preservar anatomia, conjunto e ferramentas.
3. Traseira esquerda do mesmo hatch verde escuro, com papel pardo, plástico e fita amarela na oficina de pintura. Preservar mascaramento, curvas e roda.
4. Vidro lateral do mesmo carro bordô, película deteriorada à esquerda e vidro reflexivo limpo à direita. Preservar comparação, geometria e reflexos. Remover X vermelho, check verde, divisor branco e letras de outros negócios refletidas.
5. Mesma Kawasaki Ninja verde e preta na orla de tijolos, com guarda corpo de madeira, mar e morros distantes. Preservar peças, rodas, ângulo, sombras e cenário.
6. Mesma Kawasaki Ninja verde e preta na brita da oficina, com postes, carros e Fusca cinza ao fundo. Preservar componentes, freios, rodas, pessoas e oficina.
7. Mesma Honda vermelha na orla de tijolos, vista frontal em três quartos, com guarda corpo, mar, montanhas e céu azul. Preservar moto, perspectiva e sombras.
8. Mesmo Peugeot 208 azul na brita do pátio. Preservar veículo, rodas, ângulo, enquadramento, construções, bancos pendurados e sombras.
9. Mesmo Volvo XC90 branco na brita do pátio. Preservar SUV, grade, rodas, placa, ângulo, outros carros, galpões e nuvens.

## Preparação web

Somente depois da inspeção das nove recriações foram produzidos os WebP. Todos têm 1200 por 1500 pixels, proporção 4:5, qualidade 90 e compressão método 6. O recorte das motos na orla prioriza o veículo para preservar rodas e espelhos. Arquivos finais entre 280 e 520 KB, total aproximado de 3,27 MB. Carregamento adiado nas galerias, dimensões explícitas e prioridade de carregamento para a hero.

## Validação

Build de produção, TypeScript e lint dos quatro arquivos alterados aprovados. Três testes existentes aprovados. Navegador em 1440 por 1000 e 390 por 844: sem imagens quebradas, sem rolagem horizontal, sem erros de execução, quatro grupos de serviços, seis fotos na galeria principal e três fotos na seção de motos. Menu mobile fecha após acessar Motos. Textos visíveis sem hífen, travessão ou emoji. Avaliações, autores e números mantidos conforme o código original.
