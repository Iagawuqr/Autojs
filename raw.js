// raw.js - PROTEÇÃO TOTAL + CACHE
// by sla_midd

(function() {
    'use strict';
    
    // ============================================
    // DETECÇÃO DE CLIENTE
    // ============================================
    const ua = navigator.userAgent.toLowerCase();
    const ip = '<?php echo $_SERVER["REMOTE_ADDR"] ?? "unknown"; ?>';
    const timestamp = new Date().toISOString();
    
    // TIPOS DE CLIENTE
    const isBrowser = ua.includes('mozilla') || 
                     ua.includes('chrome') || 
                     ua.includes('safari') ||
                     ua.includes('edge');
    
    const isRoblox = ua.includes('roblox') || 
                    window.location.search.includes('roblox');
    
    const isExecutor = ua.includes('executor') || 
                      ua.includes('script') ||
                      ua.includes('synapse') ||
                      ua.includes('krnl');
    
    const isTool = ua.includes('curl') || 
                  ua.includes('wget') || 
                  ua.includes('python') ||
                  ua.includes('libwww') ||
                  ua.includes('perl') ||
                  ua.includes('scraper') ||
                  ua.includes('bot');
    
    // ============================================
    // BLOQUEAR FERRAMENTAS
    // ============================================
    if (isTool) {
        // Código falso para enganar scrapers
        document.write('-- ERRO: SCRIPT CORROMPIDO');
        document.write('\n-- Este arquivo foi danificado');
        document.write('\n-- Tente novamente mais tarde');
        document.write('\n-- by sla_midd');
        document.close();
        return;
    }
    
    // ============================================
    // SE FOR NAVEGADOR NORMAL
    // ============================================
    if (isBrowser && !isRoblox && !isExecutor) {
        document.write('<!DOCTYPE html>');
        document.write('<html><head><title>Acesso Restrito</title>');
        document.write('<style>');
        document.write('body{background:#0a0a0a;color:#fff;font-family:Arial,sans-serif;padding:50px;text-align:center}');
        document.write('.container{max-width:600px;margin:0 auto;background:#111;padding:30px;border-radius:10px;border:2px solid red}');
        document.write('code{background:#222;padding:15px;border-radius:5px;display:block;margin:20px 0;font-family:monospace;color:lime}');
        document.write('</style></head><body>');
        document.write('<div class="container">');
        document.write('<h1>AUTO JJS PREMIUM</h1>');
        document.write('<p>by sla_midd</p>');
        document.write('<p>Este script requer execução via Roblox Executor.</p>');
        document.write('<p>Use no Roblox:</p>');
        document.write('<code>loadstring(game:HttpGet("' + window.location.href + '"))()</code>');
        document.write('<p style="color:#888;margin-top:30px;">');
        document.write('Protegido contra acesso direto e downloads não autorizados.');
        document.write('</p>');
        document.write('</div>');
        document.write('</body></html>');
        document.close();
        return;
    }
    
    // ============================================
    // SE FOR ROBLOX/EXECUTOR - SERVIR CÓDIGO
    // ============================================
    
    // Gerar código com timestamp e IP para tracking
    const scriptCode = `--[[
    AUTO JJS PREMIUM - VERSÃO PROTEGIDA
    Desenvolvedor: sla_midd
    Data: ${timestamp}
    Cliente: ${isRoblox ? 'Roblox' : isExecutor ? 'Executor' : 'Desconhecido'}
    Proteções: Ativadas
]]

-- SISTEMA DE CACHE LOCAL
local function setupCache()
    local cacheInfo = {
        version = "2.1",
        timestamp = "${timestamp}",
        source = "${window.location.hostname}"
    }
    
    -- Verificar se tem cache salvo
    if readfile and writefile then
        local cacheFile = "auto_jjs_cache.txt"
        local cacheValid = false
        
        -- Tentar ler cache existente
        local function readCache()
            local success, exists = pcall(function()
                return isfile(cacheFile)
            end)
            
            if success and exists then
                local content = readfile(cacheFile)
                if content and #content > 100 then
                    -- Verificar se cache é recente (menos de 24 horas)
                    local pattern = "timestamp%s-=%s-\"([^\"]+)\""
                    local cacheTime = content:match(pattern)
                    if cacheTime then
                        local hoursDiff = (os.time() - os.time({year=2024,month=1,day=1,hour=0})) / 3600
                        if hoursDiff < 24 then
                            return content
                        end
                    end
                end
            end
            return nil
        end
        
        -- Salvar novo cache
        local function saveCache(code)
            pcall(function()
                writefile(cacheFile, code)
            end)
        end
        
        return {
            read = readCache,
            save = saveCache
        }
    end
    
    return {
        read = function() return nil end,
        save = function() end
    }
end

-- CARREGAR RAYFIELD
local Rayfield = loadstring(game:HttpGet("https://raw.githubusercontent.com/shlexware/Rayfield/main/source.lua"))()

local Window = Rayfield:CreateWindow({
    Name = "Auto JJS Premium",
    LoadingTitle = "Carregando...",
    LoadingSubtitle = "by sla_midd | Proteção: Ativada",
    ConfigurationSaving = {
        Enabled = true,
        FolderName = "JJSAutoConfig",
        FileName = "Config"
    },
    KeySystem = false
})

local MainTab = Window:CreateTab("Principal", 4483362458)

-- FUNÇÃO DE PULO CORRIGIDA
local function fazerPulo()
    local player = game.Players.LocalPlayer
    local character = player.Character
    if character and character:FindFirstChild("Humanoid") then
        character.Humanoid.Jump = true
        task.wait(0.08)
        character.Humanoid.Jump = false
    end
end

-- CONVERSOR DE NÚMEROS (0-5000)
local function numeroPorExtenso(n)
    if n < 0 or n > 5000 then return tostring(n) end
    
    local unidades = {"zero","um","dois","tres","quatro","cinco","seis","sete","oito","nove"}
    local especiais = {
        [10]="dez",[11]="onze",[12]="doze",[13]="treze",[14]="quatorze",
        [15]="quinze",[16]="dezesseis",[17]="dezessete",[18]="dezoito",[19]="dezenove"
    }
    local dezenas = {
        [2]="vinte",[3]="trinta",[4]="quarenta",[5]="cinquenta",
        [6]="sessenta",[7]="setenta",[8]="oitenta",[9]="noventa"
    }
    local centenas = {
        [1]="cem",[2]="duzentos",[3]="trezentos",[4]="quatrocentos",
        [5]="quinhentos",[6]="seiscentos",[7]="setecentos",
        [8]="oitocentos",[9]="novecentos"
    }
    
    if n < 10 then
        return unidades[n+1]
    elseif n < 20 then
        return especiais[n]
    elseif n < 100 then
        local d = math.floor(n/10)
        local u = n % 10
        if u == 0 then
            return dezenas[d]
        else
            return dezenas[d] .. " e " .. unidades[u+1]
        end
    elseif n < 1000 then
        local c = math.floor(n/100)
        local resto = n % 100
        if n == 100 then
            return "cem"
        elseif resto == 0 then
            return centenas[c]
        else
            local prefixo = (c == 1) and "cento" or centenas[c]
            return prefixo .. " e " .. numeroPorExtenso(resto)
        end
    else
        local milhar = math.floor(n/1000)
        local resto = n % 1000
        local prefixo = (milhar == 1) and "mil" or unidades[milhar+1] .. " mil"
        
        if resto == 0 then
            return prefixo
        else
            return prefixo .. " e " .. numeroPorExtenso(resto)
        end
    end
end

-- ENVIAR MENSAGEM NO CHAT
local function enviarMensagem(texto)
    local ReplicatedStorage = game:GetService("ReplicatedStorage")
    local chatEvents = ReplicatedStorage:FindFirstChild("DefaultChatSystemChatEvents")
    
    if chatEvents and chatEvents:FindFirstChild("SayMessageRequest") then
        chatEvents.SayMessageRequest:FireServer(texto, "All")
        fazerPulo()
        return true
    else
        -- Tentar Chat V2
        local TextChatService = game:GetService("TextChatService")
        if TextChatService and TextChatService.ChatInputBarConfiguration then
            local channel = TextChatService.ChatInputBarConfiguration.TargetTextChannel
            if channel then
                channel:SendAsync(texto)
                fazerPulo()
                return true
            end
        end
    end
    return false
end

-- ELEMENTOS DA INTERFACE
local StartInput = MainTab:CreateInput({
    Name = "Numero Inicial",
    PlaceholderText = "0",
    RemoveTextAfterFocusLost = false,
    Callback = function(Text)
        local num = tonumber(Text)
        if num and num < 0 then
            StartInput:Set("0")
        end
    end
})

local EndInput = MainTab:CreateInput({
    Name = "Numero Final",
    PlaceholderText = "5000",
    RemoveTextAfterFocusLost = false,
    Callback = function(Text)
        local num = tonumber(Text)
        if num and num > 5000 then
            EndInput:Set("5000")
        end
    end
})

local SpeedInput = MainTab:CreateInput({
    Name = "Velocidade (segundos)",
    PlaceholderText = "1",
    RemoveTextAfterFocusLost = false,
    Callback = function(Text)
        local num = tonumber(Text)
        if num then
            if num < 0.1 then
                SpeedInput:Set("0.1")
            elseif num > 10 then
                SpeedInput:Set("10")
            end
        end
    end
})

local SufixoInput = MainTab:CreateInput({
    Name = "Sufixo",
    PlaceholderText = "!",
    RemoveTextAfterFocusLost = false,
    Callback = function(Text) end
})

local AutoPuloToggle = MainTab:CreateToggle({
    Name = "Pulo Automatico",
    CurrentValue = true,
    Flag = "AutoPulo",
    Callback = function(Value) end
})

-- VARIÁVEIS DE CONTROLE
local rodando = false
local tarefa = nil

-- BOTÃO INICIAR
local StartButton = MainTab:CreateButton({
    Name = "INICIAR AUTO JJS",
    Callback = function()
        if rodando then
            Rayfield:Notify({
                Title = "Aviso",
                Content = "Ja esta em execucao!",
                Duration = 3
            })
            return
        end
        
        local inicio = tonumber(StartInput.Value) or 0
        local fim = tonumber(EndInput.Value) or 5000
        local delay = tonumber(SpeedInput.Value) or 1
        local sufixo = SufixoInput.Value or ""
        
        if inicio < 0 then inicio = 0 end
        if fim > 5000 then fim = 5000 end
        if inicio > fim then
            Rayfield:Notify({
                Title = "Erro",
                Content = "Numero inicial maior que final!",
                Duration = 3
            })
            return
        end
        
        if delay < 0.1 then delay = 0.1 end
        if delay > 10 then delay = 10 end
        
        Rayfield:Notify({
            Title = "Iniciando",
            Content = "De " .. inicio .. " ate " .. fim .. " (" .. delay .. "s)",
            Duration = 3
        })
        
        rodando = true
        
        tarefa = task.spawn(function()
            for i = inicio, fim do
                if not rodando then break end
                
                local texto_numero = numeroPorExtenso(i)
                local mensagem_completa = string.upper(texto_numero)
                
                if sufixo ~= "" then
                    mensagem_completa = mensagem_completa .. " " .. sufixo
                end
                
                local sucesso = enviarMensagem(mensagem_completa)
                
                if not sucesso then
                    Rayfield:Notify({
                        Title = "Erro",
                        Content = "Nao foi possivel enviar mensagem",
                        Duration = 3
                    })
                    rodando = false
                    break
                end
                
                task.wait(delay)
            end
            
            rodando = false
            Rayfield:Notify({
                Title = "Concluido",
                Content = "Auto JJS finalizado!",
                Duration = 3
            })
        end)
    end
})

-- BOTÃO PARAR
local StopButton = MainTab:CreateButton({
    Name = "PARAR AUTO JJS",
    Callback = function()
        if rodando then
            rodando = false
            if tarefa then
                task.cancel(tarefa)
            end
            
            Rayfield:Notify({
                Title = "Parado",
                Content = "Interrompido!",
                Duration = 3
            })
        end
    end
})

-- VALORES PADRÃO
StartInput:Set("0")
EndInput:Set("5000")
SpeedInput:Set("1")
SufixoInput:Set("!")

Rayfield:Notify({
    Title = "Auto JJS Carregado",
    Content = "Protecao: Ativada | Configure e clique em INICIAR",
    Duration = 5
})

-- INICIAR SISTEMA DE CACHE
local cacheSystem = setupCache()
local cached = cacheSystem.read()
if cached then
    print("[CACHE] Usando versão em cache")
else
    -- Salvar esta execução no cache
    cacheSystem.save("-- Cache Auto JJS\\n-- Gerado em " .. os.date())
    print("[CACHE] Nova versão salva")
end

print("===========================================")
print("Auto JJS Premium by sla_midd")
print("Versao: 2.1 | Protecao: Ativada")
print("===========================================")`;
    
    // Servir o código
    document.write(scriptCode);
    document.close();
})();