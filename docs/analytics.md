# Cliques de WhatsApp no GA4

O site tem 13 links de WhatsApp, com 12 origens. A origem `localizacao` é usada na seção de localização e no aviso de domingo. Os identificadores `data-analytics-event="whatsapp_click"` e `data-whatsapp-source` foram preservados.

## Estado atual

Não há propriedade GA4 nem Google tag configurados no projeto. O adaptador está preparado, mas não há coleta real ativada. O arquivo `.env.example` deixa o ID vazio. Nenhum script de terceiros, cookie, banner ou ID demonstrativo foi instalado.

O evento é emitido uma vez pelo componente `WhatsAppLink`, com nome `whatsapp_click` e parâmetro `section`. O parâmetro `send_to` limita o envio à propriedade informada. Não há um segundo `dataLayer.push`, listener global ou evento de lead.

## O que falta para ativar

1. Informar o ID real de medição do fluxo web da propriedade GA4 e definir `VITE_GA4_MEASUREMENT_ID` no ambiente de build. Gerar uma nova versão após configurar o valor.
2. Configurar a Google tag dessa mesma propriedade, diretamente ou por um único contêiner GTM. O carregamento da tag não é feito por este adaptador.
3. Integrar o mecanismo de consentimento escolhido pelo responsável. O estado inicial do adaptador é negado e não é persistido. A integração deve chamar `setWhatsAppAnalyticsConsent(true)` após a permissão para analytics e `setWhatsAppAnalyticsConsent(false)` se essa permissão for negada ou revogada. A integração também deve atualizar o Consent Mode da Google tag, conforme a configuração escolhida. Não basta chamar o adaptador para carregar ou configurar a Google tag.
4. Registrar no GA4 uma dimensão personalizada de escopo de evento para o parâmetro `section`, para consultar os cliques por seção nos relatórios.
5. Conferir em DebugView e Tempo real o nome, o destino e a seção. Depois testar novamente a revogação da permissão. O projeto atual não pode validar o recebimento na propriedade sem essa configuração externa.

## Evitar duplicação

O emissor deste projeto é `trackWhatsAppClick`, chamado uma vez pelo link. Ao instalar GTM, não configurar também uma tag de evento `whatsapp_click` disparada por clique ou pelos atributos HTML. O GTM pode fornecer a Google tag, mas o evento personalizado deve continuar tendo um único emissor.

O clique principal e o clique do botão do meio são tratados por eventos distintos. Uma falha na função de analytics não bloqueia a abertura do link. Cliques feitos antes da configuração ou do consentimento não são enfileirados para envio posterior.

Somente a seção é enviada como dado de interação. Não são enviados texto da mensagem, telefone, nome, conteúdo de formulário nem a URL completa de WhatsApp.

## Interpretação

`whatsapp_click` mede um clique no link. Não comprova conversa iniciada, mensagem enviada, avaliação realizada, orçamento aceito ou venda. Não há implementação de `generate_lead`.

## Referências

- [Eventos com a Google tag](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Roteamento por send_to](https://developers.google.com/tag-platform/gtagjs/routing)
- [Integração de consentimento](https://developers.google.com/tag-platform/security/guides/consent)
