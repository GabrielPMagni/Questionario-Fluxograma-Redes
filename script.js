//document.getElementById('pergunta2-1').style.display = 'none';
//document.getElementById('pergunta-sem-acesso').style.display = 'none';


//pergunta se está sem acesso ou quedas/lentidão
function executar1(){
    if (document.getElementById('sem-acesso').checked){
        document.getElementById('pergunta1').style.display = 'none';
        document.getElementById('pergunta-sem-acesso').style.display = 'block';
    } 
    //else if (document.getElementById('internet-fibra').checked){
    //     document.getElementById('pergunta1').style.display = 'none';
    //     document.getElementById('pergunta2-2').style.display = 'block';
    // }
}


//pergunta se está sem acesso no rádio ou fibra
function executar_sem_acesso(){
    if (document.getElementById('via-radio').checked){
        document.getElementById('pergunta-sem-acesso').style.display = 'none';
        //document.getElementById('pergunta-sem-acesso-radio').style.display = 'block';
        document.getElementById('resposta').innerText = 'Solução:\nConferir se ponto de acesso ou retransmissor está online';
    } else if (document.getElementById('via-fibra').checked){
        document.getElementById('pergunta-sem-acesso').style.display = 'none';
        document.getElementById('pergunta-leds-fibra').style.display = 'block';
        document.getElementById('lembrete').innerText = 'Lembrete:\nVerificar se cliente está no local. Se não estiver, verificar se há alguém no local ou horário para realizar testes. Solicitar que sejam reiniciados equipamentos. Verificar se há um LED aceso em vermelho no Conversor Óptico. (Muitos condomínios tem uma ONU compartilhada, não estando disponível para que o cliente no apartamento visualize)';
    }
}

//pergunta sobre estado da ONU
function executar_estado_leds_onu(){
    if (document.getElementById('led-vermelho').checked){
        document.getElementById('pergunta-leds-fibra').style.display = 'none';
        //document.getElementById('pergunta-led-vermelho').style.display = 'block';
        document.getElementById('resposta').innerText = 'Solução:\nEm caso de persistir aceso LED vermelho após reinicio dos equipamentos, será necessária visita técnica para reparo. Provável rompimento de fibra óptica. Verificar se outros clientes na mesma PON estão sem acesso, caracterizando massiva';
        document.getElementById('lembrete').style.display = 'none';
    } else if (document.getElementById('led-verde').checked){
        document.getElementById('pergunta-leds-fibra').style.display = 'none';
        //document.getElementById('pergunta-led-verde').style.display = 'block';
        document.getElementById('resposta').innerText = 'Solução:\nAjustar DNS para o padrão caso não esteja, confirmar acesso ao roteador e verificar cabos de energia - também cabo de rede da ONU para o roteador, se está na porta correta. Caso retorne acesso, validar configurações';
        document.getElementById('lembrete').innerText = 'Lembrete:\nSe só houverem LEDs acesos em verde, verificar acesso aos equipamentos. Conectados equipamentos, verificar se DNS está corretamente configurado. Verificar se roteador está desligado. Estando roteador ligado mas sem rede WiFi, verificar se foi resetado ou configurado erroneamente. Se for RB, verificar modelo para caso possua ou não';
    } else if (document.getElementById('sem-led').checked){
        document.getElementById('pergunta-leds-fibra').style.display = 'none';
        //document.getElementById('pergunta-led-apagado').style.display = 'block';
        document.getElementById('resposta').innerText = 'Solução:\nSe não há nenhum LED acesso, equipamentos podem estar desligados. Verificar reinicio dos equipamentos (roteador, ONU), e se cabos de energia estão devidamente conectados às portas correspondentes';
        document.getElementById('lembrete').style.display = 'none';
    } else if (document.getElementById('sem-onu').checked){
        document.getElementById('pergunta-leds-fibra').style.display = 'none';
        document.getElementById('pergunta-sem-onu').style.display = 'block';
        document.getElementById('resposta').innerText = 'Solução:\nVerificado que roteador/RB está sem acesso e devidamente ligada e não havendo acesso aos equipamentos remotamente nem sendo possível verificação pelo cliente, será necessário deslocamento técnico para reparo no local';
    }
}


// function executar2(){
//     if (document.getElementById('internet-lenta').checked){
//         document.getElementById('pergunta2-1').style.display = 'none';
//         document.getElementById('pergunta3-1').style.display = 'block';
//     } else if (document.getElementById('internet-caiu').checked){
//         document.getElementById('pergunta2-1').style.display = 'none';
//         document.getElementById('pergunta3-2').style.display = 'block';
//     }
// }


//RESPOSTAS ---------------------------------





//LEMBRETE ---------------------------------


