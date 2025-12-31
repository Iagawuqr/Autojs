// raw.js - Código Auto JJS protegido
// by sla_midd

(function() {
    'use strict';
    
    // ============================================
    // SISTEMA DE PROTEÇÃO
    // ============================================
    
    // Lista de User-Agents bloqueados
    const blockedAgents = [
        'curl', 'wget', 'python', 'perl', 'libwww',
        'scraper', 'crawler', 'spider', 'bot', 'robot',
        'http-client', 'go-http-client', 'java', 'okhttp',
        'postman', 'insomnia', 'thunder-client'
    ];
    
    // Obter User-Agent
    const userAgent = (typeof navigator !== 'undefined' && navigator.userAgent) ? 
                     navigator.userAgent.toLowerCase() : '';
    
    // Verificar se é ferramenta bloqueada
    let isBlocked = false;
    for (const agent of blockedAgents) {
        if (userAgent.includes(agent)) {
            isBlocked = true;
            break;
        }
    }
    
    // Se for navegador normal (não Roblox), mostrar página HTML
    const isBrowser = userAgent.includes('mozilla') || 
                     userAgent.includes('chrome') || 
                     userAgent.includes('safari') || 
                     userAgent.includes('edge');
    
    const isRoblox = userAgent.includes('roblox') || 
                    window.location.href.includes('roblox');
    
    // ============================================
    // RESPOSTA PARA DIFERENTES CLIENTES
    // ============================================
    
    if (isBlocked) {
        // Para ferramentas de download
        document.write('-- BLOQUEADO POR SEGURANCA\n');
        document.write('-- Este script só pode ser executado no Roblox\n');
        document.write('-- by sla_midd\n');
    } else if (isBrowser && !isRoblox) {
        // Para navegadores normais
        document.write('<html><head><title>Acesso Restrito</title></head>');
        document.write('<body style="background:#000;color:#fff;padding:20px;font-family:monospace">');
        document.write('<h1>🔒 ACESSO RESTRITO</h1>');
        document.write('<p>Este código só pode ser executado no Roblox.</p>');
        document.write('<p>Use: <code>loadstring(game:HttpGet("' + window.location.href + '"))()</code></p>');
        document.write('<p>by sla_midd</p>');
        document.write('</body></html>');
    } else {
        // Para Roblox ou execução direta - ENVIAR CÓDIGO LUA
        document.write('--[[\n');
        document.write('    AUTO JJS PREMIUM - JS VERSION\n');
        document.write('    Desenvolvedor: sla_midd\n');
        document.write('    Data: ' + new Date().toLocaleDateString('pt-BR') + '\n');
        document.write('    Hospedado em: ' + window.location.hostname + '\n');
        document.write(']]\n\n');
        
        document.write('local Rayfield = loadstring(game:HttpGet("https://raw.githubusercontent.com/shlexware/Rayfield/main/source.lua"))()\n\n');
        
        document.write('local Window = Rayfield:CreateWindow({\n');
        document.write('    Name = "Auto JJS Premium",\n');
        document.write('    LoadingTitle = "Carregando...",\n');
        document.write('    LoadingSubtitle = "by sla_midd - JS Hosted",\n');
        document.write('    ConfigurationSaving = {\n');
        document.write('        Enabled = true,\n');
        document.write('        FolderName = "JJSAutoConfig",\n');
        document.write('        FileName = "Config"\n');
        document.write('    },\n');
        document.write('    KeySystem = false\n');
        document.write('})\n\n');
        
        document.write('local MainTab = Window:CreateTab("Principal", 4483362458)\n\n');
        
        document.write('local function fazerPulo()\n');
        document.write('    local player = game.Players.LocalPlayer\n');
        document.write('    local character = player.Character\n');
        document.write('    if character and character:FindFirstChild("Humanoid") then\n');
        document.write('        character.Humanoid.Jump = true\n');
        document.write('        task.wait(0.08)\n');
        document.write('        character.Humanoid.Jump = false\n');
        document.write('    end\n');
        document.write('end\n\n');
        
        document.write('local function numeroPorExtenso(n)\n');
        document.write('    if n < 0 or n > 5000 then return tostring(n) end\n');
        document.write('    \n');
        document.write('    local unidades = {"zero","um","dois","tres","quatro","cinco","seis","sete","oito","nove"}\n');
        document.write('    local especiais = {\n');
        document.write('        [10]="dez",[11]="onze",[12]="doze",[13]="treze",[14]="quatorze",\n');
        document.write('        [15]="quinze",[16]="dezesseis",[17]="dezessete",[18]="dezoito",[19]="dezenove"\n');
        document.write('    }\n');
        document.write('    local dezenas = {\n');
        document.write('        [2]="vinte",[3]="trinta",[4]="quarenta",[5]="cinquenta",\n');
        document.write('        [6]="sessenta",[7]="setenta",[8]="oitenta",[9]="noventa"\n');
        document.write('    }\n');
        document.write('    local centenas = {\n');
        document.write('        [1]="cem",[2]="duzentos",[3]="trezentos",[4]="quatrocentos",\n');
        document.write('        [5]="quinhentos",[6]="seiscentos",[7]="setecentos",\n');
        document.write('        [8]="oitocentos",[9]="novecentos"\n');
        document.write('    }\n');
        document.write('    \n');
        document.write('    if n < 10 then\n');
        document.write('        return unidades[n+1]\n');
        document.write('    elseif n < 20 then\n');
        document.write('        return especiais[n]\n');
        document.write('    elseif n < 100 then\n');
        document.write('        local d = math.floor(n/10)\n');
        document.write('        local u = n % 10\n');
        document.write('        if u == 0 then\n');
        document.write('            return dezenas[d]\n');
        document.write('        else\n');
        document.write('            return dezenas[d] .. " e " .. unidades[u+1]\n');
        document.write('        end\n');
        document.write('    elseif n < 1000 then\n');
        document.write('        local c = math.floor(n/100)\n');
        document.write('        local resto = n % 100\n');
        document.write('        if n == 100 then\n');
        document.write('            return "cem"\n');
        document.write('        elseif resto == 0 then\n');
        document.write('            return centenas[c]\n');
        document.write('        else\n');
        document.write('            local prefixo = (c == 1) and "cento" or centenas[c]\n');
        document.write('            return prefixo .. " e " .. numeroPorExtenso(resto)\n');
        document.write('        end\n');
        document.write('    else\n');
        document.write('        local milhar = math.floor(n/1000)\n');
        document.write('        local resto = n % 1000\n');
        document.write('        local prefixo = (milhar == 1) and "mil" or unidades[milhar+1] .. " mil"\n');
        document.write('        \n');
        document.write('        if resto == 0 then\n');
        document.write('            return prefixo\n');
        document.write('        else\n');
        document.write('            return prefixo .. " e " .. numeroPorExtenso(resto)\n');
        document.write('        end\n');
        document.write('    end\n');
        document.write('end\n\n');
        
        document.write('local function enviarMensagem(texto)\n');
        document.write('    local ReplicatedStorage = game:GetService("ReplicatedStorage")\n');
        document.write('    local chatEvents = ReplicatedStorage:FindFirstChild("DefaultChatSystemChatEvents")\n');
        document.write('    \n');
        document.write('    if chatEvents and chatEvents:FindFirstChild("SayMessageRequest") then\n');
        document.write('        chatEvents.SayMessageRequest:FireServer(texto, "All")\n');
        document.write('        fazerPulo()\n');
        document.write('        return true\n');
        document.write('    end\n');
        document.write('    return false\n');
        document.write('end\n\n');
        
        // Interface completa do Auto JJS
        document.write('local StartInput = MainTab:CreateInput({\n');
        document.write('    Name = "Numero Inicial",\n');
        document.write('    PlaceholderText = "0",\n');
        document.write('    RemoveTextAfterFocusLost = false,\n');
        document.write('    Callback = function(Text)\n');
        document.write('        local num = tonumber(Text)\n');
        document.write('        if num and num < 0 then\n');
        document.write('            StartInput:Set("0")\n');
        document.write('        end\n');
        document.write('    end\n');
        document.write('})\n\n');
        
        document.write('local EndInput = MainTab:CreateInput({\n');
        document.write('    Name = "Numero Final",\n');
        document.write('    PlaceholderText = "5000",\n');
        document.write('    RemoveTextAfterFocusLost = false,\n');
        document.write('    Callback = function(Text)\n');
        document.write('        local num = tonumber(Text)\n');
        document.write('        if num and num > 5000 then\n');
        document.write('            EndInput:Set("5000")\n');
        document.write('        end\n');
        document.write('    end\n');
        document.write('})\n\n');
        
        document.write('local SpeedInput = MainTab:CreateInput({\n');
        document.write('    Name = "Velocidade (segundos)",\n');
        document.write('    PlaceholderText = "1",\n');
        document.write('    RemoveTextAfterFocusLost = false,\n');
        document.write('    Callback = function(Text)\n');
        document.write('        local num = tonumber(Text)\n');
        document.write('        if num then\n');
        document.write('            if num < 0.1 then\n');
        document.write('                SpeedInput:Set("0.1")\n');
        document.write('            elseif num > 10 then\n');
        document.write('                SpeedInput:Set("10")\n');
        document.write('            end\n');
        document.write('        end\n');
        document.write('    end\n');
        document.write('})\n\n');
        
        document.write('local SufixoInput = MainTab:CreateInput({\n');
        document.write('    Name = "Sufixo",\n');
        document.write('    PlaceholderText = "!",\n');
        document.write('    RemoveTextAfterFocusLost = false,\n');
        document.write('    Callback = function(Text) end\n');
        document.write('})\n\n');
        
        document.write('local AutoPuloToggle = MainTab:CreateToggle({\n');
        document.write('    Name = "Pulo Automatico",\n');
        document.write('    CurrentValue = true,\n');
        document.write('    Flag = "AutoPulo",\n');
        document.write('    Callback = function(Value) end\n');
        document.write('})\n\n');
        
        document.write('local rodando = false\n');
        document.write('local tarefa = nil\n\n');
        
        document.write('local StartButton = MainTab:CreateButton({\n');
        document.write('    Name = "INICIAR AUTO JJS",\n');
        document.write('    Callback = function()\n');
        document.write('        if rodando then\n');
        document.write('            Rayfield:Notify({\n');
        document.write('                Title = "Aviso",\n');
        document.write('                Content = "Ja esta em execucao!",\n');
        document.write('                Duration = 3\n');
        document.write('            })\n');
        document.write('            return\n');
        document.write('        end\n');
        document.write('        \n');
        document.write('        local inicio = tonumber(StartInput.Value) or 0\n');
        document.write('        local fim = tonumber(EndInput.Value) or 5000\n');
        document.write('        local delay = tonumber(SpeedInput.Value) or 1\n');
        document.write('        local sufixo = SufixoInput.Value or ""\n');
        document.write('        \n');
        document.write('        if inicio < 0 then inicio = 0 end\n');
        document.write('        if fim > 5000 then fim = 5000 end\n');
        document.write('        if inicio > fim then\n');
        document.write('            Rayfield:Notify({\n');
        document.write('                Title = "Erro",\n');
        document.write('                Content = "Numero inicial maior que final!",\n');
        document.write('                Duration = 3\n');
        document.write('            })\n');
        document.write('            return\n');
        document.write('        end\n');
        document.write('        \n');
        document.write('        if delay < 0.1 then delay = 0.1 end\n');
        document.write('        if delay > 10 then delay = 10 end\n');
        document.write('        \n');
        document.write('        Rayfield:Notify({\n');
        document.write('            Title = "Iniciando",\n');
        document.write('            Content = "De " .. inicio .. " ate " .. fim .. " (" .. delay .. "s)",\n');
        document.write('            Duration = 3\n');
        document.write('        })\n');
        document.write('        \n');
        document.write('        rodando = true\n');
        document.write('        \n');
        document.write('        tarefa = task.spawn(function()\n');
        document.write('            for i = inicio, fim do\n');
        document.write('                if not rodando then break end\n');
        document.write('                \n');
        document.write('                local texto_numero = numeroPorExtenso(i)\n');
        document.write('                local mensagem_completa = string.upper(texto_numero)\n');
        document.write('                \n');
        document.write('                if sufixo ~= "" then\n');
        document.write('                    mensagem_completa = mensagem_completa .. " " .. sufixo\n');
        document.write('                end\n');
        document.write('                \n');
        document.write('                local sucesso = enviarMensagem(mensagem_completa)\n');
        document.write('                \n');
        document.write('                if not sucesso then\n');
        document.write('                    Rayfield:Notify({\n');
        document.write('                        Title = "Erro",\n');
        document.write('                        Content = "Nao foi possivel enviar mensagem",\n');
        document.write('                        Duration = 3\n');
        document.write('                    })\n');
        document.write('                    rodando = false\n');
        document.write('                    break\n');
        document.write('                end\n');
        document.write('                \n');
        document.write('                task.wait(delay)\n');
        document.write('            end\n');
        document.write('            \n');
        document.write('            rodando = false\n');
        document.write('            Rayfield:Notify({\n');
        document.write('                Title = "Concluido",\n');
        document.write('                Content = "Auto JJS finalizado!",\n');
        document.write('                Duration = 3\n');
        document.write('            })\n');
        document.write('        end)\n');
        document.write('    end\n');
        document.write('})\n\n');
        
        document.write('local StopButton = MainTab:CreateButton({\n');
        document.write('    Name = "PARAR AUTO JJS",\n');
        document.write('    Callback = function()\n');
        document.write('        if rodando then\n');
        document.write('            rodando = false\n');
        document.write('            if tarefa then\n');
        document.write('                task.cancel(tarefa)\n');
        document.write('            end\n');
        document.write('            Rayfield:Notify({\n');
        document.write('                Title = "Parado",\n');
                document.write('                Content = "Interrompido!",\n');
        document.write('                Duration = 3\n');
        document.write('            })\n');
        document.write('        end\n');
        document.write('    end\n');
        document.write('})\n\n');
        
        document.write('StartInput:Set("0")\n');
        document.write('EndInput:Set("5000")\n');
        document.write('SpeedInput:Set("1")\n');
        document.write('SufixoInput:Set("!")\n\n');
        
        document.write('Rayfield:Notify({\n');
        document.write('    Title = "Auto JJS Carregado",\n');
        document.write('    Content = "Configure e clique em INICIAR",\n');
        document.write('    Duration = 5\n');
        document.write('})\n\n');
        
        document.write('print("===========================================")\n');
        document.write('print("Auto JJS Premium by sla_midd")\n');
        document.write('print("Hospedado em: ' + window.location.hostname + '")\n');
        document.write('print("===========================================")\n');
    }
    
    document.close();
})();